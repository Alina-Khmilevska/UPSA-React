import React from 'react';
import LogoIcon from '../../../assets/images/icons/logo_title.svg';

const TitleBlock = ({ title, isLogo }) => {
  return (
    <h1 className="font-alexandria text-title text-mainText font-normal leading-normal flex uppercase">
      {isLogo &&<img src={LogoIcon} alt={title} />}
      {title}
    </h1>
  );
};

export default TitleBlock;
