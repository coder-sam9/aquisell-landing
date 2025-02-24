import React from "react";
import Header from "./sections/Header";
import CTASection from "./sections/CTASection";
import BenefitsSection from "./sections/BenefitsSection";
import ProcessSection from "./sections/ProcessSection";
import FrequentQuestionsSection from "./sections/FrequentQuestionsSection";

function App() {

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
