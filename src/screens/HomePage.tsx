import React, { useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useSignInWithOAuth } from "../services/auth";
import useSessionStore from "../stores/useSessionStore";
import { NavBar } from "../components";

const HomePage = () => {
  const [signIn] = useSignInWithOAuth();
  const { session, setSession, resetSession } = useSessionStore();
  useEffect(() => {
    supabase.auth.onAuthStateChange((e, s) => setSession(s));
  }, []);

  return (
    <div className="bg-slate-200 h-full">
      <NavBar />
      <button
        onClick={() => supabase.auth.signInWithOAuth({ provider: "google" })}
      >
        sign with otp
      </button>

      <button onClick={() => supabase.auth.signOut()}>sign out</button>
      <div className="">{JSON.stringify(session)}</div>
    </div>
  );
};

export default HomePage;
