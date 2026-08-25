"use server";
import { createClient } from "@/supabase/server";

const signOut = async () => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  return error?.message;
};

export { signOut };
