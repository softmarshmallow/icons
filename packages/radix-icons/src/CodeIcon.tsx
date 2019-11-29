import * as React from 'react';
import { BaseIconProps } from './types';

interface CodeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const CodeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CodeIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M9.964 2.686a.5.5 0 10-.928-.372l-4 10a.5.5 0 10.928.372l4-10zm-6.11 2.46a.5.5 0 010 .708L2.207 7.5l1.647 1.646a.5.5 0 11-.708.708l-2-2a.5.5 0 010-.708l2-2a.5.5 0 01.708 0zm7.292 0a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L12.793 7.5l-1.647-1.646a.5.5 0 010-.708z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CodeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CodeIcon;
