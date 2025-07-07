"use client";

import { useState } from "react";
import { Post } from "@/types/post";
import { motion } from "framer-motion";
import { addPost } from "@/lib/supabase/posts"; // ✅ import helper

interface Props {
  onPost: (p: Post) => void;
}

export default function PostInput({ onPost }: Props) {
  const [authorName, setAuthorName] = useState("");
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [loading, setLoading] = useState(false); // Optional loading state

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setAttachments((prev) => [...prev, ...files]);
  };

  const share = async () => {
    if (!message.trim()) return;
    try {
      setLoading(true);
      const newPost = await addPost({
        author: authorName.trim() || "Anonymous",
        message: message.trim(),
      });
      onPost(newPost);
      // Reset form
      setAuthorName("");
      setMessage("");
      setAttachments([]);
    } catch (err) {
      console.error("Error posting:", err);
      alert("Failed to post. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mb-6">
      <h3 className="text-lg text-gray-700 mb-4">
        Write something on Alejandro&apos;s wall
      </h3>

      <input
        className="w-full p-2 border border-gray-300 text-gray-700 mb-3 text-sm"
        placeholder="Your name (optional)"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
      />

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="What's on your mind?"
        maxLength={280}
        className="w-full h-20 border-2 border-dashed border-gray-400 bg-blue-50/30 p-3 mb-3 resize-none text-sm"
      />

      {/* Attachments are stored but not sent yet */}
      {attachments.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-3"
        >
          {attachments.map((file, i) => (
            <img
              key={i}
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="h-20 object-cover border"
            />
          ))}
        </motion.div>
      )}

      <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
        <label className="cursor-pointer text-[#3B5998] text-sm font-medium">
          📷 Add Photos
          <input
            type="file"
            multiple
            onChange={handleFile}
            className="hidden"
          />
        </label>

        <p className="text-gray-600 text-xs">{message.length}/280</p>

        <button
          onClick={share}
          disabled={loading || (!message.trim() && attachments.length === 0)}
          className="bg-[#3B5998] text-white px-6 py-2 text-sm font-bold rounded disabled:opacity-50"
        >
          {loading ? "Sharing..." : "Share"}
        </button>
      </div>
    </section>
  );
}
