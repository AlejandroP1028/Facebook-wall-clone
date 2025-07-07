import { supabase } from "./supabaseClient";

export const getPosts = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};
