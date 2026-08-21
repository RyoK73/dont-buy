import { createClient } from "@/supabase/client";

const supabase = createClient();

const signUpNewUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: { emailRedirectTo: "/signup/confirm" },
  });
  return { data, error };
};

export { signUpNewUser };
