import "./bio/TimelineFooterFade.css"
import AnimatedContent from "../../components/AnimatedContent.jsx";
import ResponsiveModularTimeline from "../components/timeline/ResponsiveModularTimeline.jsx";
import ShuffleWord from "../components/shuffleword/ShuffleWord.jsx";

import "./bio/BioPageHeader.css"
import HeaderWindowContainerBioPage from "../containers/bio/HeaderWindowContainerBioPage.jsx";

function Bio() {

    return (
            <>
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
                <AnimatedContent
                    distance={50}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    // ease="bounce.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.3}>
                    <ResponsiveModularTimeline />
                </AnimatedContent>
                <div className="timeline-footer-fade" />
            </>
    )
}

export default Bio;