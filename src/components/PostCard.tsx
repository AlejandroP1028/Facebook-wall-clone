import { Post } from "@/types/post";
import { motion } from "framer-motion";

export default function PostCard({ post }: { post: Post }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="border-b border-gray-300 pb-4"
    >
      <div className="font-bold text-gray-800">{post.author}</div>
      <div className="text-gray-700 mb-2">{post.message}</div>

      {post.attachments?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
          {post.attachments.map((f, i) => (
            <img
              key={i}
              src={URL.createObjectURL(f)}
              alt={f.name}
              className="h-32 object-cover border"
            />
          ))}
        </div>
      ) : null}

      <div className="text-xs text-gray-500">
        {post.timestamp.toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}
      </div>
    </motion.div>
  );
}
