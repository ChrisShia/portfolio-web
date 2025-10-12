import * as React from 'react';
import SpotlightCard from "../../../../components/SpotlightCard.jsx";



 function TimelineSpotlightCard({item, className, spotlightColor}) {
    return (
            <div className={className}>
                <SpotlightCard spotlightColor={spotlightColor}>
                    <div><code>{item.content}</code></div>
                    <div><code>{item.year}</code></div>
                    <div style={{justifyContent: "left"}}><code>{item.institution}</code></div>
                </SpotlightCard>
            </div>
    )
}

export default TimelineSpotlightCard;