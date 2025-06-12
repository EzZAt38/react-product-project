import { LiHTMLAttributes } from "react";
import { styles } from "../interfaces/interface";
interface CircleColorProps extends LiHTMLAttributes<HTMLLIElement> {
  color: string;
}
const CircleColor = ({ color, ...rest }: CircleColorProps) => {
  return (
    <li
      className={`block ${styles.majorBallStyle} cursor-pointer`}
      style={{ backgroundColor: color }}
      {...rest}
    ></li>
  );
};

export default CircleColor;
