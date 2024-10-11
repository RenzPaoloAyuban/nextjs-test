<<<<<<< HEAD
<<<<<<< HEAD
"use client";
=======
'use client';
>>>>>>> 1edbc47 (almost finished, search bar completed)
=======
"use client";
>>>>>>> 589f005 (make cancel button in forms dynamic)

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
<<<<<<< HEAD
<<<<<<< HEAD

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
=======
import { set } from "mongoose";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
    const [copied, setCopied] = useState("");

>>>>>>> 1edbc47 (almost finished, search bar completed)
=======

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
>>>>>>> 589f005 (make cancel button in forms dynamic)
    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 589f005 (make cancel button in forms dynamic)
    const [copied, setCopied] = useState("");

    const handleProfileClick = () => {
        console.log(post);

        if (post.creator._id === session?.user.id) return router.push("/profile");

        router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
    };
<<<<<<< HEAD
=======
>>>>>>> 1edbc47 (almost finished, search bar completed)
=======
>>>>>>> 589f005 (make cancel button in forms dynamic)

    const handleCopy = () => {
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
<<<<<<< HEAD
<<<<<<< HEAD
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <div className='prompt_card'>
            <div className='flex justify-between items-start gap-5'>
                <div
                    className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
                    onClick={handleProfileClick}
                >
                    <Image
                        src={post.creator.image}
                        alt='user_image'
                        width={40}
                        height={40}
                        className='rounded-full object-contain'
                    />

                    <div className='flex flex-col'>
                        <h3 className='font-satoshi font-semibold text-gray-900'>
                            {post.creator.username}
                        </h3>
                        <p className='font-inter text-sm text-gray-500'>
=======
        setTimeout(() => setCopied(""), 3000);
    }
=======
        setTimeout(() => setCopied(false), 3000);
    };
>>>>>>> 589f005 (make cancel button in forms dynamic)

    return (
        <div className='prompt_card'>
            <div className='flex justify-between items-start gap-5'>
                <div
                    className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
                    onClick={handleProfileClick}
                >
                    <Image
                        src={post.creator.image}
                        alt='user_image'
                        width={40}
                        height={40}
                        className='rounded-full object-contain'
                    />

                    <div className='flex flex-col'>
                        <h3 className='font-satoshi font-semibold text-gray-900'>
                            {post.creator.username}
                        </h3>
<<<<<<< HEAD
                        <p className="font-inter text-sm text-gray-500">
>>>>>>> 1edbc47 (almost finished, search bar completed)
=======
                        <p className='font-inter text-sm text-gray-500'>
>>>>>>> 589f005 (make cancel button in forms dynamic)
                            {post.creator.email}
                        </p>
                    </div>
                </div>

<<<<<<< HEAD
<<<<<<< HEAD
                <div className='copy_btn' onClick={handleCopy}>
                    <Image
                        src={
                            copied === post.prompt
                                ? "/assets/icons/tick.svg"
                                : "/assets/icons/copy.svg"
                        }
                        alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
                        width={12}
                        height={12}
                    />
                </div>
            </div>

            <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
            <p
                className='font-inter text-sm blue_gradient cursor-pointer'
                onClick={() => handleTagClick && handleTagClick(post.tag)}
            >
                #{post.tag}
            </p>

            {session?.user.id === post.creator._id && pathName === "/profile" && (
                <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
                    <p
                        className='font-inter text-sm green_gradient cursor-pointer'
                        onClick={handleEdit}
                    >
                        Edit
                    </p>
                    <p
                        className='font-inter text-sm orange_gradient cursor-pointer'
                        onClick={handleDelete}
                    >
                        Delete
                    </p>
                </div>
            )}
        </div>
    );
};

export default PromptCard;
=======
                <div className="copy_btn" onClick={handleCopy}>
=======
                <div className='copy_btn' onClick={handleCopy}>
>>>>>>> 589f005 (make cancel button in forms dynamic)
                    <Image
                        src={
                            copied === post.prompt
                                ? "/assets/icons/tick.svg"
                                : "/assets/icons/copy.svg"
                        }
                        alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
                        width={12}
                        height={12}
                    />
                </div>
            </div>

            <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
            <p
                className='font-inter text-sm blue_gradient cursor-pointer'
                onClick={() => handleTagClick && handleTagClick(post.tag)}
            >
                #{post.tag}
            </p>

            {session?.user.id === post.creator._id && pathName === "/profile" && (
                <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
                    <p
                        className='font-inter text-sm green_gradient cursor-pointer'
                        onClick={handleEdit}
                    >
                        Edit
                    </p>
                    <p
                        className='font-inter text-sm orange_gradient cursor-pointer'
                        onClick={handleDelete}
                    >
                        Delete
                    </p>
                </div>
            )}
        </div>
    );
};

<<<<<<< HEAD
export default PromptCard
>>>>>>> 1edbc47 (almost finished, search bar completed)
=======
export default PromptCard;
>>>>>>> 589f005 (make cancel button in forms dynamic)
