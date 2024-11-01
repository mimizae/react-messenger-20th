import React from "react";
import { IconProps } from "./IconProps";

const StroyIcon: React.FC<IconProps> = ({ color = "#72787F" }) => (
  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Group 1000005290">
      <rect id="Rectangle 6671179" x="0.5" width="12" height="19" rx="2" fill={color} />
      <path id="Rectangle 6671180" d="M14.5 3H19.5C20.6046 3 21.5 3.89543 21.5 5V15C21.5 16.1046 20.6046 17 19.5 17H14.5V3Z" fill={color} />
    </g>
  </svg>
);

export default StroyIcon;
