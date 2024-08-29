import React from "react";

const TopTab = ({ percent, icon, heading, result, redColorMode }) => {
  return (
    <div className="px-3 py-8 border border-black mt-4 rounded-[8px] flex-1">
      <div className="flex items-center justify-between">
        <i className="text-green-light text-xl border p-2 rounded-[6px]">
          {icon}
        </i>
        <p><span className={` font-bold  ${redColorMode ? "text-red-600" : "text-green-600"} `}>{percent}</span> vs last month</p>
      </div>
      <p className="mt-4 text-sm">{heading}</p>
      <p className="text-2xl font-bold  mt-4">{result}</p>
    </div>
  );
};

export default TopTab;
