export interface ITheme {
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

export default {
  background: '#f5f8fb',
  fontFamily: 'monospace',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
} as ITheme;
