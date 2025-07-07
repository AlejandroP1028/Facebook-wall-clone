import { supabase } from "./supabaseClient";
import { Post } from "@/types/post"; // same shape you already used

/**
 * GET `/posts` ordered newest‑first.
 * Throws if Supabase returns an error.
 */
export const fetchPosts = async (): Promise<Post[]> => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false }); // change column name if needed

  if (error) throw new Error(error.message);
  return data as Post[];
};
