import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h1`
   text-align: center;
   font-family: 'Roboto Condensed';
   font-weight: bold;

   font-size: 20;

   @media (min-width: 768px) {
      border-bottom: 3px solid ${(props) => (props.theme as any).accent};
   }
`;

const SectionContainer = styled.div`
   display: flex;
   justify-content: center;
   padding: 32px 0px;
`;

type Props = {
   title: string;
};

export default function SectionHeader({ title }: Props) {
   return (
      <SectionContainer>
         <SectionTitle>{title}</SectionTitle>
      </SectionContainer>
   );
}
