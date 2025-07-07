"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Post } from "@/types/post";
import Sidebar from "./Sidebar";
import PostInput from "./PostInput";
import PostCard from "./PostCard";

export default function Wall() {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <div className="min-h-screen bg-white">
      {/* header */}
      <header className="bg-[#3B5998] text-white px-4 py-2">
        <h1 className="text-lg font-bold">Alejandro&apos;s Wall</h1>
      </header>

      <main className="flex flex-col lg:flex-row max-w-6xl mx-auto">
        <Sidebar />

        <section className="flex-1 p-4">
          <PostInput onPost={(p) => setPosts([p, ...posts])} />

          {/* posts list */}
          <AnimatePresence mode="popLayout">
            {posts.length ? (
              posts.map((post) => <PostCard key={post.id} post={post} />)
            ) : (
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
