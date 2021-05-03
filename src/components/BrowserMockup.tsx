import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
   border-top: 1.5em solid rgba(104, 104, 104, 0.7);
   box-shadow: 0 0.1em 1em 0 rgba(0, 0, 0, 0.4);
   position: relative;
   border-radius: 3px 3px 0 0;

   :before {
      display: block;
      position: absolute;
      content: '';
      top: -0.95em; // (1.5-0.4)/2 + 0.4
      left: 1em;
      width: 0.4em;
      height: 0.4em;
      border-radius: 50%;
      background-color: #f44;
      box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
   }

   /* :after {
      display: block;
      position: absolute;
      content: '';
      top: -1.6em;
      left: 5.5em;
      width: calc(100% - 6em);
      height: 1.2em;
      border-radius: 2px;
      background-color: #c4c4c4;
   } */
`;

type Props = {
   children?: React.ReactNode;
   className?: string;
};

export default function BrowserMockup({ className, children }: Props) {
   return <Frame className={className}>{children}</Frame>;
}
