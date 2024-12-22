import React from 'react';
import './Resume.css';
import SkillComponent from "../components/SkillComponent";

const TimelineItem = ({year, title, companyOrInstitution, description, gpa, courses, skills, ides}) => {
    return (
        <div className="timeline-item">
            <div className="timeline-dot-line timeline-item-hover"></div>
            <div className="timeline-dot timeline-item-hover"></div>
            <div className="timeline-content timeline-item-hover">
                <h4 className="title">{title}</h4>
                <p className="no-margin sub-title">{companyOrInstitution} ({year})</p>
                <hr/>
                <p className="no-margin description">{description}</p>

                {gpa != null && (
                    <div className="gpa">
                        <p className="no-margin">GPA: {gpa}</p>
                    </div>
                )}

                <div className="timeline-extras">
                    <hr/>
                    <div className="timeline-extras-list">
                        {courses != null && (
                            <div>
                                <h5>Courses</h5>
                                <div className="timeline-extra-list">
                                    {courses.map((extra, index) => (
                                        <SkillComponent key={index} extra={extra}/>
                                    ))}
                                </div>
                            </div>
                        )}
                        {skills != null && (
                            <div>
                                <h5>Skills</h5>
                                <div className="timeline-extra-list">
                                    {skills.map((extra, index) => (
                                        <SkillComponent key={index} extra={extra}/>
                                    ))}
                                </div>
                            </div>
                        )}
                        {ides != null && (
                            <div>
                                <h5>IDEs</h5>
                                <div className="timeline-extra-list">
                                    {ides.map((extra, index) => (
                                        <SkillComponent key={index} extra={extra}/>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Timeline = () => {
    const educationData = [
        {
            year: "10/2019 - 07/2023",
            title: "B.Sc in Computer Science",
            companyOrInstitution: "Technion, Israel Institute of Technology",
            description: "I completed my first year at the Open University and continued my studies at the Technion.",
            gpa: "87",
            courses: ["OOP", "Machine Learning", "Databases", "Theory Of Compilation", "Network Security"]
        },
        {
            year: "08/2016 - 07/2017",
            title: "JAVA - Full Stack Development Course",
            companyOrInstitution: "John Bryce, Tel Aviv",
            description: "Completed the course with honors",
            skills: ["java", "javascript", "html", "css", "angular", "mysql"]
        },
    ];

    const experienceData = [
        {
            year: "07/2022 - 02/2024",
            title: "RT Embedded Software Developer",
            companyOrInstitution: "Elbit Systems, Avionics",
            description: "Development of RT-embedded software for pilot helmets, enabling accurate tracking of head movements and determining the pilot's position relative to the world.",
            skills: ["c", "cpp", "python"],
            ides: ["visualstudio", "vxworks", "pycharm"]
        },
        {
            year: "04/2017 - 02/2019",
            title: "Full Stack Developer",
            companyOrInstitution: "Barak Capital",
            description: "Software development focused on risk management, aimed at minimizing errors and identifying risks for traders in the capital markets.",
            skills: ["java", "angular", "typescript", "html", "css", "mysql"],
            ides: ["intellij", "webstorm", "pycharm"]
        },
    ];

    return (
        <div className="timeline-container">
            <div className="timeline">
                <div className="timeline-section">
                    <h2>Education</h2>
                </div>
                <div className="timeline-section">
                    <h2>Experience</h2>
                </div>
            </div>
            <div className="timeline">
                <div className="timeline-section">
                    <div className="timeline-line"></div>
                    {educationData.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                    ))}
                </div>
                <div className="timeline-section">
                    <div className="timeline-line"></div>
                    {experienceData.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

function Resume() {
    return (
        <div className="resume">
            <Timeline/>
        </div>
    );
}

export default Resume;