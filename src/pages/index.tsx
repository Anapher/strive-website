import React from 'react';
import SEO from '../components/seo';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import FeatureList from '../components/FeatureList';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => (props.theme as any).background};
        color: white;
        font-family: "Roboto"
    }
`;

const Root = styled.div`
   padding-top: 32px;
   display: flex;
   flex-direction: column;
   align-items: center;
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
         <>
            <GlobalStyles />
            <SEO />
            <Header />
            <SectionHeader title="Exactly what you need for a video conference!" />
            <FeatureList />
         </>
      </ThemeProvider>
   );
}
