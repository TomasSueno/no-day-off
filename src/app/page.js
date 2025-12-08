import { supabase } from "./lib/supabase";

export default async function Home() {
  const { data } = await supabase.from("users").select("*");
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}