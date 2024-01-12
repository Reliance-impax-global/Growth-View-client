import { useContext, useState } from "react";
import Navbar from "../../Shared/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
const AddAsset = () => {
  const { isDashboardOpen } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const [place, setPlace] = useState("");
  const onSubmit = async (data) => {
    const processedData = {
      ...data,
      place: place,
    };
    const submitResponse = await axios.post(
      "https://rig-task-server.vercel.app/addAsset",
      processedData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (submitResponse.data.insertedId) {
      Swal.fire("success", "asset added successfully!", "ok");
      reset();
    }
  };

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
          <form onSubmit={handleSubmit(onSubmit)} action="">
            {" "}
            <div className="flex justify-center items-center gap-24 my-12">
              <h3 className="text-black text-3xl font-medium w-[300px]">
                Country :
              </h3>
              <select
                required
                {...register("country")}
                type="text"
                placeholder="Type here"
                className="input input-bordered border-[#003DA3] w-[700px] h-[60px] "
              >
                <option disabled selected>
                  Select
                </option>
                <option>India</option>
                <option>Bangladesh</option>
                <option>Pakistan</option>
              </select>
            </div>
            <div className="flex justify-center items-center gap-24 my-12">
              <h3 className="text-black text-3xl font-medium w-[300px]">
                Place:
              </h3>
              <input
                onChange={(data) => setPlace(data.target.value)}
                required
                // {...register("place")}
                type="text"
                placeholder="Type here"
                className="input input-bordered border-[#003DA3] w-[700px] h-[60px]"
              />
            </div>
            <div className="flex justify-center items-center gap-24 my-12">
              <h3 className="text-black text-3xl font-medium w-[300px]">
                Asset Category:
              </h3>
              <select
                required
                {...register("asset_category")}
                type="text"
                placeholder="Type here"
                className="input input-bordered border-[#003DA3] w-[700px] h-[60px]"
              >
                {" "}
                <option disabled selected>
                  Select
                </option>
                <option>Website</option>
                <option>Office</option>
                <option>Car</option>
              </select>
            </div>
            <div className="flex justify-center items-center gap-24 my-12">
              <h3 className="text-black text-3xl font-medium w-[300px]">
                Asset Name:
              </h3>
              <input
                required
                {...register("asset_name")}
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
                {...register("asset_expense_amount")}
                type="number"
                placeholder="Type here"
                className="input input-bordered border-[#003DA3] w-[700px] h-[60px]"
              />
            </div>
            <div className="w-[69px] h-[50px] p-2.5 bg-blue-800 justify-center items-center gap-2.5 cursor-pointer mx-auto">
              <button
                type="submit"
                className="text-white text-[25px] font-medium font-['Inter']"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAsset;
