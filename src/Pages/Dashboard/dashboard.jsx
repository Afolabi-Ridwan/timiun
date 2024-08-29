import React from "react";
import sunshineIcon from "../../Assets/Images/4c9482d3-b0a2-4003-9e05-1f0db8b78e53.jpg";
import { IoSettingsSharp, IoBagOutline, IoAlarmOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlinePersonAddAlt, MdKeyboardArrowDown } from "react-icons/md";
import { PiWarningOctagon } from "react-icons/pi";
import { FaUmbrellaBeach } from "react-icons/fa6";
import TopTab from "./TopTab/topTab";

const Dashboard = () => {
  return (
    <div className="px-6 pt-8">
      <div className="flex w-full justify-between items-center ">
        <div>
          <p className="flex items-center">
            {" "}
            Welcome back, <span className="font-bold ml-1">Barbara</span>{" "}
            <span>
              {" "}
              <img src={sunshineIcon} alt="sunshineIcon" className="w-6 ml-1" />
            </span>
          </p>
        </div>

        <div className="flex">
          <i className="relative">
            <IoSettingsSharp className="text-grey-light text-xl" />
          </i>
          <i className="ml-3 relative ">
            <CiMail className="text-grey-light text-xl" />
            <div className="w-2 h-2 rounded-full bg-blue-default absolute top-0 right-0" />
          </i>
          <i className="ml-3 relative">
            <IoIosNotificationsOutline className="text-grey-light text-xl" />
            <div className="w-2 h-2 bg-blue-default rounded-full absolute top-0 right-0" />
          </i>

          <i className="ml-8">
            <MdOutlinePersonAddAlt className="text-grey-light text-xl" />
          </i>

          <i className="ml-3">
            <MdKeyboardArrowDown className="text-grey-light text-xl" />
          </i>
        </div>
      </div>

      <div className="mt-16 flex w-full gap-4">
        <TopTab
          icon={<IoBagOutline />}
          percent={"10%"}
          heading={"Total Workforce"}
          result={150}
        />
        <TopTab
          icon={<IoSettingsSharp />}
          percent={"10%"}
          heading={"Present Workforce"}
          result={125}
        />
        <TopTab
          icon={<PiWarningOctagon />}
          percent={"10%"}
          heading={"Present Workforce"}
          result={125}
          redColorMode
        />
        <TopTab
          icon={<IoAlarmOutline />}
          percent={"10%"}
          heading={"Present Workforce"}
          result={125}
        />
        <TopTab
          icon={<FaUmbrellaBeach />}
          percent={"10%"}
          heading={"Present Workforce"}
          result={125}
        />
      </div>
    </div>
  );
};

export default Dashboard;
