import { css } from 'styled-components';

export const ContainerFluid = css`
   padding-right: 16px;
   padding-left: 16px;
   margin-right: auto;
   margin-left: auto;
   width: 100%;
`;

export const Container = css`
   ${ContainerFluid}
   @media (min-width: 576px) {
      max-width: 540px;
   }
   @media (min-width: 768px) {
      max-width: 720px;
   }
   @media (min-width: 992px) {
      max-width: 960px;
   }
   @media (min-width: 1200px) {
      max-width: 1140px;
   }
   @media (min-width: 1600px) {
      max-width: 1500px;
   }
`;
