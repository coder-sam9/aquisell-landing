import CustomButton from "../UI/Button/CustomButton";

// CTAButtons.jsx
export default function CTAButtons() {
    return (
      <div className="flex gap-6">
        <CustomButton title="Sell Now" showArrow={true} />
        <button className="px-6 py-3 rounded-md border border-[#5567ff] text-[#5567ff] text-lg font-medium">
          Call Our AI Agent 1-888-325-5968
        </button>
      </div>
    );
  }