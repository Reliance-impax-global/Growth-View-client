import { useState } from "react";
import logo from "../assets/logo.svg";
import profileLogo from "../assets/profileLogo.svg";
import dashOpen from "../assets/dashOpen.svg";
import dashClose from "../assets/dashClose.svg";
import { Link } from "react-router-dom";
const ManagerNavbar = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-screen h-[250px] relative">
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
      <div className="mt-[20px] flex justify-between items-center">
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
            <div className="absolute  left-1 w-[333px] bg-[#2d2e2e] rounded-lg overflow-hidden ">
              {" "}
              <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-[40px] font-semibold  ">
                  Dashboard
                </div>
              </div>
              <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-[40px] font-semibold  hover:cursor-pointer">
                  <Link to={"/addearning"}>Add Earning</Link>
                </div>
              </div>
              <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-[40px] font-semibold hover:cursor-pointer ">
                  Add Expenses
                </div>
              </div>
              <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-[40px] font-semibold  hover:cursor-pointer">
                  Earning Record
                </div>
              </div>
              <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex hover:cursor-pointer ">
                <div className="text-white text-[40px] font-semibold hover:text-red-400">
                  Expense Record
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 text-blue-800 text-[40px] font-semibold mr-24">
          {title}
        </div>
      </div>
      {/* second section end */}
      <div className="mx-auto w-[1782.01px] my-4 h-[0px] border border-blue-600"></div>
    </div>
  );
};

export default ManagerNavbar;
