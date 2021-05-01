import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
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
   title: string;
   children?: React.ReactNode;
   alternate?: boolean;
   image: IGatsbyImageData | undefined;
};

export default function HighlightWithImage({ title, image, children, alternate }: Props) {
   return (
      <Root>
         <Centered style={{ flexDirection: alternate ? 'row-reverse' : undefined }}>
            <MockupContainer>
               <BrowserMockup>{image && <GatsbyImage image={image} alt={title} />}</BrowserMockup>
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
