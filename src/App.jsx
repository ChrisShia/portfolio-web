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
          <div style={{ width: '100vw', height:'100vw' }}>
                <MyDotGrid />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/me" element={<Me />} />
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

