import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { theme } from "./theme.js"
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Plugins from "./components/Plugins";
import Resume from "./components/Resume";
import PluginPage from "./components/PluginPage.js";
import { plugin_data } from "./data.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/plugins" element={<Plugins />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/contact" element={<Contact />}/>
        {plugin_data.map((plugin, index) => (
          <Route 
            path={"/plugins/"+plugin.name}
            key={index}
            element={<PluginPage plugin={plugin}/>}
          />
        ))}
        
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