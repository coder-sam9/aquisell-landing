import React from 'react';
import rightArrow from '../../../assets/icons/rightArrow.svg';  

function CustomButton({ title = 'login', onClick = () => console.log('clicked') ,showArrow = false }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`
          h-[48px]
          rounded-[6px]
          border
          border-[#ECECEE]
          bg-[#5567FF]
          text-white
          text-base 
          font-normal
          ${showArrow?`px-8`:`px-4`} 
          py-3 
          flex
          items-center
          justify-center
          text-center
        `}
      >
        {title}
        {
          showArrow && <img src={rightArrow} alt="arrow-right" className='ml-2' />
        }
      </button>
    </div>
  );
}

export default CustomButton;