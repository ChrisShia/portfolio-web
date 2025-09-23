import './App.css'
import { Routes, Route } from 'react-router-dom';
import MyDotGrid from "./components/MyDotGrid.jsx";
import Dock from "../components/Dock.jsx";
import useDockItems from "./dock/dockItems.jsx";
import Me from "./pages/Me.jsx";
import Home from "./pages/Home.jsx";


function App() {
    const dockItems = useDockItems();

      return (
          <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
                <MyDotGrid />
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        color: 'white', // or any color that pops on the DotGrid
                    }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/me" element={<Me />} />
                    </Routes>
                </div>
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

