"use server";
import { createClient } from "@/supabase/server";

const signOut = async () => {
  const supabase = await createClient();
  return await supabase.auth.signOut();
};

export { signOut };
