import React from 'react';
import './Resume.css';
import {data} from "../data";
import TimelineComponent from "../components/TimelineComponent";

function Resume() {
    return (
        <div className="resume">
            <div className="timeline-container">
                <div className="timeline">
                    <TimelineComponent title="Education" data={data.resume.educationData} />
                    <TimelineComponent title="Experience" data={data.resume.experienceData} />
                </div>
            </div>
        </div>
    );
}

export default Resume;