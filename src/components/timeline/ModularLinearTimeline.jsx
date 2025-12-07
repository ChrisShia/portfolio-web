import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
// import CustomTimelineDot from "./MyTimelineDot.jsx";
import achievements from "../../api/AchievementsAPI.jsx";
import "./ModularLinearTimeline.css"

import {useEffect, useState} from "react";
import LinearTimelineSpotlightCard from "./timelinecard/LinearTimelineSpotlightCard.jsx";

function ModularLinearTimelineLastConnector() {

    return (
        <div style={{width:'vw', height:'15rem'}}>
            <TimelineSeparator style={{width:'39px'}}>
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
            <div className={"modular-linear-timeline-container"} style={{width:"100%"}}>
                <Timeline position="right" style={{paddingLeft:"0",paddingRight:"0"}} sx={{'& .MuiTimelineItem-root::before': {display:'none'}, '& .MuiTimelineItem-root': {width: "100%"}}}>

                    {timelineContents.map((item, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator style={{ flexGrow:"1"}}>
                                <div className={"timeline-separator-dot-mobile"}>{item.year}</div>
                                <TimelineConnector className={"connector-top"} style={{backgroundColor:"#4a4ac0", width:"1px", flexGrow:"0"}}/>
                                <LinearTimelineSpotlightCard item={item} index={index}/>
                                <TimelineConnector className={"connector-down"} style={{backgroundColor:"#4a4ac0", width:"1px", flexGrow:"0"}}/>
                            </TimelineSeparator>
                        </TimelineItem>
                    ))}

                </Timeline>
            </div>
    );
}

export default ModularLinearTimeline;