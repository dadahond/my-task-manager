import { Link, useActionData, Form } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useEffect, useState } from "react";

// toast
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRegister } from "../hooks/useRegister";

// action
export const action = async ({ request }) => {
  const form = await request.formData();
  const displayName = form.get("name");
  const email = form.get("email");
  const password = form.get("password");
  return { displayName, email, password };
};

function Register() {
  // hook
  const { registerWithEmailAndPassword } = useRegister();
  // action data
  const data = useActionData();
  useEffect(() => {
    if (data) {
      registerWithEmailAndPassword(data.displayName, data.email, data.password);
    }
  }, [data]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatpassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, repeatpassword } = formData;

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
      <Form
        method="post"
        // onSubmit={handleSubmit}
        className="max-w-80 md:max-w-96 mx-auto w-full"
      >
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-5">
          Registration Form
        </h2>
        <FormInput
          type="text"
          placeholder="Name"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <FormInput
          type="email"
          placeholder="Email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          placeholder="Password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          placeholder="Repeat password"
          label="Repeat password"
          name="repeatpassword"
          value={formData.repeatpassword}
          onChange={handleChange}
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
      </Form>
      <ToastContainer />
    </div>
  );
}
export default Register;
