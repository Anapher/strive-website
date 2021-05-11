import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { List, ListItem } from '../styles/list';
import HighlightWithImage from './HighlightWithImage';

type Props = {
   alternate?: boolean;
};

export default function HighlightBreakoutRooms({ alternate }: Props) {
   const data = useStaticQuery(graphql`
      query {
         fileName: file(relativePath: { eq: "highlights/screen_share.png" }) {
            childImageSharp {
               gatsbyImageData(layout: CONSTRAINED, width: 800)
            }
         }
      }
   `);

   return (
      <HighlightWithImage title="Breakout Rooms" image={getImage(data.fileName)} alternate={alternate}>
         <List>
            <ListItem>Not separated from conference, more like the Discord room system</ListItem>
            <ListItem>Moderators can send announcements to all participants any time</ListItem>
            <ListItem>A timer is always visible to everyone</ListItem>
            <ListItem>Options can be changed on the fly</ListItem>
            <ListItem>No audio reconnecting when switching rooms</ListItem>
            <ListItem>Global chat, room chat and private chat available</ListItem>
         </List>
      </HighlightWithImage>
   );
}
