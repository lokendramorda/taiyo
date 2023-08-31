import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import taiyo from "../assests/taiyo.png";
import pfp from "../assests/pfp.png";

export default function Home() {
  const [link, setLink] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLink(window.location.pathname);
    }, 5);
  }, []);

  const [sidebar, setSidebar] = useState(false);

  const handleToggle = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <>
      <div className=" overflow-y-auto h-full z-30 relative">
        <div
          className={`sm:w-full md:w-full  ${
            sidebar ? "sm:block md:block" : "sm:hidden md:hidden"
          } lg:block   lg:h-screen lg:mt-0 md:mt-0 sm:mt-[73px] md:mt-20 lg:w-1/5 left-0 top-0 z-20  fixed bg-white p-4 pt-8 text-black flex flex-col items-start fixed  overflow-y-auto shadow `}
        >
          <h2 className="text-2xl shadow flex justify-center h-[6%] items-center rounded-lg p-4 lg:w-[90%] md:w-[40%] sm:w-[90%] border border-gray-300 font-semibold ml-4 mb-8">
            Dashboard
          </h2>
          <div>
            <ul className="space-y-4  items-center justify-center w-full">
              <li className="flex flex-row items-center ">
                <ArrowForwardIosIcon
                  style={{ fontSize: "12px" }}
                  className="text-gray-500 mr-3"
                />
                <Link
                  style={{ color: "#1D267D" }}
                  to="/"
                  className={`text-md flex items-center text-[19px] lg:w-[80%] sm:w-[50%] md:w-[38%] justify-center ${
                    link === "/" ? "border border-blue-900" : ""
                  } hover:border-blue-900 hover:border items-center text-blue-900 font-serif px-4 py-2 rounded-lg transition-colors`}
                >
                  My Contacts
                </Link>
              </li>
              <li className="flex flex-row items-center ">
                <ArrowForwardIosIcon
                  style={{ fontSize: "12px" }}
                  className="text-gray-500 mr-3"
                />
                <Link
                  style={{ color: "#1D267D" }}
                  to="/Dashboard"
                  className={`text-md flex items-center text-[19px] lg:w-[80%] sm:w-[50%] md:w-[38%]  justify-center ${
                    link === "/Dashboard" ? "border border-blue-900" : ""
                  } hover:border-blue-900 hover:border items-center text-blue-900 font-serif px-4 py-2 rounded-lg transition-colors`}
                >
                  Charts and Maps
                </Link>
              </li>
            </ul>
          </div>
          <div className="h-[65%] flex items-center flex justify-center mt-5 font-sans ">
            <img
              src={taiyo}
              alt="taiyo"
              className="text-center w-[60%] mt-auto lg:block md:hidden sm:hidden"
              style={{ color: "#1D267D", fontWeight: "500" }}
            ></img>
          </div>
        </div>
      </div>

      <div className="  flex-row sticky border border-gray-300 top-0  z-20 bg-white">
        <nav className="w-full ">
          <div className="justify-between items-center flex  px-4 mx-auto   ">
            <div>
              <ul
                onClick={handleToggle}
                className="flex items-center  cursor-pointer"
              >
                <li className=" sm:block md:block lg:hidden mr-auto">
                  <img src={taiyo} alt="taiyo" className="w-[100px]" />
                </li>
              </ul>
            </div>

            <div>
              <ul className="flex items-center space-y-3 flex space-x-6 space-y-0">
                <li className="text-black flex items-center  ">
                  <button>
                    <NotificationsNoneRoundedIcon
                      style={{ color: "#1D267D" }}
                    />
                  </button>
                </li>

                <li className="mb-2 flex items-center ml-auto lg:hidden md:hidden sm:block ">
                  <button className=" items-center flex justify-center relative border w-[40px] h-[40px] rounded-full bg-white mr-4 overflow-hidden shadow-xl mb-3 ">
                    <img src={pfp} alt="pfp" />
                  </button>
                </li>
                <li className="text-black sm:hidden lg:block md:block">
                  <div
                    className="mb-2 flex items-center p-2 rounded-lg  border border-gray-200"
                    style={{ color: "#1D267D" }}
                  >
                    <div className=" items-center flex justify-center relative border w-[40px] h-[40px] rounded-full bg-white mr-4 overflow-hidden shadow-xl ">
                      <img src={pfp} alt="pfp" />
                    </div>

                    <div>
                      <p style={{ fontSize: "11px" }}>Welcome back </p>
                    </div>
                    <div className="ml-9">
                      <KeyboardArrowDownIcon />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
