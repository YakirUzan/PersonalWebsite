import React, {forwardRef, useImperativeHandle, useRef, useState} from "react";
import './Projects.css';
import SkillComponent from "../components/SkillComponent";
import ImageRunnerComponent from "../components/ImageRunnerComponent";
import {data} from "../data";

const Projects = forwardRef((props, ref) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const handlePrevious = () => {
        if (sliderRef.current) {
            sliderRef.current.reset();
        }
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.projects.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.reset();
        }
        setCurrentIndex((prevIndex) =>
            prevIndex === data.projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const onScrollingIn = () => {
        if (sliderRef.current) {
            sliderRef.current.start();
        }
    };

    const onScrollingOut = () => {
        if (sliderRef.current) {
            sliderRef.current.stop();
            sliderRef.current.reset();
        }
    };

    useImperativeHandle(ref, () => ({
        onScrollingIn,
        onScrollingOut,
    }));

    return (
        <div className="projects">
            <h1 className="projects-title">Projects</h1>
            <div className="project-viewer">
                <div className="project-container">
                    <button className="control-button left" onClick={handlePrevious}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <div className="project-split-container">
                        <div className="project-info-section">
                            <div className="project-title">
                                <img className="no-margin"
                                    src={data.projects[currentIndex].icon}
                                     alt={data.projects[currentIndex].name}/>
                                <h1 className="no-margin">{data.projects[currentIndex].name}</h1>
                            </div>
                            <h3>{data.projects[currentIndex].location}</h3>
                            <hr/>
                            <p>{data.projects[currentIndex].description}</p>
                            <hr/>
                            <div className="skills-container">
                                <h5 className="no-margin">Skills</h5>
                                <div className="skill-list">
                                    {data.projects[currentIndex].skills.map((extra, index) => (
                                        <SkillComponent key={index} extra={extra}/>
                                    ))}
                                </div>
                            </div>
                            {data.projects[currentIndex].url != null && (
                                <a href={data.projects[currentIndex].url} target="_blank"
                                   rel="noopener noreferrer">
                                    <i className="fa-brands fa-google-play" style={{marginRight: "8px"}}></i>
                                    Open in Google Play
                                </a>
                            )}
                        </div>
                        <ImageRunnerComponent ref={sliderRef} images={data.projects[currentIndex].images}/>
                    </div>
                    <button className="control-button right" onClick={handleNext}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
});

export default Projects;