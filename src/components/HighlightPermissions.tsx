import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { List, ListItem } from '../styles/list';
import HighlightWithImage from './HighlightWithImage';

type Props = {
   alternate?: boolean;
};

export default function HighlightPermissions({ alternate }: Props) {
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
      <HighlightWithImage title="Flexible Permission System" image={getImage(data.fileName)} alternate={alternate}>
         <List>
            <ListItem>Flexible permissions based on current room and many other factors</ListItem>
            <ListItem>Highly configurable</ListItem>
            <ListItem>
               Example 1: Everyone has the permissions to use the microphone and activate the webcam. The chat is
               disabled. This is a nice setting for small talk
            </ListItem>
            <ListItem>
               Example 2: Only moderators may use the microphone and share their screen. They can select a presenter who
               automatically receives these permissions until that status is revoked.
            </ListItem>
         </List>
      </HighlightWithImage>
   );
}
