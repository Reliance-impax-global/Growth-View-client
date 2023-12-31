import { useRef, useState } from "react";
import ManagerNavbar from "../../Shared/ManagerNavbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import img from "../../assets/chalender.svg";
import img2 from "../../assets/gellary.svg";

const ManagerAddEarning = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const datePickerRef = useRef(null);

  const handleImgClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  return (
    <>
      <ManagerNavbar title={"Add Earning"}></ManagerNavbar>
      <div
        style={{
          boxShadow: "0px 0px 41.5px 5px rgba(0, 0, 0, 0.18)",
        }}
        className="w-[1385px] h-auto bg-white shadow mx-auto border pt-20 flex flex-col items-center"
      >
        <div className="flex justify-center items-center gap-24 my-6">
          <h3 className="text-black text-3xl font-medium w-[300px]">
            Earning source :
          </h3>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered border-[#003DA3] w-[700px] h-[60px]"
          />
        </div>
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
        <div className="flex justify-center items-center gap-24 my-6">
          <h3 className="text-black text-3xl font-medium w-[300px]">Date:</h3>

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
        <div className="flex justify-center items-center gap-24 my-6">
          <h3 className="text-black text-3xl font-medium w-[300px]">
            Amount :
          </h3>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered border-[#003DA3] w-[700px] h-[60px]"
          />
        </div>
        <div className="flex justify-center items-center gap-24 my-6">
          <h3 className="text-black text-3xl font-medium w-[300px]">
            Client Name: :
          </h3>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered border-[#003DA3] w-[700px] h-[60px]"
          />
        </div>
        <div className="flex justify-center items-center gap-24 my-6 mr-[600px]">
          <h3 className="text-black text-3xl font-medium w-[300px]">
            Add Payment Proof:
          </h3>
          <div
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className=" w-[106px] h-[50px] p-2.5 bg-blue-800 justify-center items-center gap-2.5 inline-flex text-[25px] font-medium text-white"
          >
            Upload
          </div>
          <dialog id="my_modal_4" className="modal">
            <div className="w-[1224px] h-[412px] flex flex-col justify-center items-center  bg-white rounded-[20px]">
              <img src={img2} alt="" />?<h2>Drop your image here or Browse</h2>
              <p>Supports jpg/png</p>
              <button>Upload</button>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default ManagerAddEarning;
