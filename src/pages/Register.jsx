import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useState } from "react";

// toast
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedRepeatPassword = repeatpassword.trim();

    if (
      !trimmedName ||
      !trimmedEmail ||
      !trimmedPassword ||
      !trimmedRepeatPassword
    ) {
      toast.warning("At least one field is not filled!");
      return;
    }
    if (trimmedPassword.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    if (trimmedPassword !== trimmedRepeatPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    // check if there is letter
    const containsLetter = /[a-zA-Z]/.test(trimmedPassword);
    if (!containsLetter) {
      toast.error("Password must include at least one letter");
      return;
    }

    // Success case
    toast.success("Registration successful!");
  };
  return (
    <div className="h-screen grid place-items-center w-full font-semibold">
      <form
        onSubmit={handleSubmit}
        className="max-w-80 md:max-w-96 mx-auto w-full"
      >
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-5">
          Registration Form
        </h2>
        <FormInput
          type="text"
          placeholder="Name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <FormInput
          type="password"
          placeholder="Repeat password"
          label="Repeat password"
          value={repeatpassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <div className="mt-5">
          <button className="btn btn-neutral btn-block text-lg md:text-xl btn-sm md:btn-md">
            Submit
          </button>
        </div>
        <div className="text-center mt-5">
          <p>
            Have an account?{" "}
            <Link className="link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;
