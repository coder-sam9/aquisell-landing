// CTASection.jsx
import BuyerList from './CTASection/BuyerList';
import CTAButtons from './CTASection/CTAButtons';
import CTACard from './CTASection/CTACard';
import logo from '../assets/icons/logo.svg';
import buyer1 from '../assets/images/buyer1.png';
import buyer2 from '../assets/images/buyer2.png';
import BuyerCard from './CTASection/BuyerCard';
import CTAConnection from './CTASection/CTAConnection';
import dashedConnector from '../assets/icons/dashedConnector.svg';

export default function CTASection() {
  const buyers = [
    { name: 'Mike Robert', offer: '$2.2M', image: 'https://placehold.co/40x40' },
    { name: 'Wade Warren', offer: '$2.4M', image: 'https://placehold.co/40x40' },
    { name: 'Jacob Jones', offer: '$2.5M', image: 'https://placehold.co/40x40' },
  ];
  return (
    <div className="relative bg-[#ecf3ff] rounded-bl-[20px] rounded-br-[20px] overflow-hidden py-20 w-full px-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <h2 className="text-zinc-900 text-5xl font-semibold mb-8">Sell your business on the largest AI powered marketplace</h2>
          <p className="text-[#484848] text-xl mb-8">Sell your business for top dollar to our 100K+ qualified buyers while paying no fees and not having to sign any long term contracts.</p>
          <CTAButtons />
        </div>
        <BuyerList />
  <CTAConnection/>
  <img  className="left-[1230px] top-[223px] absolute" src={dashedConnector}/>
      </div>
    </div>
  );
}
