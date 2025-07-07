import { supabase } from "@/lib/supabaseClient";
import { Post } from "@/types/post";

export async function addPost({
  author,
  message,
}: {
  author: string;
  message: string;
}): Promise<Post> {
  const { data, error } = await supabase
    .from("posts")
    .insert([{ author, message }])
    .select()
    .single();

  if (error) throw error;

  return data as Post;
}
