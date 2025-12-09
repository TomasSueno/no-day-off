import { supabase } from "./lib/supabase";

export default async function Home() {
  const setNewView = async () => {
      const { data } = await supabase
  .from("new_users")
  .insert({
    name: "random_name"
  });

  if (data) console.log(data)
  }

  setNewView()


  // return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return <div>Hello!</div>
}
