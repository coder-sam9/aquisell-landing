import React from 'react';
import buyer1 from '../../assets/images/buyer1.png';

const BuyerProfileCard = ({ 
    name, 
    acquisitionPrice, 
    industry, 
    location, 
    acquisitionsClosed, 
    profileImage, 
    isSecond = false 
  }) => {
    return (
      <div
        className={` p-6 rounded-2xl ${
          isSecond ? "bg-white text-black shadow-md  h-[10rem] w-[17rem]" : "bg-emerald-400 text-white h-[9rem] w-[15rem]"
        }`}
      >
        {/* Card Header */}
        <div className={`font-bold mb-2 ${isSecond ? "text-xs text-gray-700" : "text-xs"}`}>
          Buyer Profile
        </div>
  
        {/* Buyer Info Section */}
        <div className="flex mb-4 items-center">
          <img 
            className={`rounded-full ${isSecond ? "w-[2.7rem] h-[2.7rem]" : "w-10 h-10"}`} 
            src={profileImage} 
            alt={`${name}'s profile`} 
          />
          <div className="ml-3 flex flex-col">
            <h3 className={`${isSecond ? "text-[1.2rem] font-bold" : "text-base font-bold"}`}>
              {name}
            </h3>
            <p className={`${isSecond ? "text-[0.6rem] text-gray-500" : "text-[0.5rem]"} mt-1`}>
              Target Acquisition Price: {acquisitionPrice}
            </p>
          </div>
        </div>
  
        {/* Stats Section */}
        <div className="flex justify-between text-xs">
          <div className="flex flex-col">
            <span className={`${isSecond ? "text-gray-500 text-[8px]" : "text-[6px]"}`}>
              Industries Of Focus
            </span>
            <span className={`${isSecond ? "text-black text-[8px] font-semibold" : "text-[6px] font-medium"}`}>
              {industry}
            </span>
          </div>
  
          <div className="flex flex-col">
            <span className={`${isSecond ? "text-gray-500 text-[8px]" : "text-[6px]"}`}>
              Areas Of Interest
            </span>
            <span className={`${isSecond ? "text-black text-[8px] font-semibold" : "text-[6px] font-medium"}`}>
              {location}
            </span>
          </div>
  
          <div className="flex flex-col">
            <span className={`${isSecond ? "text-gray-500 text-[8px]" : "text-[6px]"}`}>
              Acquisitions Closed
            </span>
            <span className={`${isSecond ? "text-black text-[8px] font-semibold" : "text-[6px] font-medium"}`}>
              {acquisitionsClosed}
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  

export default BuyerProfileCard;