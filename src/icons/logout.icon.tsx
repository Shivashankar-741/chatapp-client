import { ReactElement } from 'react';

export const LogoutIcon = (): ReactElement => (
  <svg width="54" height="58" viewBox="0 0 54 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <path
        d="M40.8 30.6667V24.5333H25.4667V18.4H40.8V12.2667L50 21.4667L40.8 30.6667ZM37.7333 27.6V39.8667H22.4V49.0667L4 39.8667V0H37.7333V15.3333H34.6667V3.06667H10.1333L22.4 9.2V36.8H34.6667V27.6H37.7333Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="54"
        height="57.0667"
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
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);
