import Image from "next/image";
import React from "react";
import Link from "next/link";
const LavoriSec = ({ cards }) => {
  console.log(cards);
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 gap-6 py-8">
      {cards.map((el, i) => {
        return (
          <Link href={el.button}>
            <div className="w-full aspect-square md:h-[70vh] relative" key={i}>
              <Image
                src={el.img}
                alt="Milka"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default LavoriSec;
