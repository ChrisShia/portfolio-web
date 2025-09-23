import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import "./MyModularAlternateReverseTimeline.css"
import OrientationBasedOnIndexTimelineSpotlightCard from "./timelinecard/OrientationBasedOnIndexTimelineSpotlightCard.jsx";
import TimelineDotWithProps from "./MyTimelineDot.jsx";
import CustomTimelineDot from "./MyTimelineDot.jsx";
import achievements from "../../api/AchievementsAPI.jsx";
import {useEffect, useState} from "react";

export default function MyModularAlternateReverseTimeline() {
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
        <div className="my-modular-alternate-reverse-timeline">
            <Timeline position="alternate-reverse">
                <div>
                    {timelineContents.map((item, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <CustomTimelineDot size={20} customColor={"#fff"}/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent >
                                <OrientationBasedOnIndexTimelineSpotlightCard item={item} index={index}/>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </div>
            </Timeline>
        </div>
    );
}