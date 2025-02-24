import React from 'react'
import brandLogo from '../../assets/images/brandLogo.png'
import underContract from '../../assets/icons/underContract.svg'
import rightArrow from '../../assets/icons/rightArrow.svg'
   const BenefitItem = ({
    businessName = "Well-Established Plumbing Company",
    category = "Construction",
    askingPrice = "$450,000",
    revenue = "$1,000,000",
    revenueFrequency = "/year",
    ebitda = "$250,000",
  }) => {
    return (
      <div className="w-28 h-24 p-2 bg-white rounded border border-[#dcdcdc]">
        {/* Header section with logo, category and status */}
        <div className="flex justify-between items-start mb-1">
        <div className="flex items-center content-center gap-1 ">
            <img
              className="w-4 h-4 rounded border border-[#dcdcdc]"
              src={brandLogo}
              alt="Brand logo"
            />
            <div
              className="flex content-center items-center px-[1px] py-[2px] 
  bg-[#ecf3ff] rounded"
            >
              <span
                className="text-[#5567ff] 
              text-[3.25px]
   font-semibold"
              >
                {category}
              </span>
            </div>
          </div>
          <img
            className="w-4 h-4"
            src={underContract}
            alt="Under contract status"
          />
        </div>
  
        {/* Business name */}
        <h2
          className="text-zinc-900 text-[5.41px]
  leading-[8.11px] font-semibold mb-0.5"
        >
          {businessName}
        </h2>
  
        {/* Metrics section */}
        <div className="flex justify-start items-start gap-2 mb-2">
          <div className="flex flex-col gap-0.5">
            <span
              className="text-[#484848] text-[3.79px]
  leading-[6.49px]"
            >
              Asking Price
            </span>
            <span className="text-zinc-900 text-[4.33px] font-semibold">
              {askingPrice}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span
              className="text-[#484848] text-[3.79px]
  leading-[6.49px]"
            >
              Revenue
            </span>
            <span className="text-zinc-900 text-[4.33px] font-semibold">
              {revenue}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span
              className="text-[#484848] text-[3.79px]
  leading-[6.49px]"
            >
              EBITDA
            </span>
            <span className="text-zinc-900 text-[4.33px] font-semibold">
              {ebitda}
            </span>
          </div>
        </div>
  
        {/* Learn More button */}
        <button className="flex items-center gap-1 px-1 py-0.5 bg-[#32d3a5] text-white rounded">
          <span
            className="text-[3.79px]
  px-[3.79px]
   py-[2.16px] font-medium"
          >
            Learn More
          </span>
          <img className="w-2 h-2" src={rightArrow} alt="Right arrow" />
        </button>
      </div>
  )
}

export default BenefitItem