import { createClient } from "@/supabase/server";

const signUpNewUser = async (email: string, password: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: { emailRedirectTo: "/signup/confirm" },
  });
  return { data, error };
};

export { signUpNewUser };
