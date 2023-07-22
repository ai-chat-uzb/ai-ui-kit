import * as React from 'react';

const Disturb: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
  >
    <g filter="url(#filter0_d_335_5110)">
      <path
        d="M30.9884 26.3878C31.1747 26.007 30.7955 25.6134 30.3837 25.7141C29.6198 25.9009 28.8215 26 28 26C22.4772 26 18 21.5228 18 16C18 15.1785 18.0991 14.3802 18.2859 13.6163C18.3866 13.2044 17.993 12.8253 17.6121 13.0115C14.2888 14.6369 12 18.0512 12 22C12 27.5228 16.4772 32 22 32C25.9488 32 29.363 29.7112 30.9884 26.3878Z"
        fill="#E26F20"
      />
    </g>
    <rect
      x="8"
      y="8"
      width="28"
      height="28"
      rx="14"
      stroke="#131619"
      stroke-width="8"
    />
    <defs>
      <filter
        id="filter0_d_335_5110"
        x="0"
        y="0.962891"
        width="43.0371"
        height="43.0371"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
          values="0 0 0 0 0.886275 0 0 0 0 0.435294 0 0 0 0 0.12549 0 0 0 0.48 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_335_5110"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_335_5110"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Disturb;
