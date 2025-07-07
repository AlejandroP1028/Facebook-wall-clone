"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import PostInput from "./PostInput";
import PostCard from "./PostCard";
import usePosts from "@/hooks/usePosts";
import { Post } from "@/types/post";

export default function Wall() {
  const { data: posts, loading, error, refetch } = usePosts();

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
            onPost={(newPost) => {
              refetch();
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
