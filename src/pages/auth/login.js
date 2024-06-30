import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../../config/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  // const saveUserToCustomTable = async (user) => {
  //   const { error } = await supabase
  //     .from("users")
  //     .insert([
  //       { auth_user_id: user.id, email: user.email, username: user?.username },
  //     ]);

  //   if (error) {
  //     console.error("Error saving user to custom table:", error);
  //   } else {
  //     console.log("User saved to custom table successfully.");
  //   }
  // };

  useEffect(() => {
    // Check if there is an active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setSession(session);
        // saveUserToCustomTable(session.user);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      // if (session) {
      //   saveUserToCustomTable(session.user);
      // }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) {
      navigate("/get-started");
    }
  }, [session, navigate]);

  return (
    <div className="flex flex-col justify-center flex-1 min-h-full py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-3 font-mono text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
          Sign in for an account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="px-6 py-12 bg-white shadow sm:rounded-lg sm:px-12">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={["discord", "github"]}
          />
        </div>
      </div>
    </div>
  );
}
