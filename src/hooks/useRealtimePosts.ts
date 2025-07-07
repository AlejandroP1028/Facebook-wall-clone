import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export const useRealtimePosts = (onNewPost: (post: any) => void) => {
  useEffect(() => {
    const channel = supabase
      .channel("realtime-posts")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "posts",
        },
        (payload) => {
          onNewPost(payload.new);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [onNewPost]);
};
