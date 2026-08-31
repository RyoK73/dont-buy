"use server";
import { createClient } from "@/supabase/server";

// supabase.auth.signOutのラッパー関数 errorメッセージ|undefinedを返す
const signOut = async () => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  return error?.message;
};

export { signOut };
