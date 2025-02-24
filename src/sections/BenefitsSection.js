import React from 'react'
import checkedTick from '../assets/icons/checkedTick.svg'
import BusinessCard from '../components/BenefitsSection/BusinessCard';


const BenefitTextItem = ({ text }) => (
  <div className="flex items-start gap-3">
    <img src={checkedTick} alt="checkmark" className="w-5 h-5 mt-1" />
    <p className="text-gray-700 text-lg font-normal leading-relaxed">{text}</p>
  </div>
);

const BenefitsSection = () => {
  const benefits = [
    "You don’t pay anything. The buyers compensate us if a transaction occurs.",
    "We have a very large database of buyers (100K+) and their specific search criteria; we will only introduce you to buyers you fit best with.",
    "You won’t waste any time with tire kickers as all of our buyers are either accredited investors or institutional buyers and have budgets committed to making business acquisitions.",
    "Everything will be transparent; you get to screen all buyers so none of your partners, clients, or employees will know you’re selling.",
  ];

  return (
    <div className='p-24'>
        
    <div className="flex flex-col md:flex-row items-center bg-neutral-50 p-8 rounded-xl shadow-md">
      {/* Business Card on Left */}
      <div className="md:w-1/2 flex justify-center">
        <BusinessCard  />
      </div>

      {/* Benefits Text on Right */}
      <div className="md:w-1/2 flex flex-col gap-6">
        <h2 className="text-gray-900 text-[56px] font-bold leading-tight">
          Benefits of selling your business with <span className="text-black">AcquiSell</span>
        </h2>
        <div className="space-y-4">
          {benefits.map((text, index) => (
            <BenefitTextItem key={index} text={text} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default BenefitsSection;
