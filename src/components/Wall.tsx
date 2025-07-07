"use client";

import { AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import PostInput from "./PostInput";
import PostCard from "./PostCard";
import usePosts from "@/hooks/usePosts";
import { useRealtimePosts } from "@/hooks/useRealtimePosts";
import { useEffect, useState } from "react";
import { Post } from "@/types/post";

export default function Wall() {
  const { data: initialPosts, loading, error, refetch } = usePosts();
  const [posts, setPosts] = useState<Post[]>([]);

  // Set initial data
  useEffect(() => {
    if (initialPosts) {
      setPosts(initialPosts);
    }
  }, [initialPosts]);

  // Hook into realtime updates
  useRealtimePosts((newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#3B5998] text-white px-4 py-2">
        <h1 className="text-lg font-bold">Alejandro&apos;s Wall</h1>
      </header>

      <main className="flex flex-col lg:flex-row max-w-6xl mx-auto ">
        <Sidebar />

        <section className="flex-1 p-4 bg-white h-screen">
          {/* Post input */}
          <PostInput
            onPost={() => {
              refetch(); // still good to re-fetch to sync attachments later
            }}
          />

          {/* Loading and error states */}
          {loading && <p className="text-center py-6">Loading...</p>}
          {error && (
            <p className="text-center text-red-500">
              {error.message || "Something went wrong."}
            </p>
          )}

          {/* Posts list */}
          <AnimatePresence mode="popLayout">
            {posts && posts.length > 0
              ? posts.map((post) => <PostCard key={post.id} post={post} />)
              : !loading && (
                  <p className="text-center text-gray-500 py-12">
                    Be the first to write on Alejandro&apos;s wall!
                  </p>
                )}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}
