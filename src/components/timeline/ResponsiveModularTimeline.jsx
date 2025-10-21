import { useMediaQuery } from 'react-responsive';
import ModularAlternateReverseTimeline from "./ModularAlternateReverseTimeline.jsx";
import ModularLinearTimeline from "./ModularLinearTimeline.jsx";
import "./ResponsiveModularTimeline.css"

function ResponsiveModularTimeline() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div className={"responsive-modular-timeline"}>
            {isMobile ? (
                <ModularLinearTimeline />
            ) : (
                <ModularAlternateReverseTimeline />
            )}
        </div>
    )
}

export default ResponsiveModularTimeline;