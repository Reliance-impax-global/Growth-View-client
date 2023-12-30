import { useState } from "react";
import logo from "../assets/logo.svg";
import profileLogo from "../assets/profileLogo.svg";
import dashOpen from "../assets/dashOpen.svg";
import dashClose from "../assets/dashClose.svg";
const ManagerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-screen h-[250px] ">
      {/* navbar first section start */}
      <div className="flex justify-between items-center px-[40px]">
        <div className="flex  justify-center items-center">
          <img className="w-[35px] h-[35px] mr-2" src={logo} alt="logo" />
          <div className="text-violet-900 text-[35px] font-normal font-['League Spartan']">
            Growth View
          </div>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 btn-ghost hover:bg-transparent h-[60px]"
          >
            <img src={profileLogo} alt="" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52 bg-[#029DD1] text-white"
          >
            <li>
              <button>CHANGE PASSWORD</button>
            </li>
            <li>
              <button>LOGOUT</button>
            </li>
          </ul>
        </div>
      </div>
      {/* first section end */}

      {/* second section start */}
      <div className="mt-[50px] flex justify-between items-center">
        <div className="flex-1">
          {isOpen ? (
            <img
              className="hover:cursor-pointer"
              onClick={toggleDropdown}
              src={dashClose}
              alt=""
            />
          ) : (
            <img
              className="hover:cursor-pointer"
              onClick={toggleDropdown}
              src={dashOpen}
              alt=""
            />
          )}
          {isOpen && (
            <div className="flex flex-col items-start justify-start text-center rounded-lg">
              {" "}
              <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-[40px] font-semibold font-['Inter']">
                  Dashboard
                </div>
              </div>
              <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-[40px] font-semibold font-['Inter']">
                  Add Earning
                </div>
              </div>
              <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-[40px] font-semibold font-['Inter']">
                  Add Expenses
                </div>
              </div>
              <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-[40px] font-semibold font-['Inter']">
                  Earning Record
                </div>
              </div>
              <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-[40px] font-semibold font-['Inter']">
                  Expense Record
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 text-blue-800 text-[40px] font-semibold font-['Inter']">
          Dashboard
        </div>
          </div>
          {/* second section end */}
      <div className="mx-auto w-[1782.01px] my-4 h-[0px] border border-blue-600"></div>
    </div>
  );
};

export default ManagerNavbar;
