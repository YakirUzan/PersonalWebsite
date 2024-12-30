import React from "react";
import TimelineItemComponent from "./TimelineItemComponent";
import "./TimelineComponent.css"

const TimelineComponent = ({title, data}) => {
    return (
        <div className="timeline-section">
            <h2>{title}</h2>
            <div className="timeline-item-list">
                <div className="timeline-line"></div>
                {data.map((item, index) => (
                    <TimelineItemComponent key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default TimelineComponent;