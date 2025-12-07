import * as React from 'react';
import {useRef} from "react";
import "./TimelineSpotlightCard.css"

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)' }) => {
    const divRef = useRef(null);

    const handleMouseMove = e => {
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.current.style.setProperty('--mouse-x', `${x}px`);
        divRef.current.style.setProperty('--mouse-y', `${y}px`);
        divRef.current.style.setProperty('--spotlight-color', spotlightColor);
    };

    return (
        <div ref={divRef} onMouseMove={handleMouseMove} className={`card-spotlight ${className}`}>
            {children}
        </div>
    );
};

 function TimelineSpotlightCard({item, className, spotlightColor}) {
     console.log(item)
     return (
            <div className={className}>
                <SpotlightCard spotlightColor={spotlightColor}>
                    <div className={"timeline-card-header"}>
                        <svg className={"timeline-card-icon"} dangerouslySetInnerHTML={{ __html: item.icon }} />
                        <div className={"timeline-title"}>{item.title}</div>
                    </div>
                    <div className={"timeline-spotlight-card-content"}>
                        <ul>
                            {item.content.map((contentItem, contentItemIndex) => (
                                <li key={contentItemIndex}>
                                    {
                                        contentItem.body && (
                                            contentItem.numbered === true || contentItem.bulleted ===true ? (
                                                contentItem.numbered ? (
                                                    <ol className={"timeline-spotlight-card-content-paragraph-numbered"}>
                                                        {contentItem.body.map((bodyItem, bodyIndex) => (
                                                            <li type={"1"} key={bodyIndex}>{bodyItem}</li>
                                                        ))}
                                                    </ol>
                                                ) : (
                                                        <ol className={"timeline-spotlight-card-content-paragraph-bulleted"}>
                                                            {contentItem.body.map((bodyItem, bodyIndex) => (
                                                                <li type={"1"} key={bodyIndex}>{bodyItem}</li>
                                                            ))}
                                                        </ol>
                                                    )
                                            ) : (
                                                <ul className={"timeline-spotlight-card-content-paragraph"}>
                                                    {contentItem.body.map((bodyItem, bodyIndex) => (
                                                        <li key={bodyIndex}>{bodyItem}</li>
                                                    ))}
                                                </ul>
                                            )
                                        )
                                    }
                                </li>
                                )
                            )}
                        </ul>
                    </div>
                </SpotlightCard>
            </div>
    )
}

export default TimelineSpotlightCard;