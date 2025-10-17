import TimelineSpotlightCard from "./TimelineSpotlightCard.jsx";
import "./OrientationBasedOnIndexTimelineSpotlightCard.css"

function RightOrientedTimelineSpotlightCard({item}) {
    return (
        <div className={"orientation-timeline-spotlight-card"}>
            <TimelineSpotlightCard item={item} className={"right-timeline-spotlight-card"}/>
        </div>
    )
}

export default RightOrientedTimelineSpotlightCard;