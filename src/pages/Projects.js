import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import './Projects.css';
import SkillComponent from "../components/SkillComponent";

const Slider = forwardRef(({images}, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(true);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const handleClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useImperativeHandle(ref, () => ({
        reset: () => setCurrentIndex(0),
        start: () => setIsPaused(false),
        stop: () => setIsPaused(true),
    }));

    useEffect(() => {
        if (isPaused) return;

        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500); // Change image every 2 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [isPaused, images]);

    return (
        <img src={images[currentIndex]}
             onClick={handleClick}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
             alt={`slide-${currentIndex}`}/>
    );
});

const Projects = forwardRef((props, ref) => {
    const projects = [
        {
            name: "Jubot",
            icon: "/jubot_icon.png",
            location: "Google Play Application",
            description: "An application for tracking work shifts, performing analyses using graphs, and viewing paychecks.",
            images: ["/jubot_0.png", "/jubot_1.png", "/jubot_2.png", "/jubot_3.png", "/jubot_4.png"],
            skills: ["java", "android", "firebase", "gcp"],
            url: "https://play.google.com/store/apps/details?id=com.jubot.android"
        },
        {
            name: "Red Or Ad",
            icon: "/red_or_ad_icon.jpg",
            location: "Google Play Game",
            description: "A speed-based game where players collect gold coins and purchase items and additional characters.",
            images: ["/red_or_ad_0.png", "/red_or_ad_1.png", "/red_or_ad_2.png", "/red_or_ad_3.png", "/red_or_ad_4.png", "/red_or_ad_5.png", "/red_or_ad_6.png", "/red_or_ad_7.png", "/red_or_ad_8.png"],
            skills: ["java", "android", "firebase", "gcp"],
            url: "https://play.google.com/store/apps/details?id=com.redorad.android"
        },
        {
            name: "The Chef",
            icon: "/chef_icon.png",
            location: "Technion Final Project",
            description: "AI-driven model to predict restaurant ranking based on location, price level, restaurant type, and more.",
            skills: ["python", "pandas", "numpy", "googlemaps"],
            images: ["/chef_0.png", "/chef_1.png", "/chef_2.png", "/chef_3.png", "/chef_4.png"]
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const handlePrevious = () => {
        if (sliderRef.current) {
            sliderRef.current.reset();
        }
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.reset();
        }
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
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
                                    src={projects[currentIndex].icon}
                                     alt={projects[currentIndex].name}/>
                                <h1 className="no-margin">{projects[currentIndex].name}</h1>
                            </div>
                            <h3>{projects[currentIndex].location}</h3>
                            <hr/>
                            <p>{projects[currentIndex].description}</p>
                            <hr/>
                            <div className="skills-container">
                                <h5 className="no-margin">Skills</h5>
                                <div className="skill-list">
                                    {projects[currentIndex].skills.map((extra, index) => (
                                        <SkillComponent key={index} extra={extra}/>
                                    ))}
                                </div>
                            </div>
                            {projects[currentIndex].url != null && (
                                <a href={projects[currentIndex].url} target="_blank"
                                   rel="noopener noreferrer">
                                    <i className="fa-brands fa-google-play" style={{marginRight: "8px"}}></i>
                                    Open in Google Play
                                </a>
                            )}
                        </div>
                        <div className="project-image-section">
                            <Slider ref={sliderRef} images={projects[currentIndex].images}/>
                        </div>
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