import * as React from 'react';

const Active: React.FC = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_335_4077)">
      <circle cx="22" cy="22" r="10" fill="#4AC97E" />
    </g>
    <rect
      x="8"
      y="8"
      width="28"
      height="28"
      rx="14"
      stroke="#131619"
      strokeWidth="8"
    />
    <defs>
      <filter
        id="filter0_d_335_4077"
        x="0"
        y="0"
        width="44"
        height="44"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="6" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.290196 0 0 0 0 0.788235 0 0 0 0 0.494118 0 0 0 0.48 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_335_4077"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_335_4077"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Active;
