import React, { useContext, useState } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { Navigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleSave = () => {
    if (user) {
      updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      })
        .then(() => {
          alert("✅ Profile updated!");
          setUser({ ...user, displayName: name, photoURL: photoURL });
        })
        .catch((error) => {
          console.error("❌ Update failed:", error.message);
        });
    }
  };

  return user ? (
    <div className="flex justify-center my-10">
      <div className="card bg-yellow-200 w-full max-w-sm shrink-0 shadow-2xl p-10">
        <h2 className="font-bold text-4xl pb-5">My Profile</h2>

        {/* Profile Photo */}
        <img
          src={photoURL}
          alt="Profile"
          className="w-20 h-20 rounded-full border border-gray-300"
        />

        {/* Static Name */}
        <h2 className="pt-3">
          <span className="text-3xl font-bold"> Name : </span>
          <span className="text-3xl"> {user.displayName}</span>
        </h2>

        {/* Email */}
        <p className="pt-2">
          <span className="font-bold text-xl">Email : </span>
          <span>{user.email}</span>
        </p>

        {/* Editable Display Name */}
        <div className="pt-6">
          <label className="font-bold">Display Name:</label>
          <input
            type="text"
            className="input input-bordered w-full mt-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Editable Photo URL */}
        <div className="pt-6">
          <label className="font-bold">Photo URL:</label>
          <input
            type="text"
            className="input input-bordered w-full mt-2"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="btn bg-blue-600 text-white hover:bg-blue-700 mt-7"
        >
          Save Changes
        </button>
      </div>
    </div>
  ) : (
    <Navigate to="/auth/login" />
  );
};

export default MyProfile;
