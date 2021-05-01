import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/shared';
import BrowserMockup from './BrowserMockup';

const Centered = styled.div`
   display: flex;
   flex-direction: row;
   max-width: 1500px;
   width: 100%;
`;

const Root = styled.div`
   ${Container}

   display: flex;
   justify-content: center;
   margin-bottom: 64px;
`;

const MockupContainer = styled.div`
   flex: 1;
`;

const TextContainer = styled.div`
   flex: 1;
   padding-left: 32px;
   padding-right: 32px;
`;

const HighlightHeader = styled.h2`
   font-size: 24pt;
   margin-top: 0px;
`;

type Props = {
   image: FluidObject;
   title: string;
   children?: React.ReactNode;
   alternate?: boolean;
};

export default function HighlightWithImage({ image, title, children, alternate }: Props) {
   return (
      <Root>
         <Centered style={{ flexDirection: alternate ? 'row-reverse' : undefined }}>
            <MockupContainer>
               <BrowserMockup>
                  <Img fluid={image} />
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
