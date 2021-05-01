import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
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
         <div>
            <p>
               We are using a layered permission system, meaning that every participant has based on his status and
               current room permission layers available. These layers contain the permissions to use the microphone, to
               change the current scene, to create breakout rooms and so on.
            </p>
            <p>
               The permissions can be changed in conference settings. That way, it's possible to create the conference
               setting exactly for your needs!
            </p>
            <p>
               For example, you can deny all participants to use their microphone and share their screen. If they become
               the current presenter, they automatically receive the permissions until that status is revoked
            </p>
            <p>It's possible to set different permissions for the main conference room and breakout rooms.</p>
         </div>
      </HighlightWithImage>
   );
}
