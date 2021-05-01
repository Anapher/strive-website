import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { List, ListItem } from '../styles/list';
import HighlightWithImage from './HighlightWithImage';

type Props = {
   alternate?: boolean;
};

export default function HighlightScreenShare({ alternate }: Props) {
   const data = useStaticQuery(graphql`
      query {
         fileName: file(relativePath: { eq: "highlights/screen_share.png" }) {
            childImageSharp {
               fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
               }
            }
         }
      }
   `);

   return (
      <HighlightWithImage image={data.fileName.childImageSharp.fluid} title="Screen Share" alternate={alternate}>
         <List>
            <ListItem>Use all space to maximize the screen</ListItem>
            <ListItem>Very fast thanks to Mediasoup</ListItem>
         </List>
      </HighlightWithImage>
   );
}
