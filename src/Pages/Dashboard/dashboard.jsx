import React from "react";
import sunshineIcon from "../../Assets/Images/4c9482d3-b0a2-4003-9e05-1f0db8b78e53.jpg";
import { IoSettingsSharp, IoBagOutline, IoAlarmOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlinePersonAddAlt, MdKeyboardArrowDown } from "react-icons/md";
import { PiWarningOctagon } from "react-icons/pi";
import { FaUmbrellaBeach } from "react-icons/fa6";
import TopTab from "./TopTab/topTab";
import EmployeeStatusTabs from "./EmployeeStatusTabs/employeeStatusTabs";
import GenderDiversityImg from "../../Assets/Images/Group 351.png";
import EmploymentTypeImg from "../../Assets/Images/Group.png";
import BirthdayTab from "./BirthdaysTab/birthdayTab";
import OtherTabs from "./OtherTabs/otherTabs";

const Dashboard = () => {
  return (
    <div className="px-6 pt-8 ml-6">
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

      <div className="mt-2 flex flex-row w-full gap-4">
        <EmployeeStatusTabs
          header="Gender Diversity"
          graphicalRep={EmploymentTypeImg}
          lists={[
            { color: "fadedGreen", text: "Male", number: "42" },
            { color: "black", text: "Female", number: "19" },
          ]}
        />
        <EmployeeStatusTabs
          header=" Employment Type"
          graphicalRep={GenderDiversityImg}
          biggerImgSize
          lists={[
            { color: "deepGreen", text: "Full time", number: "42" },
            { color: "lightGreen", text: "Partime", number: "42" },
            { color: "black", text: "Interns", number: "42" },
          ]}
        />
        <EmployeeStatusTabs
          header="Employment Status"
          chart
          lists={[
            { color: "deepGreen", text: "Permanent", number: "42" },
            { color: "lightGreen", text: "Contract", number: "42" },
            { color: "fadedGreen", text: "Probation", number: "42" },
          ]}
        />
      </div>
      <div>
        <BirthdayTab />
      </div>

      <div className="mt-2 flex flex-row w-full gap-4 ">
        <div className="relative top-[-350px] flex-1 mb-[-300px]">
          <OtherTabs
            heading={"Recruitment Snapshots"}
            firstTabIcon={<IoBagOutline />}
            firstTabHeading={"Open Positions"}
            firstTabTotal={10}
            secondTabIcon={<IoBagOutline />}
            secondTabHeading={"Applications Recieved"}
            secondTabTotal={150}
          />
        </div>
        <div className="relative top-[-280px] flex-1 mb-[-260px]">
          <OtherTabs
            heading={"Leave Management"}
            firstTabIcon={<IoBagOutline />}
            firstTabHeading={"Pending Leave Requests"}
            firstTabTotal={10}
            secondTabIcon={<IoBagOutline />}
            secondTabHeading={"Approved Leaves"}
            secondTabTotal={5}
          />
        </div>
        <div className="relative top-[-180px] flex-1 mb-[-170px]">
          <OtherTabs
            heading={"Employee Statistics"}
            firstTabIcon={<IoBagOutline />}
            firstTabHeading={"New hires this month"}
            firstTabTotal={10}
            secondTabIcon={<IoBagOutline />}
            secondTabHeading={"Employees on Leave"}
            secondTabTotal={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
