import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom"; // ✅ router-dom use korte hobe
import { AuthContext } from "../firebase/FirebaseAuthProvider";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);

  // Email/Password Login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password); // ✅ correct variable

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("✅ Email Login:", user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Google Login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log("✅ Google Login Success:", user);
      })
      .catch((error) => {
        console.log(error);
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
          Don’t Have An Account?{" "}
          <Link to="/auth/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </form>

      {/* ✅ Google Login Button */}
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline btn-secondary"
      >
        <FcGoogle size={25} />
        Login With Google
      </button>
    </div>
  );
};

export default Login;
