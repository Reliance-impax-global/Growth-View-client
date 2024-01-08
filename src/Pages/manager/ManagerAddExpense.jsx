import { useContext, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDropzone } from "react-dropzone";
import Navbar from "../../Shared/Navbar";
import img from "../../assets/chalender.svg";
import img2 from "../../assets/gellary.svg";
import img3 from "../../assets/close.svg";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

const ManagerAddExpense = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const datePickerRef = useRef(null);
  const { isDashboardOpen } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const handleImgClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,

    maxFiles: 1,
  });
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // const formData = new FormData();
      // formData.append("file", acceptedFiles[0]);

      // Upload file to the server using axios
      // const fileResponse = await axios.post(
      //   "https://rig-task-server.vercel.app/payment/upload",
      //   formData,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );

      // if (!fileResponse.data.filePath) {
      //   throw new Error("File upload failed");
      // }

      // Get the file link from the server response
      // const { filePath } = fileResponse.data;

      // Combine file link with other processed data
      const processedData = {
        ...data,
        date: selectedDate.toLocaleDateString("en-GB"),
        // proof_file: filePath,
        added_by: user.email,
      };

      // Now, you can send processedData to the server for MongoDB storage
      const submitResponse = await axios.post(
        "https://rig-task-server.vercel.app/addExpense",
        processedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(submitResponse.data);

      if (submitResponse.data.insertedId) {
        Swal.fire("success", "Expense added successfully!", "ok");
        setSelectedDate(null);
        reset();
      }

      // Add your logic to handle the response from MongoDB storage
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <Navbar title={"Add Expense"} />
      <div
        className={`flex ${isDashboardOpen ? "justify-end" : "justify-center"}`}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div
            style={{
              boxShadow: "0px 0px 41.5px 5px rgba(0, 0, 0, 0.18)",
            }}
            className="w-[1385px] h-auto bg-white shadow mx-20 border pt-20 flex flex-col items-center"
          >
            <div className="flex justify-center items-center gap-24 my-6">
              <h3 className="text-black text-3xl font-medium w-[300px]">
                Expense :
              </h3>
              <input
                required
                {...register("expense_source")}
                type="text"
                placeholder="Type here"
                className="input input-bordered border-[#003DA3] w-[700px] h-[60px]"
              />
            </div>
            <div className="flex justify-center items-center gap-24 my-6">
              <h3 className="text-black text-3xl font-medium w-[300px]">
                Country:
              </h3>
              <select
                required
                {...register("country")}
                className="select select-bordered border-[#003DA3] w-[700px] h-[60px] text-center text-[15px]"
              >
                <option value="" disabled>
                  Select
                </option>
                <option>India</option>
                <option>Bangladesh</option>
              </select>
            </div>
            <div className="flex justify-center items-center gap-24 my-6">
              <h3 className="text-black text-3xl font-medium w-[300px]">
                Place:
              </h3>
              <select
                required
                {...register("place")}
                className="select select-bordered border-[#003DA3] w-[700px] h-[60px] text-center text-[15px]"
              >
                <option value="" disabled>
                  Select
                </option>
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Bengal</option>
              </select>
            </div>
            <div className="flex justify-center items-center gap-24 my-6">
              <h3 className="text-black text-3xl font-medium w-[300px]">
                Asset Type:
              </h3>
              <select
                required
                {...register("asset_type")}
                className="select select-bordered border-[#003DA3] w-[700px] h-[60px] text-center text-[15px]"
              >
                <option value="" disabled>
                  Select
                </option>
                <option>Car</option>
                <option>Website</option>
                <option>Office</option>
              </select>
            </div>
            <div className="flex justify-center items-center gap-24 my-6">
              <h3 className="text-black text-3xl font-medium w-[300px]">
                Asset Name:
              </h3>
              <select
                required
                {...register("asset_name")}
                className="select select-bordered border-[#003DA3] w-[700px] h-[60px] text-center text-[15px]"
              >
                <option value="" disabled>
                  Select
                </option>
                <option>Range Rover</option>
                <option>SUV</option>
                <option>Wagon R</option>
              </select>
            </div>
            <div className="flex justify-center items-center gap-24 my-6">
              <h3 className="text-black text-3xl font-medium w-[300px]">
                Date:
              </h3>

              <div className="relative">
                <input
                  required
                  {...register("date")}
                  type="text"
                  placeholder="DD/MM/YYYY"
                  className="input input-bordered border-[#003DA3] w-[700px] h-[60px]"
                  value={selectedDate ? selectedDate.toDateString() : ""}
                  readOnly
                />
                <img
                  className="absolute right-2 top-2 cursor-pointer"
                  src={img}
                  alt="Calendar"
                  onClick={handleImgClick}
                />
                <DatePicker
                  ref={datePickerRef}
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="Select Date"
                  className="absolute top-full hidden left-0 mt-2 p-2 bg-white border border-[#003DA3]"
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-24 my-6">
              <h3 className="text-black text-3xl font-medium w-[300px]">
                Amount :
              </h3>
              <input
                required
                {...register("amount")}
                type="number"
                placeholder="Type here"
                className="input input-bordered border-[#003DA3] w-[700px] h-[60px]"
              />
            </div>
            <div className="flex justify-center items-center gap-24 my-6">
              <h3 className="text-black text-3xl font-medium w-[300px]">
                Paid to:
              </h3>
              <input
                required
                {...register("paid_to")}
                type="text"
                placeholder="Type here"
                className="input input-bordered border-[#003DA3] w-[700px] h-[60px]"
              />
            </div>
            <div className="flex justify-center items-center gap-24 my-6 mr-[600px]">
              <h3 className="text-black text-3xl font-medium w-[300px]">
                Add Payment Proof:
              </h3>
              {acceptedFiles[0] ? (
                <div>
                  {acceptedFiles[0].name ? (
                    <p>{acceptedFiles[0].name}</p>
                  ) : (
                    <div
                      onClick={() =>
                        document.getElementById("my_modal_4").showModal()
                      }
                      className="w-[106px] h-[50px] p-2.5 bg-blue-800 justify-center items-center gap-2.5 inline-flex text-[25px] font-medium text-white hover:cursor-pointer"
                    >
                      Upload
                    </div>
                  )}
                </div>
              ) : (
                <div
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                  className="w-[106px] h-[50px] p-2.5 bg-blue-800 justify-center items-center gap-2.5 inline-flex text-[25px] font-medium text-white hover:cursor-pointer"
                >
                  Upload
                </div>
              )}

              <dialog id="my_modal_4" className="modal">
                <div
                  {...getRootProps({ className: "dropzone" })}
                  className="w-[1224px] h-[412px] flex flex-col justify-center items-center  relative bg-white rounded-[20px] gap-2"
                >
                  <img
                    className="btn btn-sm btn-circle btn-ghost absolute  right-4 top-4"
                    src={img3}
                    onClick={() =>
                      document.getElementById("my_modal_4").close()
                    }
                  />

                  <input {...getInputProps()} />
                  <img src={img2} alt="" />
                  <h2>
                    Drop your image here or{" "}
                    <span
                      className="underline link-info hover:cursor-pointer"
                      onClick={open}
                    >
                      Browse
                    </span>
                  </h2>
                  <p className="text-zinc-400 text-[25px] font-normal ">
                    {acceptedFiles[0]?.name || "No File Uploaded"}
                  </p>
                  <div
                    onClick={() =>
                      document.getElementById("my_modal_4").close()
                    }
                    className="w-[106px] hover:cursor-pointer h-[50px] p-2.5 bg-blue-800 justify-center items-center gap-2.5 inline-flex text-white"
                  >
                    Upload
                  </div>
                </div>
              </dialog>
            </div>
            <button
              type="submit"
              className="w-[451px]  hover:cursor-pointer h-[88px] px-[100px] py-5 bg-blue-800 rounded-[10px] shadow text-center my-6 text-white text-[40px]"
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ManagerAddExpense;
