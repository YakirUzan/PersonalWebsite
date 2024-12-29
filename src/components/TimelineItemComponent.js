import SkillComponent from "./SkillComponent";
import React from "react";
import "./TimelineItemComponent.css"

const TimelineItemComponent = ({year, title, companyOrInstitution, description, gpa, courses, skills, ides}) => {
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

export default TimelineItemComponent;