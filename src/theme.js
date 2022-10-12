import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#121212',
    },
    background: {
      default: '#1e1e1e',
      paper: '#232323',
    },
    text: {
      primary: '#f1eee4',
      secondary: '#f76f6f',
    },
  },
});