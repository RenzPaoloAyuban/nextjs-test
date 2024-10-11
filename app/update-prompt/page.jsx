"use client";

import { useEffect, useState, Suspense } from "react"; // Import Suspense
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdatePrompt = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get("id");

    const [post, setPost] = useState({ prompt: "", tag: "" });
    const [submitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const getPromptDetails = async () => {
            if (!promptId) return;

            const response = await fetch(`/api/prompt/${promptId}`);
            if (!response.ok) {
                console.error('Failed to fetch prompt details');
                return;
            }
            const data = await response.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag,
            });
        };

        getPromptDetails();
    }, [promptId]);

    const updatePrompt = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!promptId) {
            alert("Missing PromptId!");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json", // Add headers for JSON
                },
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                }),
            });

            if (response.ok) {
                router.push("/");
            } else {
                console.error('Failed to update prompt');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Form
                type='Edit'
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={updatePrompt}
            />
        </Suspense>
    );
};

export default UpdatePrompt;
