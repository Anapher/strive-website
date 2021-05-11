import React from 'react';
import SEO from '../components/seo';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import FeatureList from '../components/FeatureList';
import HighlightScreenShare from '../components/HighlightScreenShare';
import HighlightBreakoutRooms from '../components/HighlightBreakoutRooms';
import HighlightPermissions from '../components/HighlightPermissions';
import HighlightTalkingStick from '../components/HighlightTalkingStick';
import HighlightEquipment from '../components/HighlightEquipment';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => (props.theme as any).background};
        color: white;
        font-family: "Roboto"
    }
`;

const Root = styled.div`
   padding-bottom: 64px;
   width: 100%;
   overflow-x: hidden;
`;

const theme = {
   accent: '#3498db',
   background: '#172029',
   backgroundLight: '#3d5368',
   backgroundDark: '#10151b',
};

export default function index() {
   return (
      <ThemeProvider theme={theme}>
         <Root>
            <GlobalStyles />
            <SEO />
            <Header />
            <SectionHeader title="Exactly what you need for a video conference!" />
            <FeatureList />
            <SectionHeader title="Highlights" />
            <HighlightScreenShare />
            <HighlightEquipment />
            <HighlightBreakoutRooms />
            <HighlightTalkingStick />
            <HighlightPermissions />
         </Root>
      </ThemeProvider>
   );
}
