import Image from "next/image";
import React from "react";

interface ServiceCardType {
  data: {
    id: number;
    type: string;
    img: string;
    desc: string;
  };
}

const ServiceCard: React.FC<ServiceCardType> = ({ data }) => {
  return (
    <div className="w-[19rem] flex flex-col items-center justify-center gap-10">
      <div className="relative w-full flex justify-center">
        <div className="w-full overflow-hidden">
          <Image
            src={data.img}
            alt={data.type}
            width={300}
            height={400}
            className="w-full h-auto hover:scale-110 transition-all duration-300 rounded-xl"
          />
        </div>
        <span className="bg-yellow-400 p-4 absolute -bottom-5">
          {data.type}
        </span>
      </div>
      <p className="font-bold text-center">{data.desc}</p>
    </div>
  );
};

export default ServiceCard;
