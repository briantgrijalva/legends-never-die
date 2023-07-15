import React from 'react'

interface Props {
  height: string;
  backgroundImage?: string;
  bannerText?: string;
  overlay?: boolean;
  backgroundPosition?: string;
  backgroundSize?: string;
  activeClass?: boolean;
  overwriteByColor?: boolean;
}

export const Banner = ({height, backgroundImage, bannerText, overlay = true, backgroundPosition = 'center', backgroundSize = 'cover', activeClass = false, overwriteByColor = false}: Props) => {
  
  let backgroundOverlay = overlay ? `linear-gradient(to bottom, rgba(28, 36, 49, 0.7), rgba(28, 36, 49, 0.7)), url(${backgroundImage})` :
   `linear-gradient(to right, #222831 12.9%, rgba(28, 36, 49, 0) 51.9%), linear-gradient(to left, #222831 12.9%, rgba(28, 36, 49, 0) 51.9%), url(${backgroundImage})`;
  
  return (
    <div
      style={{
        background: overwriteByColor ? '#222831' :backgroundOverlay,
        height: `${height}`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${backgroundSize}`,
        backgroundPosition: `${backgroundPosition}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className={'mobile_banner ' + (activeClass==true ? 'legend_card' : '')}
    >
       {bannerText && (<h1 style={{textAlign: 'center'}}>{bannerText}</h1> )}
    </div>
  )
}
