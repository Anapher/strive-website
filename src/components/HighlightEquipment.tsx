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
         fileName: file(relativePath: { eq: "highlights/screen_share.png" }) {
            childImageSharp {
               gatsbyImageData(layout: CONSTRAINED, width: 800)
            }
         }
      }
   `);

   return (
      <HighlightWithImage title="Equipment" image={getImage(data.fileName)} alternate={alternate}>
         <List>
            <ListItem>
               Scan a QR code or open the url on any external device (smartphone, tablet, laptop, etc.)
            </ListItem>
            <ListItem>On the device, permit the website to access the microphones and webcams</ListItem>
            <ListItem>
               Now, you can select the devices of the external device just like these of your main device
            </ListItem>
            <ListItem>This way, you can easily use the camera of your smartphone as webcam</ListItem>
         </List>
      </HighlightWithImage>
   );
}
