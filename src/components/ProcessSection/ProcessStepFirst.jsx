import React from "react";
import businessName from "../../assets/images/businessName.png";
import CustomButton from "../UI/Button/CustomButton";
import BusinessName from "./BusinessName";
import arrowLogo from "../../assets/icons/arrowLogo.svg";
import verticalDashed from "../../assets/icons/verticalDashed.svg";
import bendedDashed from "../../assets/icons/bendedDashed.svg";
function ProcessStepFirst() {
  return (
    <div className="flex gap-6 flex-row w-full px-14 pr-36 justify-between">
      <div className="w-[528px] h-[266px] flex-col justify-start items-start gap-6 inline-flex ">
        <div className="self-stretch text-zinc-900 text-[32px] font-semibold ">
          Upload business details
        </div>
        <div className="self-stretch text-[#484848] text-lg font-normal  leading-loose">
          Either call our AI agent that will walk you through all the
          information we need to be able to present your business to our buyer
          network or simply click on our button below to upload all your
          information on our platform.
        </div>
        <CustomButton title="Sign Up" showArrow={true} />
      </div>
      <div className="w-[528px] h-[300px] bg-[#ecf3ff] rounded-[20px] p-8" >
        <div className="flex flex-row gap-8 content-end items-end">

        <BusinessName />
        <div className="flex flex-col">
            <img src={arrowLogo} />
            <img src={verticalDashed} className="mt-4 h-12"  />
        </div>
        </div>
        <div className="relative flex flex-row items-center gap-2 mt-4 ml-[4rem]">
  {/* Bended dashed line positioned at the start */}
  <img src={bendedDashed} className="h-6" />

  {/* Move this box to the right (beside bended dashed) while keeping size fixed */}
  <div className="min-w-[375.09px] h-[49.49px] bg-white rounded-[10.42px] flex flex-row items-center justify-between px-8 ml-4">
    <p className="text-[#32d3a5] text-[13.02px] font-semibold leading-normal">Revenue</p>
    <p className="text-[#32d3a5] text-[13.02px] font-semibold leading-normal">EBITDA</p>
    <p className="text-[#32d3a5] text-[13.02px] font-semibold leading-normal">Industry</p>
  </div>
</div>

      </div>
    </div>
  );
}

export default ProcessStepFirst;
