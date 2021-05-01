import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
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
               gatsbyImageData(width: 800)
            }
         }
      }
   `);

   return (
      <HighlightWithImage title="Screen Share" image={getImage(data.fileName)} alternate={alternate}>
         <List>
            <ListItem>Use all space to maximize the screen</ListItem>
            <ListItem>Very fast thanks to Mediasoup</ListItem>
         </List>
      </HighlightWithImage>
   );
}
