import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";

const Register = () => {
  const { creatUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoUrl, email, password);
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
        //
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 mb-10 shrink-0 shadow-2xl p-6">
      <h2 className="text-2xl font-bold text-center">Register your account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input
            name="name"
            type="Text"
            className="input"
            placeholder="Name"
            required
          />

          {/* Photo URL */}
          <label className="label">Photo URL</label>
          <input
            name="photoUrl"
            type="Text"
            className="input"
            placeholder="Photo URL"
            required
          />

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
            Register
          </button>
        </fieldset>
        <p>
          Already Have An Account ?{" "}
          <Link to="/auth/login" className="text-blue-600">
            Login
          </Link>
        </p>
        <button className="btn btn-outline btn-secondary">
          <FcGoogle size={25} />
          Sign Up With Google
        </button>
      </form>
    </div>
  );
};

export default Register;
