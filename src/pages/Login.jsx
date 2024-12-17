import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useState } from "react";

// toast
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.warning("At least one field is not filled!");
      return;
    }
  };
  return (
    <div className="h-screen grid place-items-center w-full font-semibold">
      <form
        onSubmit={handleSubmit}
        className="max-w-80 md:max-w-96 mx-auto w-full"
      >
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-5">
          Login
        </h2>
        <FormInput
          type="email"
          placeholder="Email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          placeholder="Password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="my-5">
          <button
            type="submit"
            className="btn btn-neutral btn-block text-lg md:text-xl btn-sm md:btn-md"
          >
            Login
          </button>
        </div>
        <div className="text-center">
          <p>
            No account?{" "}
            <Link className="link" to="/register">
              Register
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
