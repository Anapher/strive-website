import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
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
               fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
               }
            }
         }
      }
   `);

   return (
      <HighlightWithImage image={data.fileName.childImageSharp.fluid} title="Breakout Rooms" alternate={alternate}>
         <List>
            <ListItem>Not separated from conference, more like the Discord room system</ListItem>
            <ListItem>Moderators can send announcements to all participants any time</ListItem>
            <ListItem>A timer is always visible to all participants</ListItem>
            <ListItem>The breakout room options can be changed on the fly</ListItem>
            <ListItem>No audio reconnecting when switching rooms</ListItem>
            <ListItem>Global chat available</ListItem>
         </List>
      </HighlightWithImage>
   );
}
