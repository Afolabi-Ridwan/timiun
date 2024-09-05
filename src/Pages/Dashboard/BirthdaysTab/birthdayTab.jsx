import React from "react";
import image from "../../../Assets/Images/image.png";

const employeesInfo = [
  { img: image, name: "Hugo Matt", role: "Developer", birthday: "Today" },
  { img: image, name: "David Agu", role: "Media Mgt", birthday: "20th Sept" },
  { img: image, name: "Victor John", role: "Developer", birthday: "22nd Sept" },
];
const BirthdayTab = () => {
  return (
    <div className="flex flex-row w-full gap-4 relative top-[-180px] ">
      <div className=" px-3 flex-1 "></div>
      <div className=" px-3 flex-1 "></div>
      <div className="px-3 py-8 border border-black mt-4 rounded-[8px] h-[100%] flex-1">
        <div className="flex justify-between">
          <p className="font-bold"> Upcoming Birthday </p>
          <p className="text-sm"> View All </p>
        </div>

        <ul className="mt-4">
          {employeesInfo.map((employeeInfo) => (
            <li key={employeeInfo.name} className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <img src={employeeInfo.img} alt="employeeImg" className="w-[40px] h-[40px]"/>
                <div className="ml-4">
                  <p className="font-bold">{employeeInfo.name}</p>
                  <p className="text-sm">{employeeInfo.role}</p>
                </div>
              </div>
              <p className="text-sm text-green-500"> {employeeInfo.birthday}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BirthdayTab;
