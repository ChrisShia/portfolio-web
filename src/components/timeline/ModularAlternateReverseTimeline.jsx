import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import "./ModularAlternateReverseTimeline.css"
import OrientationBasedOnIndexTimelineSpotlightCard from "./timelinecard/OrientationBasedOnIndexTimelineSpotlightCard.jsx";
import CustomTimelineDot from "./MyTimelineDot.jsx";
import achievements from "../../api/AchievementsAPI.jsx";

import {useEffect, useState} from "react";

function ModularAlternateReverseTimelineLastConnector() {

    return (
        <div style={{width:'vw', height:'15rem'}}>
            <TimelineSeparator>
                <TimelineConnector style={{height: '20rem'}}/>
            </TimelineSeparator>
        </div>
    )
}

function ModularAlternateReverseTimeline() {
    const [timelineContents, setTimelineContents] = useState([]);
    useEffect(() => {
        async function fetchTimelineData() {
            try {
                const res = await achievements.get();
                setTimelineContents(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchTimelineData();
    }, []);
    return (
        <div className="modular-alternate-reverse-timeline">
            <Timeline position="alternate-reverse">

                    {timelineContents.map((item, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                {/*<CustomTimelineDot size={20} customColor={"#fff"}/>*/}
                                <div className={"timeline-separator-dot"}>{item.year}</div>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent >
                                <OrientationBasedOnIndexTimelineSpotlightCard item={item} index={index}/>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                    <ModularAlternateReverseTimelineLastConnector/>

            </Timeline>
        </div>
    );
}

export default ModularAlternateReverseTimeline;