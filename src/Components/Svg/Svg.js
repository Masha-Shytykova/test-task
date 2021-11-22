import React from "react";

import sprite from "../../Icons/sprite.svg";

//import styles from "./Svg.module.css";
export default function Svg({ icon, className = "" }) {
  return (
    <svg className={className}>
      <use href={sprite + icon} />
    </svg>
  );
}

// type SvgProps = {
//   icon: string;
//   className?: string;
// };

// const Svg: React.FunctionComponent<SvgProps> = ({
//   icon,
//   className = "",
// }: SvgProps) => {
//   return (
//     <svg>
//       <use href={sprite + icon} />
//     </svg>
//   );
// };

// export default Svg;
