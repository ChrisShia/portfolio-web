import './App.css'
import { Routes, Route } from 'react-router-dom';
import MyDotGrid from "./components/MyDotGrid.jsx";
import Dock from "../components/Dock.jsx";
import useDockItems from "./dock/dockItems.jsx";
import Bio from "./pages/Bio.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";


function App() {
    const dockItems = useDockItems();

      return (
          // <div style={{ width: '100vw', height:'100vh', overflow:'hidden'}}>
          <div style={{ width: '100vw', height:'100vh'}}>
                <MyDotGrid />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/me" element={<Bio />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Dock
                    items={dockItems}
                    panelHeight={78}
                    baseItemSize={60}
                    magnification={80}
                />
          </div>
      )
}

export default App;

