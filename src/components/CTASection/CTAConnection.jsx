// CTACOnnection.jsx
import BuyerList from './BuyerList';
import CTAButtons from './CTAButtons';
import CTACard from './CTACard';
import logo from '../../assets/icons/logo.svg';
import dashedLine from '../../assets/icons/dashedLine.svg';
import buyer1 from '../../assets/images/buyer1.png';

export default function CTAConnection() {
  return (
    <div class="w-[350px] pl-[29px] pr-[30px] pt-8 pb-[31px] left-[976px] top-[350px] absolute bg-white rounded-2xl shadow-[-4px_-1px_40px_0px_rgba(0,0,0,0.12)] justify-center items-center gap-[13px] inline-flex overflow-hidden">
    <img class="w-[57px] h-[57px] rounded-full border-2 border-neutral-300" src={buyer1} />
    <div data-svg-wrapper>
   <img src={dashedLine} alt="dashedLine" />
    </div>
    <div data-svg-wrapper class="relative">
    <img src={logo} alt="logo" />
    </div>
    <div data-svg-wrapper>
   <img src={dashedLine} alt="dashedLine" />
    </div>
    <img class="w-[57px] h-[57px] rounded-full border-2 border-neutral-300" src={buyer1} />
  </div>
  );
}