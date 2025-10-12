import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import CustomTimelineDot from "./MyTimelineDot.jsx";
import achievements from "../../api/AchievementsAPI.jsx";

import {useEffect, useState} from "react";
import RightOrientedTimelineSpotlightCard from "./timelinecard/RightOrientedTimelineSpotlightCard.jsx";

function ModularLinearTimelineLastConnector() {

    return (
        <div style={{width:'vw', height:'15rem'}}>
            <TimelineSeparator style={{width:'20px'}}>
                <TimelineConnector style={{height: '20rem'}}/>
            </TimelineSeparator>
        </div>
    )
}

function ModularLinearTimeline() {
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

            <Timeline position="right" sx={{'& .MuiTimelineItem-root::before': {display:'none'}}}>

                {timelineContents.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <CustomTimelineDot size={20} customColor={"#fff"}/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent >
                            <RightOrientedTimelineSpotlightCard item={item} index={index}/>
                        </TimelineContent>
                    </TimelineItem>
                ))}
                <TimelineSeparator style={{alignItems: "baseline"}}>
                    <ModularLinearTimelineLastConnector/>
                </TimelineSeparator>

            </Timeline>

    );
}

export default ModularLinearTimeline;