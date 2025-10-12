import { useMediaQuery } from 'react-responsive';
import ModularAlternateReverseTimeline from "./ModularAlternateReverseTimeline.jsx";
import ModularLinearTimeline from "./ModularLinearTimeline.jsx";

function ResponsiveModularTimeline() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    if (isMobile) {
        return (
            <>
                <ModularLinearTimeline />
            </>
        );
    }

    return (
        <>
            <ModularAlternateReverseTimeline />
        </>
    );
}

export default ResponsiveModularTimeline;