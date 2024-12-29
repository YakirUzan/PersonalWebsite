import React from 'react';
import './Resume.css';
import TimelineItemComponent from "../components/TimelineItemComponent";
import {data} from "../data";

function Resume() {
    return (
        <div className="resume">
            <div className="timeline-container">
                <div className="timeline">
                    <div className="timeline-section">
                        <h2>Education</h2>
                        <div className="timeline-item-list">
                            <div className="timeline-line"></div>
                            {data.resume.educationData.map((item, index) => (
                                <TimelineItemComponent key={index} {...item} />
                            ))}
                        </div>
                    </div>
                    <div className="timeline-section">
                        <h2>Experience</h2>
                        <div className="timeline-item-list">
                            <div className="timeline-line"></div>
                            {data.resume.experienceData.map((item, index) => (
                                <TimelineItemComponent key={index} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;