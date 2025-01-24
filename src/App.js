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
import FretboardTrainer from "./components/FretboardTrainer.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/*<Navbar />*/} 
      <Routes>
        <Route path="/music" element={<Music />}/> 
        
        <Route exact path="/" element={<Music/>}/> 
        <Route path="/fretboard" element={<FretboardTrainer/>}/>
        <Route exact path="/portfolio_deprecated" element={<Home />}/>
        <Route path="/portfolio_deprecated/plugins" element={<Plugins />}/>
        <Route path="/portfolio_deprecated/resume" element={<Resume />}/> 
        <Route path="/portfolio_deprecated/about" element={<About />}/> 
        {plugin_data.map((plugin, index) => (
          <Route 
            path={"/portfolio_deprecated/plugins/"+plugin.name}
            key={index}
            element={<PluginPage plugin={plugin}/>}
          />
        ))}
        
      </Routes>
      
      
    </ThemeProvider>
  );
}

export default App;