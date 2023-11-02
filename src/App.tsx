import "./App.css";
import { useSignInWithOAuth } from "./services/auth";
import { supabase } from "./supabaseClient";

function App() {
  const [signIn] = useSignInWithOAuth();
  supabase.auth.onAuthStateChange((e, s) => console.log(e, s));
  return (
    <div className="">
      <button onClick={() => signIn({ provider: "discord" })}>
        sign with otp
      </button>

      <button onClick={() => supabase.auth.signOut()}>sign out</button>
    </div>
  );
}

export default App;
