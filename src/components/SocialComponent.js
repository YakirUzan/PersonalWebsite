import React from "react";

const SocialComponent = ({className, url, icon}) => {
    const openLink = (url) => {
        window.open(url, "_blank");
    }

    return (
        <button
            className={className}
            onClick={() => openLink(url)}
        >
            <i className={icon}></i>
        </button>
    );
};

export default SocialComponent;