import { createClient } from "@/supabase/server";
import { toAbsoluteUrl } from "@/auth/handle-path";

const signUpNewUser = async (email: string, password: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: { emailRedirectTo: toAbsoluteUrl("/signup/confirm") },
  });
  return { data, error };
};

export { signUpNewUser };
