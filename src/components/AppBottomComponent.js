import {openLink} from "../utils";
import {data} from "../data";
import React from "react";
import "./AppBottomComponent.css"
import SkillComponent from "./SkillComponent";

function AppBottomComponent() {
    return (
        <div className="bottom-container">
            <p className="no-margin">{data.copyrights}</p>
            <div className="bottom-social-buttons">
                <button
                    className="bottom-social-button"
                    onClick={() => openLink(data.social.facebook)}
                >
                    <i className="fa-brands fa-facebook-f"></i>
                </button>

                <button
                    className="bottom-social-button"
                    onClick={() => openLink(data.social.linkedin)}
                >
                    <i className="fa-brands fa-linkedin-in"></i>
                </button>

                <button
                    className="bottom-social-button"
                    onClick={() => openLink(data.social.gmail)}
                >
                    <i className="fab fa-google"></i>
                </button>

                <button
                    className="bottom-social-button"
                    onClick={() => openLink(data.social.whatsapp)}
                >
                    <i className="fa-brands fa-whatsapp"></i>
                </button>
            </div>
        </div>
    );
}

export default AppBottomComponent;