import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { List, ListItem } from '../styles/list';
import HighlightWithImage from './HighlightWithImage';

type Props = {
   alternate?: boolean;
};

export default function HighlightWhiteboard({ alternate }: Props) {
   const data = useStaticQuery(graphql`
      query {
         fileName: file(relativePath: { eq: "highlights/whiteboard.png" }) {
            childImageSharp {
               gatsbyImageData(width: 1200)
            }
         }
      }
   `);

   return (
      <HighlightWithImage title="Whiteboard" image={getImage(data.fileName)} alternate={alternate}>
         <List>
            <ListItem>Easy to use and extremely fast</ListItem>
            <ListItem>Elements can be selected, moved and deleted</ListItem>
            <ListItem>Collaborative editing can be enabled</ListItem>
         </List>
      </HighlightWithImage>
   );
}
