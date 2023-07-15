"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface Props {
  title: string;
  id: string;
  name: string;
  champType: string;
}

export const LegendCard = ({ id, champType, name, title }: Props) => {

  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };
  
  return (
    <Link href='/[id]' as={`/${id}`}>
    <div 
      key={id} 
      className="bg-gray legend_card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className='legend_card-container'
        style={{
          transition: '0.9s',
          backgroundImage: isHover ? `linear-gradient(135deg, #222831 15%, #393E4600 40%, #393E4600 40%, #393E46 85%, #393E46 100% ), url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg)` : `url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg)`
        }}
      >
        <h3 style={{paddingLeft: '10px', fontStyle: 'italic', paddingBottom: '20px'}}>
          {name}
        </h3>
        <h5 style={{paddingBottom: '16px'}}>
          {title}
        </h5>
        <div 
          style={{display: 'flex', justifyContent: 'center', paddingBottom: '20px'}}
        >
          {champType.split(',').map((tag => (<Image src={`/icons/${tag}.png`} width={32} height={32} alt={tag} key={tag}/>)))}
        </div>
        
          
      </div>
    </div>
    </Link>
  )
}

export default LegendCard;
