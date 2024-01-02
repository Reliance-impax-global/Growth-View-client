import { useContext, useState } from "react";

import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const ChangePass = () => {
  const { user } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);

  const handleChangePassword = async () => {
    try {
      setError(null);

      if (!user) {
        console.log("User not logged in");
        return;
      }

      if (!newPassword) {
        setError("Please enter a new password.");
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
      if (error.code === "auth/requires-recent-login") {
        setError(
          "This operation requires you to sign in again for security purposes."
        );
      } else if (error.code === "auth/invalid-credential") {
        setError("Incorrect Password.");
      } else if (error.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else {
        setError(error.message);
      }
      console.error("Error changing password:", error.message);
    }
  };

  return (
    <dialog id="my_modal_5" className="modal">
      <div className="modal-box w-[1268px] h-[556px]">
        <h2 className="text-center text-blue-800 text-[40px] font-semibold font-['Inter']">
          Change Password
        </h2>
        <div className="flex justify-between items-center px-4 my-12">
          <div>Login ID</div>{" "}
          <input
            value={user.email}
            readOnly
            type="text"
            className="input input-bordered border-black w-2/3 h-[60px] focus:bg-zinc-300"
          />
        </div>
        <div className="flex justify-between items-center px-4">
          <div>Current Password</div>{" "}
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="input input-bordered border-black w-2/3 h-[60px] focus:bg-zinc-300"
          />
        </div>
        <div className="flex justify-between items-center px-4 mt-12 ">
          <div>New Password</div>{" "}
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="input input-bordered border-black w-2/3 h-[60px] focus:bg-zinc-300"
          />
        </div>
        {error && <div className="text-red-500 m-6">{error}</div>}

        <div
          onClick={handleChangePassword}
          className="cursor-pointer flex justify-center items-center mx-auto w-[105px] h-[50px] p-2.5 bg-blue-800 gap-2.5"
        >
          <h2 className="text-white text-[25px] font-medium">Submit</h2>
        </div>
      </div>
    </dialog>
  );
};

export default ChangePass;
