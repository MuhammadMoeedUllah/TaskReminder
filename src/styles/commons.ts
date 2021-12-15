import styled, { StyledComponent } from "styled-components";
import {themeProps} from "../common/types";


export const Button= styled.button<themeProps>`
  background: ${props => props.darkMode ? "black":"white"};
  color: ${props => props.darkMode ?  "white" : "palevioletred"};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;

`;


export const Input = styled.input<themeProps>`
  padding: 0.5em;
  margin: 0.5em;
  font-size: 1em;
  color: ${props => props.darkMode ? "white" : "palevioletred" };
  background: ${props => props.darkMode ? "black" : "papayawhip"};
  border-color: palevioletred;
  border-radius: 3px;
`;

export const LoginContainer = styled.div<themeProps>`
margin: 5px;
padding:5px;
background: papayawhip;
border-style: solid;    
border-width: thick;
border-radius: 5px;
border-color: ${props=> props.darkMode? "grey" : "palevioletred"};
display:flex;
flex-direction: column;
width: 30%;
align-items:center;
`;

export const LoginPageDisplay = styled.div`
display:flex;
flex-direction: column;
align-content:center;
align-items:center;
`;