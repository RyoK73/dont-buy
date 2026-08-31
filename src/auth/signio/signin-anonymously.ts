import { createClient } from "@/supabase/server";

const signInAnonymously = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInAnonymously();
  return { data, error };
};

export { signInAnonymously };
