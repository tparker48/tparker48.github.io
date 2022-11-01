import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#f1eee4',
    },
    secondary: {
      main: '#121212',
    },
    error: {
      main: '#f76f6f',
    },
    other: '#b5b2a7',
    background: {
      default: '#1e1e1e',
      paper: '#262626',
    },
    text: {
      primary: '#f1eee4',
      secondary: '#f76f6f',
    },
  },
});