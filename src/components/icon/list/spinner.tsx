import * as React from 'react';

const Spinner: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M4 12C4 7.58172 7.58172 4 12 4C13.5344 4 14.9678 4.43196 16.1854 5.1809M5.43173 16.5683C6.51015 18.1159 8.12157 19.2645 10 19.748M19.293 8.70701C19.7472 9.7113 20 10.8261 20 12C20 15.3574 17.9318 18.2317 15 19.4185"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Spinner;
