import { SignInWithOAuthCredentials } from "@supabase/supabase-js";
import { supabase } from "../../supabaseClient";

const useSignInWithOAuth = () => {
  const signInWithOAuth = (credentials: SignInWithOAuthCredentials) => {
    try {
      supabase.auth.signInWithOAuth(credentials);
    } catch (error) {
      console.log(error);
    }
  };
  return [signInWithOAuth];
};
export default useSignInWithOAuth;
