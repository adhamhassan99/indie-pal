import { useEffect } from "react";
import "./App.css";
import { useSignInWithOAuth } from "./services/auth";
import useSessionStore from "./stores/useSessionStore";
import { supabase } from "./supabaseClient";

function App() {
  const [signIn] = useSignInWithOAuth();
  const { session, setSession, resetSession } = useSessionStore();
  useEffect(() => {
    supabase.auth.onAuthStateChange((e, s) => setSession(s));
  }, []);

  return (
    <div className="">
      <button
        onClick={() =>
          supabase.auth.signUp({
            email: "adhamhassan100@yahoo.com",
            password: "PassWord1234",
          })
        }
      >
        sign with otp
      </button>

      <button onClick={() => supabase.auth.signOut()}>sign out</button>
      <div className="">{JSON.stringify(session)}</div>
    </div>
  );
}

export default App;
