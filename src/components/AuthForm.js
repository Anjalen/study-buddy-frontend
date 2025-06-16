import { useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login");
  const navigate = useNavigate();

  const handleAuth = async () => {
    const fn = mode === "login"
      ? supabase.auth.signInWithPassword
      : supabase.auth.signUp;

    const { data, error } = await fn({ email, password });
    if (error) return alert(error.message);

    localStorage.setItem("user", JSON.stringify(data.user));
    navigate("/dashboard");
  };

  return (
    <div className="bg-white p-6 rounded shadow w-96 mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">{mode === "login" ? "Log In" : "Sign Up"}</h2>
      <input
        className="w-full border p-2 mb-3 rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full border p-2 mb-4 rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleAuth}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        {mode === "login" ? "Log In" : "Sign Up"}
      </button>
      <p
        className="mt-2 text-sm text-blue-600 text-center cursor-pointer"
        onClick={() => setMode(mode === "login" ? "signup" : "login")}
      >
        {mode === "login" ? "Need an account? Sign up" : "Have one? Log in"}
      </p>
    </div>
  );
};

export default AuthForm;
