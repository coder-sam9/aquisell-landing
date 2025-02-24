import React from "react";
import logoWhite from "../../assets/icons/logoWhite.svg";
import buyer1 from "../../assets/images/buyer1.png";
import BenefitItem from "./BenefitItem";

const BusinessCard = ({
  businessName = "Well-Established Plumbing Company",
  category = "Construction",
  askingPrice = "$450,000",
  revenue = "$1,000,000",
  revenueFrequency = "/year",
  ebitda = "$250,000",
}) => {
  return (
    <div className="p-12">
      <div className="relative w-[485px] h-[377px] mx-auto">
        {/* Businesses For Sale Card */}
        <div className="w-[279px] bg-white rounded-[20px] shadow-[0px_10px_65px_0px_rgba(0,0,0,0.08)]">
          <div className="p-5">
            <h2 className="text-black text-base font-medium font-['Inter'] capitalize">
              Businesses For Sale
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2 px-6 pb-6">
            <BenefitItem />
            <BenefitItem />
            <BenefitItem />
            <BenefitItem />
          </div>
        </div>
  
        {/* Michael Robert Card */}
        <div className="absolute w-[159px] h-[97px] left-[326px] top-[120px] bg-white rounded-[20px] shadow-[0px_10px_65px_0px_rgba(0,0,0,0.08)]">
          <div className="relative flex flex-col items-center pt-[26px] px-3">
            <div className="absolute -top-4">
              <div className="relative">
                <img className="w-12 h-12 rounded-full" src={buyer1} />
                <div className="w-2.5 h-2.5 absolute right-0 top-0 bg-[#56c228] rounded-full" />
              </div>
            </div>
            
            <div className="text-[#484848] text-[10px] font-bold font-['Inter'] mt-6">
              Michael Robert
            </div>
            <div className="text-center text-[#484848] text-[8px] font-normal font-['Inter'] mt-2">
              Congratulations on selling your business with AcquiSell!
            </div>
          </div>
        </div>
  
        {/* Dashed Lines Container - will scale with screen size */}
        <div className="absolute left-0 right-0 top-[240px] bottom-0">
          {/* Horizontal Dashed Line */}
          <svg className="absolute left-[140px] top-[49px]" width="216" height="61" viewBox="0 0 216 61" fill="none" preserveAspectRatio="none">
            <path d="M1 1V51.5C1 55.9183 4.58172 59.5 9 59.5H214.5" stroke="#32D3A5" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 8"/>
          </svg>
  
          {/* Vertical Dashed Line */}
          <svg className="absolute left-[406px] top-0" width="2" height="66" viewBox="0 0 2 66" fill="none">
            <path d="M1 1V64.5" stroke="#32D3A5" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 8"/>
          </svg>
  
          {/* Logo Circle */}
          <div className="absolute w-[62px] h-[62px] left-[368px] top-[75px] bg-[#32D3A5] rounded-full flex items-center justify-center">
            <img className="w-[36px] h-[36px]" src={logoWhite} alt="AcquiSell Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
