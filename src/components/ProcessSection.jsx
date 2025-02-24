import React from 'react';
import valuation from "../assets/images/valuation.png";
import deligence from "../assets/images/deligence.png";
import transitioning from "../assets/images/transitioning.png";
import leftBendDashed from "../assets/icons/leftBendDashed.svg";
import leftBendExtra from "../assets/icons/leftBendExtra.svg";
import logoWhite from "../assets/icons/logoWhite.svg";
import ellipse from "../assets/icons/ellipse.svg";
import buyer1 from "../assets/images/buyer1.png";
import buyer2 from "../assets/images/buyer2.png";
import ProcessStep from './ProcessSection/ProcessStep';
import ProcessStepFirst from './ProcessSection/ProcessStepFirst';
import BuyerProfileCard from './ProcessSection/BuyerProfileCard';

// Buyer Data
const buyers = [
  {
    name: "Jason Reed",
    acquisitionPrice: "$5M - $10M",
    industry: "Commercial Plumbing",
    location: "Texas",
    acquisitionsClosed: "21",
    profileImage: buyer1,
  },
  {
    name: "Mike B",
    acquisitionPrice: "$10M - $5M",
    industry: "Plumbing",
    location: "Texas",
    acquisitionsClosed: "12",
    profileImage: buyer2,
  },
];

// Custom JSX Content for Process Steps
const screening = () => (
  <div className="flex flex-col">
    <div className="flex flex-row">
      <BuyerProfileCard {...buyers[0]} isSecond={false} />
      <img src={leftBendDashed} className="w-20 h-40 ml-4" />
    </div>
    <div className="ml-[10rem] -mt-[4rem]">
      <BuyerProfileCard {...buyers[1]} isSecond={true} />
    </div>
  </div>
);
const quering = () => {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 w-[22.5rem] h-[6rem]">
  {/* First Card */}
  <div className="bg-white rounded-2xl p-4 flex flex-col justify-center items-start gap-4 shadow-md w-full max-w-sm">
    <div className="flex items-center space-x-3">
      <img
        className="w-10 h-10 rounded-full"
        src={buyer1}
        alt="Profile"
      />
      <div>
        <h2 className="text-[#32d3a5] text-base font-bold capitalize">
          Bob Simons
        </h2>
        <p className="text-[#6a6a77] text-xs capitalize">Entrepreneur</p>
      </div>
    </div>
    <div className="w-full h-4 bg-gray-200 rounded-full"></div>
  </div>

  {/* Second Section */}
  <div className="flex items-center space-x-4 w-full max-w-sm">
    <div className="bg-white rounded-2xl p-4 flex flex-col justify-center items-end gap-2 shadow-md w-full">
      <div className="w-full h-2.5 bg-gray-200 rounded-full"></div>
      <div className="w-1/2 h-2.5 bg-gray-200 rounded-full"></div>
    </div>
    <img src={logoWhite} className="w-12 h-12" alt="Logo" />
  </div>
</div>

    );
  };

const offer = () => (
  <div className="flex flex-col">
    {/* First Card */}
    <div className="flex flex-row">
      <div className="w-[346px] h-[135px] pl-9 pr-[35px] pt-[25px] pb-6 bg-white rounded-[20px] justify-center items-center gap-[63px] inline-flex overflow-hidden">
        <div className="w-[137px] self-stretch flex-col justify-start items-start gap-3 inline-flex">
          <div className="self-stretch text-black text-lg font-medium">Asking Price</div>
          <div className="self-stretch text-[#32d3a5] text-5xl font-semibold">$1.5M</div>
        </div>
        <img className="w-[75px] h-[75px] rounded-full border-8 border-[#dcdcdc]" src={ellipse} />
      </div>
      <img src={leftBendExtra} className="w-20 h-40 ml-4" />
    </div>

    {/* Second Section */}
    <div className="flex items-center space-x-4 w-full max-w-sm ml-20 mt-0">
      <div className="bg-white rounded-2xl p-4 flex flex-col justify-center items-end gap-2 shadow-md w-full">
        <div className="w-full h-2.5 bg-gray-200 rounded-full"></div>
        <div className="w-1/2 h-2.5 bg-gray-200 rounded-full"></div>
      </div>
      <img src={logoWhite} className="w-12 h-12" alt="Logo" />
    </div>
  </div>
);

function ProcessSection() {
  return (
    <section className='flex flex-col items-center justify-center space-y-4'>
        <div className="w-[35rem] text-center text-zinc-900 text-[56px] font-semibold font-['Archivo'] leading-[67.20px]">How We Help You Sell Your Business</div>
      <ProcessStepFirst />
      <ProcessStep
        title="Valuation process & promotion to buyers"
        description="We will consult with you on a fair asking price and prepare your listing on our website."
        image={valuation}
        reverse={true}
      />
      <ProcessStep
        title="Screening of buyers"
        description="You will have the opportunity to see the buyer’s profile before any information will be shared."
        ContentItem={screening}
      />
        <ProcessStep
          title="Answering inquiries"
          description="We will conduct all initial meetings with interested parties."
          ContentItem={quering}
          reverse={true}
        />
      <ProcessStep
        title="Negotiations and offers"
        description="Our advisors will support in negotiations, will help you review and assess offers, and more."
        ContentItem={offer}
      />
      <ProcessStep
        title="Due Diligence"
        description="We will help gather documents and address concerns to maintain momentum towards closing."
        image={deligence}
        reverse={true}
      />
      <ProcessStep
        title="Closing and transition"
        description="We will work with you and the buyer to ensure a seamless transition."
        image={transitioning}
      />
    </section>
  );
}

export default ProcessSection;
