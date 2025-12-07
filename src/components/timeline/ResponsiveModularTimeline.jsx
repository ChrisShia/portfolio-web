import { useMediaQuery } from 'react-responsive';
import ModularAlternateReverseTimeline from "./ModularAlternateReverseTimeline.jsx";
import ModularLinearTimeline from "./ModularLinearTimeline.jsx";

import "./ModularAlternateResponsiveTimelineContainer.css"

function ResponsiveModularTimeline() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <>
            {isMobile ? (
                <ModularLinearTimeline />
            ) : (
                <div className={"modular-alternate-reverse-timeline-scrollable-container"}>
                    <ModularAlternateReverseTimeline />
                </div>
            )}
        </>
    )
}

export default ResponsiveModularTimeline;