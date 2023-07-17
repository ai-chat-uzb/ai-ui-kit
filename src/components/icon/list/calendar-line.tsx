import * as React from 'react';

const CalendarEmpty: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7 5H6C4.34315 5 3 6.34315 3 8V10M7 5V3M7 5H17M17 5H18C19.6569 5 21 6.34315 21 8V10M17 5V3M3 10V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10M3 10H21M8 15.5H16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default CalendarEmpty;