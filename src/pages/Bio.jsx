import ModularAlternateReverseTimeline from "../components/timeline/ModularAlternateReverseTimeline.jsx";
import "./style/Me.css"
import AnimatedContent from "../../components/AnimatedContent.jsx";
import ResponsiveModularTimeline from "../components/timeline/ResponsiveModularTimeline.jsx";

function Bio() {

    return (
            <>
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
                <div className="timeline-bottom-fade" />
            </>
    )
}

export default Bio;