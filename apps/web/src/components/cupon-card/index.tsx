import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  cupons: CuponsModelType[];
  onSelectCupon: (cupon: CuponsModelType) => void;
};

const CuponCard: React.FC<Props> = (props) => {
  const { cupons, onSelectCupon } = props;

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
    onSelectCupon(cupons[index]);
  };

  return (
    <div className="cupon-card">
      {cupons.map((cupon, index) => (
        <div
          key={index}
          className={`card-background ${activeCard === index ? 'active' : ''}`}
          onClick={() => handleCardClick(index)}
        >
          <Image
            src={`../assets/imgs/cupons/${cupon.diamond}`}
            className="icon"
            width={60}
            height={50}
            loading="lazy"
            unoptimized={true}
            alt="device card"
          />
          <div className="cupon-amount">{cupon.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default CuponCard;
