import React from 'react';

interface IconProps {
  className?: string;
}

export const ClipboardIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M9.27 2.32a.75.75 0 01.46.46l.29 1.07a.75.75 0 00.7.51h1.14a.75.75 0 00.7-.51l.29-1.07a.75.75 0 01.46-.46l1.07-.29a.75.75 0 00.51-.7v-1.14a.75.75 0 00-.51-.7l-1.07-.29a.75.75 0 01-.46-.46L13.04.2a.75.75 0 00-.7-.51h-1.14a.75.75 0 00-.7.51l-.29 1.07a.75.75 0 01-.46.46L8.71 2.03a.75.75 0 00-.51.7v1.14a.75.75 0 00.51.7l1.07.29zM18.5 8.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM21.75 12a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM18 16.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM4.75 12.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM6.25 7.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM2.25 16.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM11.73 14.32a.75.75 0 01.46.46l.29 1.07a.75.75 0 00.7.51h1.14a.75.75 0 00.7-.51l.29-1.07a.75.75 0 01.46-.46l1.07-.29a.75.75 0 00.51-.7v-1.14a.75.75 0 00-.51-.7l-1.07-.29a.75.75 0 01-.46-.46l-.29-1.07a.75.75 0 00-.7-.51h-1.14a.75.75 0 00-.7.51l-.29 1.07a.75.75 0 01-.46.46l-1.07.29a.75.75 0 00-.51.7v1.14a.75.75 0 00.51.7l1.07.29z" />
  </svg>
);

export const TrashIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);
