import styled from 'styled-components';

const Button = styled.button`
   border-radius: 4px;
   transition: 0.3s all;
   cursor: pointer;
   color: white;
   font-size: 16px;
   font-weight: 400;
   margin: 20px 0;
   -webkit-appearance: none;
   line-height: 1;
   display: inline-block;
   padding: 16px 10px;
   text-decoration: none;

   text-align: center;

   box-sizing: border-box;
   background: ${(props) => props.theme.backgroundDark};
   border: 1px solid ${(props) => props.theme.backgroundLight};

   min-width: 140px;

   :hover {
      border: 1px solid ${(props) => props.theme.accent};
      box-shadow: 0 0 5px #000;
   }
`;

export default Button;
