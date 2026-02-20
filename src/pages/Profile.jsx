import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  //  current user
  const currentUser =
    JSON.parse(localStorage.getItem("currentUser")) || null;

  //  all users
  const users = JSON.parse(localStorage.getItem("users")) || [];

  //  redirect if not logged in
  useEffect(() => {
    if (!currentUser) navigate("/login");
  }, []);

  const [name, setName] = useState(currentUser?.name || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [password, setPassword] = useState(currentUser?.password || "");

  const [editProfile, setEditProfile] = useState(false);
  const [changePass, setChangePass] = useState(false);

  //  password fields
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [msg, setMsg] = useState("");

  // SAVE PROFILE 
  const saveProfile = () => {
    const updatedUsers = users.map((u) =>
      u.email === currentUser.email
        ? { ...u, name, email, password }
        : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ name, email, password })
    );

    setEditProfile(false);
    setMsg("Profile updated successfully");
    setTimeout(() => setMsg(""), 3000);
  };

  //  CHANGE PASSWORD 
  const updatePassword = () => {
    if (!oldPass || !newPass || !confirmPass) {
      setMsg("All password fields are required");
      return;
    }

    if (oldPass !== password) {
      setMsg("Old password is incorrect");
      return;
    }

    if (newPass.length < 4) {
      setMsg(" Password must be at least 4 characters");
      return;
    }

    if (newPass !== confirmPass) {
      setMsg(" New & confirm password do not match");
      return;
    }

    setPassword(newPass);

    const updatedUsers = users.map((u) =>
      u.email === email ? { ...u, password: newPass } : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ name, email, password: newPass })
    );

    setOldPass("");
    setNewPass("");
    setConfirmPass("");
    setChangePass(false);

    setMsg("🔐 Password changed successfully");
    setTimeout(() => setMsg(""), 3000);
  };

  // FORGOT PASSWORD 
  const sendResetLink = () => {
    setMsg(`📧 Reset link sent to ${email} (demo)`);
    setTimeout(() => setMsg(""), 3000);
  };

  //UI 
  return (
    <div className="min-h-screen flex justify-center items-start pt-20
      bg-slate-100 dark:bg-slate-900 transition">

      <div className="bg-white dark:bg-slate-800
        rounded-2xl shadow-xl w-full max-w-md p-8">

        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2
          text-slate-800 dark:text-white">
          👤 My Profile
        </h2>

        {msg && (
          <p className="mb-4 text-center text-sm text-indigo-500">
            {msg}
          </p>
        )}

        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full bg-indigo-500
            text-white flex items-center justify-center text-3xl font-bold">
            {name.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* VIEW PROFILE*/}
        {!editProfile && !changePass && (
          <>
            <div className="space-y-3 text-slate-700 dark:text-slate-200">
              <p><b>Name:</b> {name}</p>
              <p><b>Email:</b> {email}</p>
            </div>

            <div className="mt-6 space-y-3">
              <button
                onClick={() => setEditProfile(true)}
                className="w-full py-3 rounded-xl
                bg-gradient-to-r from-indigo-500 to-blue-600
                text-white font-semibold">
                Edit Profile
              </button>

              <button
                onClick={() => setChangePass(true)}
                className="w-full py-3 rounded-xl
                bg-slate-700 text-white">
                Change Password
              </button>

              <button
                onClick={sendResetLink}
                className="w-full py-3 rounded-xl
                bg-orange-500 text-white">
                Forgot Password
              </button>

              <button
                onClick={() => navigate("/properties")}
                className="w-full py-3 rounded-xl
                bg-blue-500 text-white">
                View Properties
              </button>
            </div>
          </>
        )}

        {/*  EDIT PROFILE */}
        {editProfile && (
          <div className="space-y-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full px-4 py-3 rounded-xl
              bg-slate-100 dark:bg-slate-700
              text-slate-800 dark:text-white outline-none"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl
              bg-slate-100 dark:bg-slate-700
              text-slate-800 dark:text-white outline-none"
            />

            <button
              onClick={saveProfile}
              className="w-full py-3 rounded-xl
              bg-green-500 text-white">
              Save Changes
            </button>

            <button
              onClick={() => setEditProfile(false)}
              className="w-full py-3 rounded-xl
              bg-slate-400 text-white">
              Cancel
            </button>
          </div>
        )}

        {/*  CHANGE PASSWORD*/}
        {changePass && (
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Old password"
              value={oldPass}
              onChange={(e) => setOldPass(e.target.value)}
              className="w-full px-4 py-3 rounded-xl
              bg-slate-100 dark:bg-slate-700
              text-slate-800 dark:text-white outline-none"
            />

            <input
              type="password"
              placeholder="New password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="w-full px-4 py-3 rounded-xl
              bg-slate-100 dark:bg-slate-700
              text-slate-800 dark:text-white outline-none"
            />

            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              className="w-full px-4 py-3 rounded-xl
              bg-slate-100 dark:bg-slate-700
              text-slate-800 dark:text-white outline-none"
            />

            <button
              onClick={updatePassword}
              className="w-full py-3 rounded-xl
              bg-indigo-600 text-white">
              Update Password
            </button>

            <button
              onClick={() => setChangePass(false)}
              className="w-full py-3 rounded-xl
              bg-slate-400 text-white">
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
