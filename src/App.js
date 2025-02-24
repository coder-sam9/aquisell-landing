import Header from "./components/Header";
import CTASection from "./components/CTASection";
import buyer1 from "./assets/images/buyer1.png";
import buyer2 from "./assets/images/buyer2.png";
import BusinessCard from "./components/BenefitsSection/BusinessCard";
import BenefitsSection from "./components/BenefitsSection";
import ProcessStepFirst from "./components/ProcessSection/ProcessStepFirst";
import ProcessStep from "./components/ProcessSection/ProcessStep";
import valuation from "./assets/images/valuation.png";
import deligence from "./assets/images/deligence.png";
import transitioning from "./assets/images/transitioning.png";
import React from "react";
import BuyerProfileCard from "./components/ProcessSection/BuyerProfileCard";
import leftBendDashed from "./assets/icons/leftBendDashed.svg";
import leftBendExtra from "./assets/icons/leftBendExtra.svg";
import logoWhite from "./assets/icons/logoWhite.svg";
import ellipse from "./assets/icons/ellipse.svg";
import ProcessSection from "./components/ProcessSection";
import FrequentQuestionsSection from "./components/FrequentQuestionsSection";

function App() {
  // Buyer data array
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
  const screening = (
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
  const offer = () => {
    return (
      <div className="flex flex-col">
  {/* First Card */}
  <div className="flex flex-row">
    
  <div className="w-[346px] h-[135px] pl-9 pr-[35px] pt-[25px] pb-6 bg-white rounded-[20px] justify-center items-center gap-[63px] inline-flex overflow-hidden">
  <div className="w-[137px] self-stretch flex-col justify-start items-start gap-3 inline-flex">
    <div className="self-stretch text-black text-lg font-medium font-['Inter'] capitalize">Asking Price</div>
    <div className="self-stretch text-[#32d3a5] text-5xl font-semibold font-['Archivo']">$1.5M</div>
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
  };

  return (
    <>
      <Header />
      <main >
         <CTASection />
        <BenefitsSection />
        <ProcessSection/>
        <div className="w-full items-center justify-center flex flex-col mt-[9rem]">

        <FrequentQuestionsSection/>
        </div>
            </main>
    </>
  );
}

export default App;
