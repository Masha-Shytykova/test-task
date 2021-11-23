import React from "react";

import sprite from "../../Icons/sprite.svg";

type Props = {
  icon: string;
  width?: string;
  height?: string;
};

const Svg = ({ icon, width = "15px", height = "15px" }: Props) => {
  return (
    <svg width={width} height={height}>
      <use href={sprite + icon} />
    </svg>
  );
};

export default Svg;
