import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { theme } from "./theme.js"
import Home from "./components/Home";
import Plugins from "./components/Plugins";
import Resume from "./components/Resume";
import About from "./components/About";
import Music from "./components/Music";
import Navbar from "./components/Navbar.js";
import PluginPage from "./components/PluginPage.js";
import { plugin_data } from "./data.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/*
      <Navbar /> 
      <Routes>
        <Route path="/music" element={<Music />}/> 
        {/* 
        <Route exact path="/" element={<Home/>}/> 
        <Route path="/plugins" element={<Plugins />}/>
        <Route path="/resume" element={<Resume />}/> 
        <Route path="/about" element={<About />}/> 
        {plugin_data.map((plugin, index) => (
          <Route 
            path={"/plugins/"+plugin.name}
            key={index}
            element={<PluginPage plugin={plugin}/>}
          />
        ))}
        
      </Routes>
      */}
      <Music/>
    </ThemeProvider>
  );
}

export default App;