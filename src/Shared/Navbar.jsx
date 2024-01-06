import { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import profileLogo from "../assets/profileLogo.svg";
import dashOpen from "../assets/dashOpen.svg";
import dashClose from "../assets/dashClose.svg";
import { NavLink } from "react-router-dom";
import ChangePass from "./ChangePass";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsDashboardOpen, logOut } = useContext(AuthContext);
  const role = "manager";
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen h-[250px] relative">
      {/* Navbar first section start */}
      <div className="flex justify-between items-center px-[40px]">
        <div className="flex justify-center items-center">
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
            className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-[#029DD1] text-white"
          >
            <li>
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                CHANGE PASSWORD
              </button>
            </li>
            <li>
              <button onClick={() => logOut()}>LOGOUT</button>
            </li>
          </ul>
        </div>
      </div>
      {/* First section end */}

      {/* Second section start */}
      <div className="mt-[20px] flex justify-between items-center">
        <div className="flex-1">
          {isOpen ? (
            <img
              className="hover:cursor-pointer"
              onClick={() => {
                toggleDropdown();
                setIsDashboardOpen(false);
              }}
              src={dashClose}
              alt=""
            />
          ) : (
            <img
              className="hover:cursor-pointer"
              onClick={() => {
                toggleDropdown();
                setIsDashboardOpen(true);
              }}
              src={dashOpen}
              alt=""
            />
          )}
          {/* Nav link start */}
          {isOpen && (
            <div className="absolute left-1 w-[333px] bg-[#2d2e2e] rounded-lg overflow-hidden">
              {role === "manager" && (
                <>
                  {/* manager Links */}
                  <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-[40px] font-semibold">
                      <NavLink
                        to="/"
                        onClick={() => setIsDashboardOpen(false)}
                        className="text-white px-6 py-4 rounded hover:text-[#5f57c5] transition-colors duration-300 aria-[current=page]:bg-[#02779E]"
                      >
                        Dashboard
                      </NavLink>
                    </div>
                  </div>
                  <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-[40px] font-semibold">
                      <NavLink
                        onClick={() => setIsDashboardOpen(false)}
                        to="/addEarning"
                        className="text-white px-6 py-4 rounded hover:text-[#5f57c5] transition-colors duration-300 aria-[current=page]:bg-[#02779E]"
                      >
                        Add Earning
                      </NavLink>
                    </div>
                  </div>
                  <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-[40px] font-semibold">
                      <NavLink
                        to="/addExpense"
                        onClick={() => setIsDashboardOpen(false)}
                        className="text-white px-6 py-4 rounded hover:text-[#5f57c5] transition-colors duration-300 aria-[current=page]:bg-[#02779E]"
                      >
                        Add Expense
                      </NavLink>
                    </div>
                  </div>
                  <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-[30px] font-semibold">
                      <NavLink
                        to="/earningRecord"
                        onClick={() => setIsDashboardOpen(false)}
                        className="text-white px-6 py-4 rounded hover:text-[#5f57c5] transition-colors duration-300 aria-[current=page]:bg-[#02779E]"
                      >
                        Earning Record
                      </NavLink>
                    </div>
                  </div>
                  <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex hover:cursor-pointer ">
                    <div className="text-white text-[30px] font-semibold">
                      <NavLink
                        onClick={() => setIsDashboardOpen(false)}
                        to="/expenseRecord"
                        className="text-white p-4 rounded hover:text-[#5f57c5] transition-colors duration-300 aria-[current=page]:bg-[#02779E]"
                      >
                        Expense Record
                      </NavLink>
                    </div>
                  </div>
                </>
              )}
              {role === "admin" && (
                <>
                  {/* Admin links */}
                  <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-[40px] font-semibold">
                      <NavLink
                        onClick={() => setIsDashboardOpen(false)}
                        to="/profitLoss"
                        className="text-white px-6 py-4 rounded hover:text-[#5f57c5] transition-colors duration-300 aria-[current=page]:bg-[#02779E]"
                      >
                        Profit/Loss
                      </NavLink>
                    </div>
                  </div>
                  <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-[40px] font-semibold">
                      <NavLink
                        onClick={() => setIsDashboardOpen(false)}
                        to="/earning"
                        className="text-white px-6 py-4 rounded hover:text-[#5f57c5] transition-colors duration-300 aria-[current=page]:bg-[#02779E]"
                      >
                        Earning
                      </NavLink>
                    </div>
                  </div>
                  <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-[40px] font-semibold">
                      <NavLink
                        onClick={() => setIsDashboardOpen(false)}
                        to="/expense"
                        className="text-white px-6 py-4 rounded hover:text-[#5f57c5] transition-colors duration-300 aria-[current=page]:bg-[#02779E]"
                      >
                        Expense
                      </NavLink>
                    </div>
                  </div>
                  <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-[30px] font-semibold">
                      <NavLink
                        to="/availableAsset"
                        onClick={() => setIsDashboardOpen(false)}
                        className="text-white px-6 py-4 rounded hover:text-[#5f57c5] transition-colors duration-300 aria-[current=page]:bg-[#02779E]"
                      >
                        Available Asset
                      </NavLink>
                    </div>
                  </div>
                  <div className="w-[333px] h-[130px] px-2.5 py-[40px] bg-[#029DD1] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-[40px] font-semibold">
                      <NavLink
                        to="/addAsset"
                        onClick={() => setIsDashboardOpen(false)}
                        className="text-white px-6 py-4 rounded hover:text-[#5f57c5] transition-colors duration-300 aria-[current=page]:bg-[#02779E]"
                      >
                        Add Asset
                      </NavLink>
                    </div>
                  </div>
                  {/* ... */}
                </>
              )}
            </div>
          )}
          {/* Navlink end */}
        </div>
        <div className="flex-1 text-blue-800 text-[40px] font-semibold mr-24">
          {title}
        </div>
      </div>
      {/* Second section end */}
      <div className="mx-auto w-[1782.01px] my-4 h-[0px] border border-blue-600"></div>
      <ChangePass />
    </div>
  );
};

export default Navbar;
