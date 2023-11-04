import { Session } from "@supabase/supabase-js";
import { create } from "zustand";

interface ISession {
  session?: Session | null;
  setSession: (session: Session | null) => void;
  resetSession: () => void;
}

const useSessionStore = create<ISession>((set) => ({
  session: undefined,
  setSession: (session) => set(() => ({ session: session })),
  resetSession: () => set(() => ({ session: undefined })),
}));

export default useSessionStore;
