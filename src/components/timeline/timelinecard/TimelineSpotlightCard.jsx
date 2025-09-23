import * as React from 'react';
import SpotlightCard from "../../../../components/SpotlightCard.jsx";

 function TimelineSpotlightCard({item}) {
    return (
        <div>
            <SpotlightCard className="timeline-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                {item.date}
            </SpotlightCard>
        </div>
    )
}

export default TimelineSpotlightCard;