import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { theme } from "./theme.js"
import Contact from "./components/Contact";
import Home from "./components/Home";
import Music from "./components/Music";
import Navbar from "./components/Navbar";
import Plugins from "./components/Plugins";
import Resume from "./components/Resume";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/plugins" element={<Plugins />}/>
        <Route path="/music" element={<Music />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

/*
<Stack direction="row" justifyContent="space-between">
        <Sidebar />
        <Plugins />
        <Box
          flex={1}
          p={2} 
          sx={{ display: {xs: "none", sm:"block"} }}
        />
      </Stack>
*/