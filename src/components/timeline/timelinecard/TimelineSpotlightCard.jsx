import * as React from 'react';
import SpotlightCard from "../../../../components/SpotlightCard.jsx";



 function TimelineSpotlightCard({item, className}) {
    return (
            <div className={className}>
                <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
                    <div>{item.content}</div>
                    <div>{item.year}</div>
                    <div>{item.institution}</div>
                </SpotlightCard>
            </div>
    )
}

export default TimelineSpotlightCard;