// BuyerList.jsx
import BuyerCard from './BuyerCard';
import buyer1 from '../../assets/images/buyer1.png';

const buyers = [
  { name: 'Mike Robert', offer: '$2.2M', image: 'https://placehold.co/40x40' },
  { name: 'Wade Warren', offer: '$2.4M', image: 'https://placehold.co/40x40' },
  { name: 'Jacob Jones', offer: '$2.5M', image: 'https://placehold.co/40x40' },
];

export default function BuyerList({isTopped}) {
  return (
    <div className="w-[346px] h-[307px] left-[863px] top-[73px] absolute bg-white rounded-[14.68px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.08)]  overflow-hidden p-6">

    <div className=" text-black text-lg font-medium  capitalize">Buyers List</div>
    <div className="flex flex-col gap-4 mt-4">
    {buyers.map((buyer, index) => (
      <BuyerCard key={index} name={buyer.name} offer={buyer.offer} isTopped={index==0}/>
    ))}
  </div>
  </div>
  );
}