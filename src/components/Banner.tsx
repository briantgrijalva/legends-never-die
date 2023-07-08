import React from 'react'

interface Props {
  height: string;
  backgroundImage: string;
  bannerText?: string;
}

export const Banner = ({height, backgroundImage, bannerText}: Props) => {
  return (
    <div style={{backgroundImage: `linear-gradient(to bottom, rgba(28, 36, 49, 0.7), rgba(28, 36, 49, 0.7)), url(${backgroundImage})`, height: `${height}`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
       {bannerText && (<h1>bannerText</h1> )}
    </div>
  )
}
