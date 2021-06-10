import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { List, ListItem } from '../styles/list';
import HighlightWithImage from './HighlightWithImage';

type Props = {
   alternate?: boolean;
};

export default function HighlightPoll({ alternate }: Props) {
   const data = useStaticQuery(graphql`
      query {
         fileName: file(relativePath: { eq: "highlights/poll_single_choice.png" }) {
            childImageSharp {
               gatsbyImageData(width: 1200)
            }
         }
      }
   `);

   return (
      <HighlightWithImage title="Polls" image={getImage(data.fileName)} alternate={alternate}>
         Many configuration options, can by anonymous or public, answer can be final or changable. Supported Polls:
         <List>
            <ListItem>Single choice</ListItem>
            <ListItem>Multiple choice</ListItem>
            <ListItem>Number estimation</ListItem>
            <ListItem>Tag cloud</ListItem>
         </List>
      </HighlightWithImage>
   );
}
