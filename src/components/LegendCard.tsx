import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  title: string;
  id: string;
  name: string;
  champType: string;
}

export const LegendCard = ({ id, champType, name, title }: Props) => {
  return (
    <div key={id} className="bg-gray legend_card">
      <div className='legend_card-container' style={{backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg)`}}>
        <h3 style={{paddingLeft: '10px'}}>
          {name}
        </h3>
        <h4>
          {title}
        </h4>
        <div 
          style={{display: 'flex', justifyContent: 'center'}}
        >
          {champType.split(',').map((tag => (<Image src={`/icons/${tag}.png`} width={32} height={32} alt={tag} key={tag}/>)))}
        </div>
        <Link href='/[id]' as={`/${id}`}>
          See more
        </Link>
      </div>
    </div>
  )
}

export default LegendCard;
