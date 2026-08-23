import { createClient } from "@/supabase/server";

const supabase = await createClient();

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export { signOut };
