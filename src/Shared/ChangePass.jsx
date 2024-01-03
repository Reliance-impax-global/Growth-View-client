import { useContext, useState } from "react";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import img from "../assets/close.svg";

const ChangePass = () => {
  const { user } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);

  const handleChangePassword = async () => {
    try {
      setError(null);

      if (!user) {
        setError("User not logged in");
        return;
      }

      if (!currentPassword || !newPassword) {
        setError("Please enter both current and new passwords.");
        return;
      }

      // Reauthenticate the user before changing the password
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await reauthenticateWithCredential(user, credential);

      // Change the user's password
      await updatePassword(user, newPassword);

      // Logout the user after changing password (optional)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your password has been updated",
        showConfirmButton: false,
        timer: 1500,
      });

      // Close the modal or perform other actions
      document.getElementById("my_modal_5").close();
    } catch (error) {
      switch (error.code) {
        case "auth/requires-recent-login":
          setError(
            "This operation requires you to sign in again for security purposes."
          );
          break;
        case "auth/invalid-credential":
          setError("Incorrect Password.");
          break;
        case "auth/weak-password":
          setError("Password should be at least 6 characters.");
          break;
        default:
          setError(error.message || "Error changing password");
          break;
      }
      console.error("Error changing password:", error.message);
    }
  };

  return (
    <dialog id="my_modal_5" className="modal">
      <div className="modal-box w-[1268px] h-[556px]">
        <img
          className="btn btn-sm btn-circle btn-ghost absolute  right-4 top-4"
          src={img}
          onClick={() => document.getElementById("my_modal_5").close()}
        />
        <h2 className="text-center text-blue-800 text-[40px] font-semibold font-['Inter']">
          Change Password
        </h2>
        <div className="flex justify-between items-center px-4 my-12">
          <div>Login ID</div>{" "}
          <input
            value={user?.email || ""}
            readOnly
            type="text"
            className="input input-bordered border-black w-2/3 h-[60px] focus:bg-zinc-300"
          />
        </div>
        <div className="flex justify-between items-center px-4 relative">
          <div>Current Password</div>{" "}
          <input
            type={showCurrent ? "text" : "password"}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="input input-bordered border-black w-2/3 h-[60px] focus:bg-zinc-300"
          />
          {/* show or hide password start */}
          <div className="absolute inset-y-0 right-8 bottom-2 pr-3 flex items-center text-sm leading-5 cursor-pointer">
            <svg
              className={`h-6 text-gray-700 ${
                showCurrent ? "hidden" : "block"
              }`}
              fill="none"
              onClick={() => setShowCurrent(!showCurrent)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
              />
            </svg>

            <svg
              className={`h-6 text-gray-700 ${
                showCurrent ? "block" : "hidden"
              }`}
              fill="none"
              onClick={() => setShowCurrent(!showCurrent)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07a32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
              />
            </svg>
          </div>
          {/* show or hide password end */}
        </div>
        <div className="flex justify-between items-center px-4 mt-12 relative">
          <div>New Password</div>{" "}
          <input
            type={showNew ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="input input-bordered border-black w-2/3 h-[60px] focus:bg-zinc-300"
          />
          {/* show or hide password start */}
          <div className="absolute inset-y-0 right-8 bottom-2 pr-3 flex items-center text-sm leading-5 cursor-pointer">
            <svg
              className={`h-6 text-gray-700 ${showNew ? "hidden" : "block"}`}
              fill="none"
              onClick={() => setShowNew(!showNew)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
              />
            </svg>

            <svg
              className={`h-6 text-gray-700 ${showNew ? "block" : "hidden"}`}
              fill="none"
              onClick={() => setShowNew(!showNew)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07a32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
              />
            </svg>
          </div>
          {/* show or hide password end */}
        </div>
        {error && <div className="text-red-500 m-6">{error}</div>}

        <div
          onClick={handleChangePassword}
          className="cursor-pointer flex justify-center items-center mx-auto w-[105px] h-[50px] p-2.5 bg-blue-800 gap-2.5 my-6"
        >
          <h2 className="text-white text-[25px] font-medium ">Submit</h2>
        </div>
      </div>
    </dialog>
  );
};

export default ChangePass;
