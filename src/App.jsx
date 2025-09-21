import { useState } from 'react'
import './App.css'
import MyDotGrid from "./components/MyDotGrid.jsx";
import Dock from "../components/Dock.jsx";
import items from "./nav/homeNavItems.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
                <h1>
                    <code>Christos Shiakas</code>
                </h1>
                <p>
                    <code>software / Engineering</code>
                </p>
                {/*<div className="card">*/}
                {/*    <button onClick={() => setCount((count) => count + 1)}>*/}
                {/*        count is {count}*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
            <Dock
                items={items}
                panelHeight={78}
                baseItemSize={60}
                magnification={80}
            />
        </div>
    </>
  )
}

export default App;
