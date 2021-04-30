import React from 'react';
import styled from 'styled-components';
import { Animate, AnimateGroup } from 'react-simple-animate';
import Button from './Button';

const LogoHeader = styled.h1`
   text-align: center;
   font-family: 'Roboto Condensed';
   font-weight: bold;
   line-height: 60px;

   @media (min-width: 768px) {
      font-size: 55px !important;
      margin: 80px auto 10px;
   }

   @media (min-width: 1024px) {
      margin-top: 20px;
      font-size: 70pt !important;
   }
`;

const Slogan = styled.h4`
   color: ${(props) => props.theme.accent};
   text-align: center;
   font-family: 'Roboto Condensed';
   text-transform: uppercase;

   line-height: 0px;

   @media (min-width: 768px) {
      font-size: 24pt;
      letter-spacing: 4px;
   }
`;

const Container = styled.header`
   padding-top: 70px;
`;

const ButtonGroup = styled.div`
   display: flex;
   justify-content: center;
`;

export default function Header() {
   return (
      <AnimateGroup play>
         <Container>
            <Animate
               sequenceIndex={0}
               duration={0.2}
               start={{ transform: 'translateY(20px)', opacity: 0 }}
               end={{ transform: 'translateY(0)', opacity: 1 }}
               easeType="ease-in"
            >
               <LogoHeader>Strive</LogoHeader>
            </Animate>
            <Animate
               sequenceIndex={1}
               duration={0.2}
               start={{ transform: 'translateY(20px)', opacity: 0 }}
               end={{ transform: 'translateY(0)', opacity: 1 }}
               easeType="ease-in"
            >
               <Slogan>Open source video conference system</Slogan>
            </Animate>
            <ButtonGroup>
               <Button as="a" href="https://github.com/Anapher/Strive">
                  GitHub
               </Button>
               <Button as="a" href="https://demo.openstrive.org/" style={{ marginLeft: 16 }}>
                  Demo
               </Button>
            </ButtonGroup>
         </Container>
      </AnimateGroup>
   );
}
