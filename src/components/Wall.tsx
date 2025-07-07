import { useRealtimePosts } from "@/hooks/useRealtimePosts";
import usePosts from "@/hooks/usePosts";
import PostCard from "./PostCard";
import PostInput from "./PostInput";
import Sidebar from "./Sidebar";
import { Post } from "@/types/post";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Wall() {
  const { data, loading, error } = usePosts(); // Initial fetch
  const [posts, setPosts] = useState<Post[]>([]);

  // Populate posts from the initial fetch
  useEffect(() => {
    if (data) setPosts(data);
  }, [data]);

  // 🔁 Add real-time updates
  useRealtimePosts((newPost: Post) => {
    setPosts((prev) => [newPost, ...prev]);
  });

  return (
    <main className="...">
      <Sidebar />
      <section className="...">
        <PostInput
          onPost={(newPost) => setPosts((prev) => [newPost, ...prev])}
        />
        <AnimatePresence>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}
