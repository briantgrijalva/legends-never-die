import React from 'react'

interface Props {
  height: string;
  backgroundImage: string;
  bannerText?: string;
  overlay?: boolean;
  backgroundPosition?: string;
  backgroundSize?: string;
  activeClass?: boolean;
}

export const Banner = ({height, backgroundImage, bannerText, overlay = true, backgroundPosition = 'center', backgroundSize = 'cover', activeClass = false}: Props) => {
  return (
    <div
      style={{
        backgroundImage: overlay ? `linear-gradient(to bottom, rgba(28, 36, 49, 0.7), rgba(28, 36, 49, 0.7)), url(${backgroundImage})` : `url(${backgroundImage})`,
        height: `${height}`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${backgroundSize}`,
        backgroundPosition: `${backgroundPosition}`
      }}
      className={activeClass==true ? 'legend_card' : ''}
    >
       {bannerText && (<h1>bannerText</h1> )}
    </div>
  )
}
