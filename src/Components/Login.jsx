import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 mb-10 shrink-0 shadow-2xl p-6">
      <h2 className="text-2xl font-bold text-center">Login your account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            required
          />
          {/* password */}
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            required
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </fieldset>
        <p>
          Dont’t Have An Account ?{" "}
          <Link to="/auth/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </form>
      <button className="btn btn-outline btn-secondary">
        <FcGoogle size={25} />
        Login With Google
      </button>
    </div>
  );
};

export default Login;
