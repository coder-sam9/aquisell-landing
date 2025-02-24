import React from 'react';
import addCircle from '../assets/icons/addCircle.svg';

const FAQItem = ({ question }) => {
  return (
    <div className="w-[40rem] h-16 px-6 py-4 rounded-xl border border-gray-300 flex justify-between items-center">
      <span className="text-black text-lg font-medium">{question}</span>
      <img src={addCircle} alt="Expand FAQ" className="w-5 h-5" />
    </div>
  );
};

function FrequentQuestionsSection() {
  const faqs = [
    { question: "What does AcquiSell do?" },
    { question: "How long does it take to sell a company?" },
    { question: "How do buyers find companies?" },
    { question: "Do you help with NDAs and LOIs?" },
    { question: "Is my data kept private?" },
  ];

  return (
    <div className="flex flex-col w-[80rem] h-[45rem] rounded-2xl  items-center justify-center py-12 bg-neutral-100">
      <div className="w-[552px] text-center text-zinc-900 text-[56px] mb-12 font-semibold leading-[67.20px]">Frequently asked questions</div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} />
        ))}
      </div>
    </div>
  );
}

export default FrequentQuestionsSection;
