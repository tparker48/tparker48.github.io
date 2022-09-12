import { Grid, Typography } from '@material-ui/core';
import { MuiThemeProvider, createTheme } from '@material-ui/core'
import Typed from "react-typed";
import '../index.css'

const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#545151',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#666662',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
    typography: {
      fontFamily: 'Arial'
    },
  });

function Home() {
    return (
        <MuiThemeProvider theme={theme}>
            <Grid container spacing={1}>
                <Grid item xs={12} align='center'>
                    <Typography component='h3' variant='h3' color='primary'>
                        Thomas Parker
                    </Typography>
                </Grid>
                <Grid item xs={12} align='center'>
                    <Typography component='p' variant='h6' color='secondary'>
                        <Typed strings={["software engineer","plugin developer", "music maker"]} typeSpeed={30} loop={true} />
                    </Typography>
                </Grid>
            </Grid>
        </MuiThemeProvider>
    );
}

export default Home;