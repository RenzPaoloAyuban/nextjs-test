import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectToDB } from "@utils/database";

let isConnected = false;

const checkConnection = async () => {
  if (!isConnected) {
    const connectionStatus = await connectToDB();
    isConnected = true;  // Mark as connected after the first successful connection
    console.log(connectionStatus); // Logs the connection status or any error message
  }
};

checkConnection();  // Ensure DB connection when server starts

// Define the NextAuth handler
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // When the session is created, fetch the user from the database
      const sessionUser = await User.findOne({ email: session.user.email });

      if (sessionUser) {
        session.user.id = sessionUser._id.toString();  // Attach the MongoDB _id to session
      }

      return session;
    },
    async signIn({ profile }) {
      try {
        await checkConnection();  // Ensure the DB connection before attempting to sign in

        // Check if a user already exists
        const userExists = await User.findOne({ email: profile.email });

        // If user doesn't exist, create a new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),  // Creating username by sanitizing the name
            image: profile.picture,
          });
        }

        return true;  // Allow the sign-in process to proceed
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;  // Deny sign-in on failure
      }
    },
  },
});

export { handler as GET, handler as POST };
