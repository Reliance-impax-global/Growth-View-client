import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDropzone } from "react-dropzone";
import ManagerNavbar from "../../Shared/ManagerNavbar";
import img from "../../assets/chalender.svg";
import img2 from "../../assets/gellary.svg";
import img3 from "../../assets/close.svg";

const ManagerAddExpense = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const datePickerRef = useRef(null);

  const handleImgClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
  });

  return (
    <>
      <ManagerNavbar title={"Add Expense"} />
      <div
        style={{
          boxShadow: "0px 0px 41.5px 5px rgba(0, 0, 0, 0.18)",
        }}
        className="w-[1385px] h-auto bg-white shadow mx-auto border pt-20 flex flex-col items-center"
      >
        {/** Expense Source */}
        <div className="flex justify-center items-center gap-24 my-6">
          <h3 className="text-black text-3xl font-medium w-[300px]">
            Expense source:
          </h3>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered border-[#003DA3] w-[700px] h-[60px]"
          />
        </div>

        {/** Country */}
        <div className="flex justify-center items-center gap-24 my-6">
          <h3 className="text-black text-3xl font-medium w-[300px]">
            Country:
          </h3>
          <select className="select select-bordered border-[#003DA3] w-[700px] h-[60px] text-center text-[15px]">
            <option disabled selected>
              Select
            </option>
            <option>India</option>
            <option>Bangladesh</option>
          </select>
        </div>

        {/** Place */}
        <div className="flex justify-center items-center gap-24 my-6">
          <h3 className="text-black text-3xl font-medium w-[300px]">Place:</h3>
          <select className="select select-bordered border-[#003DA3] w-[700px] h-[60px] text-center text-[15px]">
            <option disabled selected>
              Select
            </option>
            <option>India</option>
            <option>Bangladesh</option>
          </select>
        </div>

        {/** Asset Type */}
        <div className="flex justify-center items-center gap-24 my-6">
          <h3 className="text-black text-3xl font-medium w-[300px]">
            Asset Type:
          </h3>
          <select className="select select-bordered border-[#003DA3] w-[700px] h-[60px] text-center text-[15px]">
            <option disabled selected>
              Select
            </option>
            <option>India</option>
            <option>Bangladesh</option>
          </select>
        </div>

        {/** Asset Name */}
        <div className="flex justify-center items-center gap-24 my-6">
          <h3 className="text-black text-3xl font-medium w-[300px]">
            Asset Name:
          </h3>
          <select className="select select-bordered border-[#003DA3] w-[700px] h-[60px] text-center text-[15px]">
            <option disabled selected>
              Select
            </option>
            <option>India</option>
            <option>Bangladesh</option>
          </select>
        </div>

        {/** Date of Spending */}
        <div className="flex justify-center items-center gap-24 my-6">
          <h3 className="text-black text-3xl font-medium w-[300px]">
            Date of Spending:
          </h3>
          <div className="relative">
            <input
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

        {/** Amount */}
        <div className="flex justify-center items-center gap-24 my-6">
          <h3 className="text-black text-3xl font-medium w-[300px]">Amount:</h3>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered border-[#003DA3] w-[700px] h-[60px]"
          />
        </div>

        {/** Client Name */}
        <div className="flex justify-center items-center gap-24 my-6">
          <h3 className="text-black text-3xl font-medium w-[300px]">
            Client Name:
          </h3>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered border-[#003DA3] w-[700px] h-[60px]"
          />
        </div>

        {/** Add Payment Proof */}
        <div className="flex justify-center items-center gap-24 my-6 mr-[600px]">
          <h3 className="text-black text-3xl font-medium w-[300px]">
            Add Payment Proof:
          </h3>
          <div
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="w-[106px] h-[50px] p-2.5 bg-blue-800 justify-center items-center gap-2.5 inline-flex text-[25px] font-medium text-white hover:cursor-pointer"
          >
            Upload
          </div>
          <dialog id="my_modal_4" className="modal">
            <div
              {...getRootProps({ className: "dropzone" })}
              className="w-[1224px] h-[412px] flex flex-col relative justify-center items-center bg-white rounded-[20px] gap-2"
            >
              <img
                className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                src={img3}
                onClick={() => document.getElementById("my_modal_4").close()}
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
              <button className="w-[106px] hover:cursor-pointer h-[50px] p-2.5 bg-blue-800 justify-center items-center gap-2.5 inline-flex text-white">
                Upload
              </button>
            </div>
          </dialog>
        </div>

        {/** Add Expense Button */}
        <div className="w-[451px] hover:cursor-pointer h-[88px] px-[100px] py-5 bg-blue-800 rounded-[10px] shadow text-center my-6 text-white text-[40px]">
          Add Expense
        </div>
      </div>
    </>
  );
};

export default ManagerAddExpense;
