import React from "react";
import './SkillComponent.css';

const SkillComponent = ({extra}) => {
    let title = null;

    let isIcon = ["java", "c", "cpp", "python", "angular", "typescript", "javascript", "html", "css", "mysql", "firebase", "gcp", "android", "googlemaps", "pandas", "numpy", "vxworks", "intellij", "pycharm", "visualstudio", "webstorm"].includes(extra);

    if (extra === "java") {
        title = "Java";
    } else if (extra === "c") {
        title = "C (Language)";
    } else if (extra === "cpp") {
        title = "C++";
    } else if (extra === "python") {
        title = "Python";
    } else if (extra === "angular") {
        title = "Angular";
    } else if (extra === "typescript") {
        title = "TypeScript";
    } else if (extra === "javascript") {
        title = "JavaScript";
    } else if (extra === "html") {
        title = "HTML";
    } else if (extra === "css") {
        title = "CSS";
    } else if (extra === "mysql") {
        title = "MySql";
    } else if (extra === "firebase") {
        title = "Firebase";
    } else if (extra === "gcp") {
        title = "Google Cloud Platform";
    } else if (extra === "android") {
        title = "Android";
    } else if (extra === "googlemaps") {
        title = "Google Maps API";
    } else if (extra === "pandas") {
        title = "Pandas";
    } else if (extra === "numpy") {
        title = "NumPy";
    } else if (extra === "vxworks") {
        title = "VxWorks";
    } else if (extra === "intellij") {
        title = "IntelliJ";
    } else if (extra === "pycharm") {
        title = "PyCharm";
    } else if (extra === "visualstudio") {
        title = "Visual Studio";
    } else if (extra === "webstorm") {
        title = "WebStorm";
    }

    return (
        <div className="skill-component">
            {isIcon && (
                <div className="tooltip-container">
                    <div className="tooltip-target">
                        <img src={`/${extra}.png`} alt={title}/>
                    </div>
                    <div className="tooltip-content">{title}</div>
                </div>
            )}
            {!isIcon && (
                <p className="no-margin">{extra}</p>
            )}
        </div>
    )
}

export default SkillComponent;