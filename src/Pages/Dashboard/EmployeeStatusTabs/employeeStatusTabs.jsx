import React from "react";

const EmployeeStatusTabs = ({
  header,
  graphicalRep,
  chart,
  biggerImgSize,
  lists,
}) => {
  return (
    <div className="px-3 py-8 border border-black mt-4 rounded-[8px] flex-1 h-[100%]">
      <div>
        <p className="font-bold">{header}</p>
        <div className="flex justify-center w-auto">
          {graphicalRep && (
            <img
              src={graphicalRep}
              alt="graphicalRep"
              className={` ${biggerImgSize ? "w-[200px]" : "w-[170px]"} mt-8`}
            />
          )}
        </div>
        {chart && (
          <div className="mt-2 flex w-full gap-2">
            <div className="h-6 bg-[#6BA10F] px-3 border mt-4 rounded-[8px] flex-1"></div>
            <div className="h-6 bg-[#A9E338] px-3 border mt-4 rounded-[8px] flex-1"></div>
            <div className="h-6 bg-[#D5F68A] px-3 border mt-4 rounded-[8px] flex-1"></div>
          </div>
        )}
      </div>
      <div className="mt-16">
        {/* <ul> */}
        {lists &&
          lists.map((list) => (
            <ul
              className="mt-4 flex justify-between items-center"
              key={list.text}
            >
              <div
                className={`${
                  list.color === "deepGreen"
                    ? "bg-green-deep"
                    : list.color === "lightGreen"
                    ? "bg-green-light"
                    : list.color === "fadedGreen"
                    ? "bg-green-faded"
                    : list.color === "black"
                    ? "bg-black-default" : ""
                } h-[13px] w-[13px] rounded-full mr-2`}
              ></div>
              <div className="w-[100%] flex justify-between">
                <li className="text-sm">{list.text}</li>
                <li> {list.number}</li>
              </div>
            </ul>
          ))}
        {/* </ul> */}
      </div>
    </div>
  );
};

export default EmployeeStatusTabs;
