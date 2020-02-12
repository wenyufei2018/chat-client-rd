import {createGlobalStyle} from 'styled-components';

export interface ITheme {
  containerBackground: string;
  background: string;
  fontFamily: string;
  headerBgColor: string;
  headerFontColor: string;
  headerFontSize: string;
  botBubbleColor: string;
  botFontColor: string;
  userBubbleColor: string;
  userFontColor: string;
}

const defaultTheme: ITheme = {
  containerBackground: '#9E9E9E',
  background: '#f5f8fb',
  fontFamily: 'monospace',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

export default defaultTheme;

export const GlobalStyled = createGlobalStyle`
  body{
    background-color: ${defaultTheme.containerBackground}
  }
`
