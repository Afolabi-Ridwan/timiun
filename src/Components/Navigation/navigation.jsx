import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { RxDashboard } from "react-icons/rx";
import {
  MdGroups,
  MdOutlinePersonAddAlt,
  MdOutlineReceiptLong,
  MdLogout,
} from "react-icons/md";
import { GiChart } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";
import { TbSettingsExclamation } from "react-icons/tb";
import Logo from "../../Assets/Images/logo (1).png"

const Navigation = () => {
  const [dropDownState, setDropDownState] = useState(false);

  const dropDownHandler = () => {
    setDropDownState((prev) => !prev);
  };

  return (
    <div className="w-[200px] bg-grey-transparent p-4 h-[100vh]">
      <div>
        <p className="flex items-center ">
          {" "}
          <img src={Logo} alt="logo" className="w-[30px]"/>{" "}
          <span className="ml-2">Timiun</span>
        </p>
      </div>

      <div>
        <ul className="mt-10">
          <li className=" group cursor-pointer flex mt-2 px-2 text-[15px]  hover:bg-green-light hover:py-2 hover:rounded hover:text-white hover:fill-white">
            <RxDashboard className="h-[24px] w-[24px] mr-2 text-grey-light group-hover:text-white" />
            Dashboard{" "}
          </li>
          <li>
            {" "}
            <div
              onClick={dropDownHandler}
              className={` group cursor-pointer flex mt-6 px-2 text-[15px] justify-between items-center hover:bg-green-light hover:py-2 hover:rounded hover:text-white hover:fill-white duration-300 ${
                dropDownState && "block"
              }`}
            >
              <span className="flex">
                <MdGroups className="h-[24px] w-[24px] mr-2 text-grey-light group-hover:text-white" />
                Employee{" "}
              </span>{" "}
            </div>
          </li>
          <li className="group duration-300 cursor-pointer flex mt-6 px-2 text-[15px] justify-between items-center fill-grey-light hover:bg-green-light hover:py-2 hover:rounded hover:text-white hover:fill-white">
            {" "}
            <span className="flex">
              <MdOutlinePersonAddAlt className="h-[24px] w-[24px] mr-2 text-grey-light group-hover:text-white" />
              Recruitment{" "}
            </span>{" "}
          </li>
          <li className="group duration-300 cursor-pointer flex mt-6 px-2 text-[15px] justify-between items-center fill-grey-light hover:bg-green-light hover:py-2 hover:rounded hover:text-white hover:fill-white">
            <span className="flex">
              <GiChart className="h-[24px] w-[24px] mr-2 text-grey-light group-hover:text-white" />
              Performance{" "}
            </span>{" "}
          </li>
          <li className="group duration-300 cursor-pointer flex mt-6 px-2 text-[15px] justify-between items-center fill-grey-light hover:bg-green-light hover:py-2 hover:rounded hover:text-white hover:fill-white">
            <span className="flex">
              <MdOutlineReceiptLong className="h-[24px] w-[24px] mr-2 text-grey-light group-hover:text-white" />
              Payroll{" "}
            </span>{" "}
          </li>
          <li className=" group duration-300 cursor-pointer flex mt-6 px-2 text-[15px] justify-between items-center fill-grey-light hover:bg-green-light hover:py-2 hover:rounded hover:text-white hover:fill-white">
            {" "}
            <FaBook className="h-[24px] w-[24px] mr-2 text-grey-light group-hover:text-white" />
            <span className="truncate">Training and Development </span>{" "}
          </li>
          <li className="group duration-300 cursor-pointer flex mt-6 px-2 text-[15px] items-center fill-grey-light hover:bg-green-light hover:py-2 hover:rounded hover:text-white hover:fill-white">
            <IoCalendarNumberOutline className="h-[24px] w-[24px] mr-2 text-grey-light group-hover:text-white" />
            Schedule
          </li>
          <li className="group duration-300 cursor-pointer flex mt-6 px-2 text-[15px] items-center fill-grey-light hover:bg-green-light hover:py-2 hover:rounded hover:text-white hover:fill-white">
            {" "}
            <IoIosPaper className="h-[24px] w-[24px] mr-2 text-grey-light group-hover:text-white" />
            <span className="truncate">Report and Analytics</span>{" "}
          </li>
          <li className="group duration-300 cursor-pointer flex mt-10 px-2 text-[15px] items-center mt-[80px] fill-grey-light hover:bg-green-light hover:py-2 hover:rounded hover:text-white hover:fill-white">
            {" "}
            <TbSettingsExclamation className="h-[24px] w-[24px] mr-2 text-grey-light group-hover:text-white" />
            Help
          </li>
          <li className="group duration-300 cursor-pointer flex mt-6 px-2 text-[15px] items-center fill-grey-light hover:bg-green-light hover:py-2 hover:rounded hover:text-white hover:fill-white">
            {" "}
            <MdLogout className="h-[24px] w-[24px] mr-2 text-grey-light group-hover:text-white" />
            Logout{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
