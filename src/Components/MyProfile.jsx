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
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100 py-10">
      <div className="bg-gradient-to-tr from-indigo-900 via-purple-800 to-pink-700 rounded-3xl shadow-xl max-w-md w-full p-10">
        <h2 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          My Profile
        </h2>

        <div className="flex justify-center mb-6">
          <img
            src={photoURL || "https://via.placeholder.com/150?text=No+Image"}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>

        <h3 className="text-2xl font-semibold text-white mb-2">
          Name: <span>{user.displayName || "No display name"}</span>
        </h3>

        <p className="text-lg text-white mb-8">
          Email: <span className="font-medium">{user.email}</span>
        </p>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2">
            Display Name:
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your display name"
          />
        </div>

        <div className="mb-8">
          <label className="block text-white font-semibold mb-2">
            Photo URL:
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter photo URL"
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full py-3 rounded-lg bg-yellow-400 text-indigo-900 font-extrabold hover:bg-yellow-300 transition-shadow shadow-md hover:shadow-xl"
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
