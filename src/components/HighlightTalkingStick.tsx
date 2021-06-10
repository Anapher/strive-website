import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { List, ListItem } from '../styles/list';
import HighlightWithImage from './HighlightWithImage';

const ModeHeader = styled.h5`
   margin-bottom: 4px;
`;

type Props = {
   alternate?: boolean;
};

export default function HighlightTalkingStick({ alternate }: Props) {
   const data = useStaticQuery(graphql`
      query {
         fileName: file(relativePath: { eq: "highlights/active_speaker.png" }) {
            childImageSharp {
               gatsbyImageData(width: 800)
            }
         }
      }
   `);

   return (
      <HighlightWithImage title="Talking Stick" image={getImage(data.fileName)} alternate={alternate}>
         <div>
            <p>
               The talking stick mode is simple: If you have the stick, you are the presenter and may use your
               microphone, share your screen, etc. We provide different ways that manage the assignment of the talking
               stick:
            </p>
            <p>
               <ModeHeader>Race</ModeHeader>
               The first participant who clicks on the button gets the stick. After he returned the stick, everyone is
               again able to take it.
            </p>
            <p>
               <ModeHeader>Queue</ModeHeader>
               All participants can join the queue at any time and the stick is automatically assigned to the first
               participant. After he returned the stick, it is automatically assigned to the next participant in queue.
            </p>
            <p>
               <ModeHeader>Moderated</ModeHeader>
               Every participant can join a list. The moderators can then pick the participant that becomes the next
               presenter from the list.
            </p>
            <p>
               <ModeHeader>Speaker passes stick</ModeHeader>
               Every participant can join the list. The participant that currently owns the stick can then pick the next
               one from the list.
            </p>
         </div>
      </HighlightWithImage>
   );
}
