import "./App.css";
import { useSignInWithOAuth } from "./services/auth";
import { supabase } from "./supabaseClient";

function App() {
  const [signIn] = useSignInWithOAuth();
  return (
    <div className="">
      <button onClick={() => signIn({ provider: "discord" })}>
        sign with otp
      </button>
    </div>
  );
}

export default App;
