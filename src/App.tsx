import { useEffect } from "react";
import "./App.css";
import useSessionStore from "./stores/useSessionStore";
import { supabase } from "./supabaseClient";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, Profile, SignIn, SignUp } from "./screens";

function App() {
  const { setSession } = useSessionStore();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/signIn",
      element: <SignIn />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
  ]);

  useEffect(() => {
    supabase.auth.onAuthStateChange((e, s) => setSession(s));
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
