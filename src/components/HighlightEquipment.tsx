import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { List, ListItem } from '../styles/list';
import HighlightWithImage from './HighlightWithImage';

type Props = {
   alternate?: boolean;
};

export default function HighlightEquipment({ alternate }: Props) {
   const data = useStaticQuery(graphql`
      query {
         fileName: file(relativePath: { eq: "highlights/equipment.png" }) {
            childImageSharp {
               gatsbyImageData(layout: CONSTRAINED, width: 1200)
            }
         }
      }
   `);

   return (
      <HighlightWithImage title="Equipment" image={getImage(data.fileName)} alternate={alternate}>
         Easily use your smartphone, tablet or laptop as webcam - just by scanning a QR code!
      </HighlightWithImage>
   );
}
