import React from "react";
import { IconProps } from "./IconProps";

const ChatIcon: React.FC<IconProps> = ({ color = "#72787F" }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="icon">
      <path
        id="Union"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 21.1424C18.5751 21.1424 23.5 16.8573 23.5 11.5712C23.5 6.28518 18.5751 2 12.5 2C6.42487 2 1.5 6.28518 1.5 11.5712C1.5 13.6861 2.28833 15.6408 3.62326 17.2249C3.83357 17.4745 3.92918 17.8044 3.86195 18.1238L3.14428 21.5329C3.08223 21.8276 3.37539 22.0749 3.67312 21.9789L8.08055 20.5586C8.28801 20.4918 8.51117 20.4959 8.71885 20.562C9.89791 20.9375 11.1714 21.1424 12.5 21.1424Z"
        fill={color} // fill 색상을 props로
      />
    </g>
  </svg>
);

export default ChatIcon;
