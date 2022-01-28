import React, { Fragment } from 'react';
import pattern from '../images/bg-tablet-pattern.svg'

const HeroDesign = () => {
  return (
      <div className="absolute z-[-1] overflow-x-hidden border-2">
          <img src={pattern} alt="" className="top-[20%] left-[90%] translate-y-[-20%] translate-x-[70%]" />
      </div>
  );
};

export default HeroDesign;
