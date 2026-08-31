import { createClient } from "@supabase/supabase-js";

const url = import.meta.env["VITE_SUPABASE_URL"];
const publishableKey = import.meta.env["VITE_SUPABASE_PUBLISHABLE_KEY"];

if (!url || !publishableKey) {
  // Surface a clear message during dev instead of a cryptic runtime error.
  console.warn(
    "Supabase env missing: set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in .env.local",
  );
}

export const supabase = createClient(url ?? "", publishableKey ?? "", {
  auth: { persistSession: false },
});

export type ContactEnquiry = {
  name: string;
  email: string;
  phone: string | null;
  reason: string;
  message: string;
};
