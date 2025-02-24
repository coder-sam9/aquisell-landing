import React from 'react';
import CustomButton from '../UI/Button/CustomButton';

function ProcessStep({ 
    title, 
    description, 
    image, 
    reverse = false, 
    showButton = false, 
    ContentItem 
}) {
    return (
        <div 
            className={`flex gap-6 w-full px-14 pr-36 my-10 justify-between items-center 
            ${reverse ? "flex-row-reverse" : "flex-row"}`}
        >
            {/* Text Section */}
            <div className="w-[528px] flex flex-col justify-start items-start gap-6">
                <div className="text-zinc-900 text-[32px] font-semibold">
                    {title}
                </div>
                <div className="text-[#484848] text-lg font-normal leading-loose">
                    {description}
                </div>
                {showButton && <CustomButton title="Sign Up" showArrow={true} />}
            </div>

            {/* Dynamic Content Box (Handles both image and JSX content) */}
            <div className="w-[528px] h-[300px] bg-[#ecf3ff] rounded-[20px] p-8 flex items-center justify-center">
                {image ? <img src={image} alt={title} className="h-full object-contain" /> : <ContentItem />}
            </div>
        </div>
    );
}

export default ProcessStep;
