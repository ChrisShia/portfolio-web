import './App.css'
import { Routes, Route } from 'react-router-dom';
import MyDotGrid from "./components/MyDotGrid.jsx";
import Dock from "../components/Dock.jsx";
import useDockItems from "./dock/dockItems.jsx";
import Bio from "./pages/Bio.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import usePillNavItems from "./navmenu/PillNavItems.jsx";
import PillNav from "./components/navmenu/PillNav.jsx";
import { useMediaQuery } from 'react-responsive'


function App() {
    const dockItems = useDockItems();
    const navMenuItems = usePillNavItems();
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })
    return (
          <div className={"app-outer-wrap"}>
              <MyDotGrid />

              <div className={"app-inner-wrap"}>
                  {isMobile && <PillNav
                      logoLink={'/'}
                      items={navMenuItems}
                      activeHref="/"
                      className="custom-nav"
                      ease="power2.easeOut"
                      baseColor="#000000"
                      hoveredPillTextColor="#ffffff"
                      pillTextColor="#000000"
                  />}
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/me" element={<Bio />} />
                      <Route path="/projects" element={<Projects />} />
                  </Routes>
                  {!isMobile &&<Dock
                      items={dockItems}
                      panelHeight={78}
                      baseItemSize={60}
                      magnification={80}
                  />}
              </div>
          </div>
      )
}

export default App;

