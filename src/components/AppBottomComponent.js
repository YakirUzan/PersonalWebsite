import {data} from "../data";
import React from "react";
import "./AppBottomComponent.css"
import SocialComponent from "./SocialComponent";

function AppBottomComponent() {
    return (
        <div className="bottom-container">
            <p className="no-margin">{data.copyrights}</p>
            <div className="bottom-social-buttons">
                <SocialComponent className="bottom-social-button" url={data.social.linkedin}
                                 icon="fa-brands fa-linkedin-in"/>
                <SocialComponent className="bottom-social-button" url={data.social.facebook}
                                 icon="fa-brands fa-facebook-f"/>
                <SocialComponent className="bottom-social-button" url={data.social.github}
                                 icon="fa-brands fa-github"/>
                <SocialComponent className="bottom-social-button" url={data.social.gmail}
                                 icon="fab fa-google"/>
                <SocialComponent className="bottom-social-button" url={data.social.whatsapp}
                                 icon="fa-brands fa-whatsapp"/>
            </div>
        </div>
    );
}

export default AppBottomComponent;