import { createClient } from "@/supabase/client";

const supabase = createClient();

const SignInAnonymously = async () => {
  const { data, error } = await supabase.auth.signInAnonymously();
  return { data, error };
};

export { SignInAnonymously };
