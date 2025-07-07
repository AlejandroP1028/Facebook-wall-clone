import useFetch from "./useFetch";
import { fetchPosts } from "@/lib/fetchPosts";
import { Post } from "@/types/post";

export default function usePosts(auto = true) {
  return useFetch<Post[]>(fetchPosts, auto);
}
