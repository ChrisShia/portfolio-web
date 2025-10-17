import TimelineSpotlightCard from "./TimelineSpotlightCard.jsx";
import "./OrientationBasedOnIndexTimelineSpotlightCard.css"

function OrientationBasedOnIndexTimelineSpotlightCard({item, index}) {
    const isLeft = index % 2 === 0;
    return (
        <div className={"orientation-timeline-spotlight-card"}>
            <TimelineSpotlightCard item={item} className={isLeft ? "left-timeline-spotlight-card" : "right-timeline-spotlight-card"}/>
        </div>
    )
}

export default OrientationBasedOnIndexTimelineSpotlightCard;