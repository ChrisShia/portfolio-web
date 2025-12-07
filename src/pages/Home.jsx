import RotatingText from "../../components/RotatingText.jsx";

import "./Home.css"
import Dock from "../../components/Dock.jsx";
import useDockItems from "../dock/dockItems.jsx";
import {useMediaQuery} from "react-responsive";

function Home() {
    const dockItems = useDockItems();
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    return (
        <>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white',
            }}>
                <div className={"home-heading"}>
                    <div className={"home-name-heading"}>
                        {/*Christos Shiakas*/}
                        <code>Christos Shiakas</code>
                    </div>

                    <div className={"word-with-rotating-text"}>
                        <div className={"software-word"}>
                            software
                        </div>
                        <RotatingText className={"rotating-text"}
                                      texts={['Engineering', 'Development']}
                                      mainClassName="px-2 sm:px-2 md:px-3 rotating-text overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                                      staggerDuration={0.025}
                                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                      transition={{type: "spring", damping: 30, stiffness: 300}}
                                      rotationInterval={2000}
                        />
                    </div>
                </div>
            </div>
            {!isMobile &&<div className={"fixed-footer"}>
                <Dock
                    items={dockItems}
                    panelHeight={78}
                    baseItemSize={60}
                    magnification={80}
                />
            </div>}
        </>
    );
}

 export default Home;