import { useSession } from "@supabase/auth-helpers-react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const session = useSession();

  return (
    <div className="container mx-auto flex h-screen items-center justify-center">
      {!session ? <p>Not Logged</p> : <p>Logged In</p>}
    </div>
  );
};

export default Home;
