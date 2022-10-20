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
    error: {
      main: '#f76f6f',
    },
    other: '#e0dabf',
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