import ResponsiveModularTimeline from "../components/timeline/ResponsiveModularTimeline.jsx";
import ShuffleWord from "../components/shuffleword/ShuffleWord.jsx";
import { useMediaQuery } from 'react-responsive'
import "./bio/BioPageHeader.css"
import HeaderWindowContainerBioPage from "../containers/bio/HeaderWindowContainerBioPage.jsx";
import Dock from "../../components/Dock.jsx";
import useDockItems from "../dock/dockItems.jsx";
import "./bio/Bio.css"

function Bio() {
    const dockItems = useDockItems();
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })
    return (
            <div className={"bio-page-container"}>
                <HeaderWindowContainerBioPage>
                    <div className={"bio-shuffle-title"}>
                        <div>
                            <ShuffleWord text={"Bio"} className={"shuffle-word-bio"}/>
                            <ShuffleWord text={"/"} duration={0} className={"shuffle-word-bio"}/>
                            <ShuffleWord text={"&"} className={"shuffle-word-bio"}/>
                        </div>
                        <ShuffleWord text={"Milestones"} className={"shuffle-word-milestones"}/>
                    </div>
                </HeaderWindowContainerBioPage>
                <ResponsiveModularTimeline />
                <div className={"fixed-footer"}>
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

export default Bio;