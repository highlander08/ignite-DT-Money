import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 :focus {
  outline: none;
  box-shadow: 0 0 0 2px ${({ theme }) => theme['green-300']};
 }

 ::-webkit-scrollbar {
  width: 6px;
  height: 6px;
 }

 ::-webkit-scrollbar-track {
  background: transparent;
 }

 ::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: ${({ theme }) => theme['gray-600']};
 }

 body {
  background: ${({ theme }) => theme['gray-800']};
  color: ${({ theme }) => theme['gray-100']};
  -webkit-font-smoothing: antialiased;
 }
 
 body, input, textarea, button {
  font: 400 1rem 'Roboto', sans-serif;
 }
`
