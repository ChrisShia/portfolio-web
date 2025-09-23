import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SpotlightCard from "../../../components/SpotlightCard.jsx";
import "./MyModularAlternateReverseTimeline.css"
import TimelineSpotlightCard from "./timelinecard/TimelineSpotlightCard.jsx";

const TimelineContents = [
    {
        date: '2020',
        title: 'Started College',
        description: 'Began my studies in computer science at XYZ University.'
    },
    {
        date: '2021',
        title: 'Internship at ABC Corp',
        description: 'Worked as a software engineering intern on front-end projects.'
    },
    {
        date: '2022',
        title: 'Joined Open Source',
        description: 'Contributed to several open-source libraries and projects.'
    },
    // Add more items as needed
];

export default function MyModularAlternateReverseTimeline() {
    return (
        <div className="my-modular-alternate-reverse-timeline">
            <Timeline position="alternate-reverse">
                <div>
                    {TimelineContents.map((item,index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <TimelineSpotlightCard
                                    item={item}
                                />
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </div>
            </Timeline>
        </div>
    );
}