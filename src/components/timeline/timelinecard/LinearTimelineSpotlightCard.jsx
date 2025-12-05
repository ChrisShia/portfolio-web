import TimelineSpotlightCard from "./TimelineSpotlightCard.jsx";
import "./OrientationBasedOnIndexTimelineSpotlightCard.css"

function LinearTimelineSpotlightCard({item}) {
    return (
        <div className={"timeline-spotlight-card-wrapper"}>
            <TimelineSpotlightCard item={item} className={"linear-timeline-spotlight-card"}/>
        </div>
    )
}

export default LinearTimelineSpotlightCard;