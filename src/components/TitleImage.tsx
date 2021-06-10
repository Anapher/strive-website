import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import BrowserMockup from './BrowserMockup';

const Root = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
`;

const MockupContainer = styled.div`
   max-width: 1200px;
`;

export default function TitleImage() {
   const data = useStaticQuery(graphql`
      query {
         fileName: file(relativePath: { eq: "preview_image.png" }) {
            childImageSharp {
               gatsbyImageData(layout: CONSTRAINED, width: 1600)
            }
         }
      }
   `);

   const image = getImage(data.fileName);

   return (
      <Root>
         <MockupContainer>
            <BrowserMockup>
               {image && (
                  <GatsbyImage
                     style={{ borderRadius: '0 0 3px 3px', marginBottom: -4 }}
                     image={image}
                     alt="Preview Image"
                  />
               )}
            </BrowserMockup>
         </MockupContainer>
      </Root>
   );
}
