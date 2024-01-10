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
          className="h-full w-3/4 py-20"
        >
          <div className="flex justify-center items-center gap-24 my-12">
            <h3 className="text-black text-3xl font-medium w-[300px]">
              Country :
            </h3>
            <input
              required
              type="text"
              placeholder="Type here"
              className="input input-bordered border-[#003DA3] w-[700px] h-[60px] "
            />
          </div>
          <div className="flex justify-center items-center gap-24 my-12">
            <h3 className="text-black text-3xl font-medium w-[300px]">
              Place:
            </h3>
            <input
              required
              type="text"
              placeholder="Type here"
              className="input input-bordered border-[#003DA3] w-[700px] h-[60px]"
            />
          </div>
          <div className="flex justify-center items-center gap-24 my-12">
            <h3 className="text-black text-3xl font-medium w-[300px]">
              Asset Category:
            </h3>
            <input
              required
              type="text"
              placeholder="Type here"
              className="input input-bordered border-[#003DA3] w-[700px] h-[60px]"
            />
          </div>
          <div className="flex justify-center items-center gap-24 my-12">
            <h3 className="text-black text-3xl font-medium w-[300px]">
              Asset Name:
            </h3>
            <input
              required
              type="text"
              placeholder="Type here"
              className="input input-bordered border-[#003DA3] w-[700px] h-[60px]"
            />
          </div>
          <div className="flex justify-center items-center gap-24 my-12">
            <h3 className="text-black text-3xl font-medium w-[300px]">
              Asset Expense Amount:
            </h3>
            <input
              required
              type="text"
              placeholder="Type here"
              className="input input-bordered border-[#003DA3] w-[700px] h-[60px]"
            />
          </div>
          <div className="flex justify-center items-center">
            <button>edd</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAsset;
