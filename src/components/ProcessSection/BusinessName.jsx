import React from "react";

function BusinessName() {
  return (
    <div className="w-[23vw] bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 ">
      {/* Title & Subtitle */}
      <div className="flex flex-col gap-1">
        <div className="text-black text-lg font-medium capitalize">Business Name</div>
        <div className="text-[#32d3a5] text-sm font-normal">Enter your details</div>
      </div>

      {/* Placeholder Lines */}
      <div className="flex flex-col gap-3">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="flex gap-3">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
}

export default BusinessName;
