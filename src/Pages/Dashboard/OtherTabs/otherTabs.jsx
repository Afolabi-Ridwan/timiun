import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const OtherTabs = ({
  heading,
  firstTabIcon,
  firstTabHeading,
  firstTabTotal,
  secondTabIcon,
  secondTabHeading,
  secondTabTotal,
}) => {
  // heading={"Recruitment Snapshots"}
  //     firstTabIcon={<IoBagOutline />}
  //     firstTabHeading={"Open Positions"}
  //     firstTabTotal={10}
  //     secondTabIcon={<IoBagOutline />}
  //     secondTabHeading={"Applications Recieved"}
  //     secondTabTotal={150}
  return (
    <div className="rounded-[8px] px-3 py-8 border border-black my-4">
      <h3 className="font-bold">{heading}</h3>
      <div className="flex">
        <div className="px-3 py-4 border border-black mt-4 rounded-[8px] flex-1 mr-2">
          <div className="flex items-center justify-between">
            <i className="text-green-light text-xl border p-2 rounded-[6px]">
              {firstTabIcon}
            </i>
          </div>
          <p className="mt-4 text-[12px]">{firstTabHeading}</p>
          <p className="text-2xl font-bold  mt-4">{secondTabTotal}</p>

          <p className="flex items-center text-green-light mt-2">
            View{" "}
            <i className="ml-1">
              <FaArrowRight />
            </i>
          </p>
        </div>
        <div className="px-3 py-4 border border-black mt-4 rounded-[8px] flex-1 ml-2">
          <div className="flex items-center justify-between">
            <i className="text-green-light text-xl border p-2 rounded-[6px]">
              {secondTabIcon}
            </i>
          </div>
          <p className="mt-4 text-[12px]">{secondTabHeading}</p>
          <p className="text-2xl font-bold  mt-4">{secondTabTotal}</p>
          <p className="flex items-center text-green-light mt-2 pointer">
            View{" "}
            <i className="ml-1">
              <FaArrowRight />
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtherTabs;
