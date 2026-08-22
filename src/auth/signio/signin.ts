import { createClient } from "@/supabase/client";

const supabase = createClient();

const signInWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return { data, error };
};

export { signInWithEmail };
