import { useContext } from "react";
import Navbar from "../../Shared/Navbar";
import { AuthContext } from "../../provider/AuthProvider";

const AddAsset = () => {
  const { isDashboardOpen } = useContext(AuthContext);

  return (
    <>
      <Navbar title={"Add Asset"}></Navbar>
      <div
        className={`flex items-end ${
          isDashboardOpen ? "justify-end mr-6" : "justify-center"
        }`}
      >
        <div
          style={{
            boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.25)",
          }}
          className="h-[800px] w-3/4"
        ></div>
      </div>
    </>
  );
};

export default AddAsset;
