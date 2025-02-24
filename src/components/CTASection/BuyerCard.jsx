// BuyerCard.jsx

import buyer1 from '../../assets/images/buyer1.png';

export default function BuyerCard({ name, offer,isTopped  }) {
  return (
     <div className={`flex flex-row w-full p-2 bg-white rounded-lg ${isTopped&& `shadow-[0px_4px_40px_0px_rgba(0,0,0,0.10)]`}`}>

    
     <img className="w-10 h-10 rounded-full mr-5" src={buyer1} />
     <div className=" justify-start items-center gap-[4rem] inline-flex">
       <div className="flex-col justify-start items-start gap-[0.1rem] inline-flex">
         <div className="self-stretch text-[#484848] text-[10.20px] font-normal  leading-[17.49px]">Buyer Name</div>
         <div className="text-zinc-900 text-xs font-semibold ">{name}</div>
       </div>
       <div className="flex-col justify-start items-start gap-[0.1rem] inline-flex">
         <div className="self-stretch text-[#484848] text-[10.20px] font-normal  leading-[17.49px]">Offer</div>
         <div className="self-stretch text-zinc-900 text-xs font-semibold ">{offer}</div>
       </div>
     </div>
         </div>
  );
}

// export default function BuyerCard({ name, offer }) {
//   return (
//     <div className="flex items-center gap-6 p-4 bg-white rounded-lg shadow-sm">
//       {/* Buyer Image */}
//       <img
//         className="w-10 h-10 rounded-full border-2 border-gray-200"
//         src={buyer1}
//         alt={`${name}'s profile`}
//       />

//       {/* Buyer Details */}
//       <div className="flex justify-between flex-1">
//         {/* Buyer Name */}
//         <div className="flex flex-col">
//           <span className="text-xs text-gray-500 font-normal">Buyer Name</span>
//           <span className="text-sm text-zinc-900 font-semibold">{name}</span>
//         </div>

//         {/* Offer */}
//         <div className="flex flex-col">
//           <span className="text-xs text-gray-500 font-normal">Offer</span>
//           <span className="text-sm text-zinc-900 font-semibold">${offer}</span>
//         </div>
//       </div>
//     </div>
//   );
// }
