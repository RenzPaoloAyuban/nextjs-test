import '@styles/globals.css'

import { Analytics } from "@vercel/analytics/react"


import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "Promptopia",
    description: 'Discover the best prompts for your next writing session.'
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <Analytics id="UA-123456789-0" />
                    <div className="main">
                        <div className="gradient" />
                    </div>

                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>

    )
}

export default RootLayout