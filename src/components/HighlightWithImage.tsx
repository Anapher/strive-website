import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/shared';
import BrowserMockup from './BrowserMockup';

const Root = styled.div`
   ${Container}

   padding-left: 0px;
   padding-right: 0px;

   display: flex;
   justify-content: center;
   margin-bottom: 64px;
`;

type CenteredProps = {
   alternate?: boolean;
};

const Centered = styled.div<CenteredProps>`
   display: flex;
   ${(p) => (p.alternate ? `flex-direction: row;` : `flex-direction: row-reverse;`)};
   width: 100%;

   @media (max-width: 768px) {
      flex-direction: column;
   }
`;

const MockupContainer = styled.div`
   flex: 2;
`;

const TextContainer = styled.div`
   flex: 1;
   padding-left: 32px;
   padding-right: 32px;
   @media (max-width: 768px) {
      padding-top: 16px;
   }
`;

const HighlightHeader = styled.h2`
   font-size: 24pt;
   margin-top: 0px;
`;

type Props = {
   title: string;
   children?: React.ReactNode;
   alternate?: boolean;
   image: IGatsbyImageData | undefined;
};

export default function HighlightWithImage({ title, image, children, alternate }: Props) {
   return (
      <Root>
         <Centered alternate={alternate}>
            <MockupContainer>
               <BrowserMockup>
                  {image && (
                     <GatsbyImage style={{ borderRadius: '0 0 3px 3px', marginBottom: -4 }} image={image} alt={title} />
                  )}
               </BrowserMockup>
            </MockupContainer>
            <TextContainer
               style={alternate ? { display: 'flex', flexDirection: 'column', alignItems: 'flex-end' } : undefined}
            >
               <div>
                  <HighlightHeader>{title}</HighlightHeader>
                  {children}
               </div>
            </TextContainer>
         </Centered>
      </Root>
   );
}
