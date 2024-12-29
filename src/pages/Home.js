import React from 'react';
import './Home.css';
import {openLink} from "../utils/utils";
import {data} from "../data";

function Home() {
    return (
        <div className="home">
            <div className="split-container">
                <div className="text-section">
                    <div>
                        <h1 className="sour-gummy no-margin">{data.home.title}</h1>
                        <h1 className="sour-gummy no-margin app-color-text">{data.home.subtitle}</h1>
                        <p>{data.home.description}</p>
                        <h3>{data.home.social_title}</h3>
                        <div className="social-buttons">
                            <button
                                className="social-button facebook"
                                onClick={() => openLink(data.social.facebook)}
                            >
                                <i className="fa-brands fa-facebook"></i>
                            </button>

                            <button
                                className="social-button linkedin"
                                onClick={() => openLink(data.social.linkedin)}
                            >
                                <i className="fab fa-linkedin"></i>
                            </button>

                            <button
                                className="social-button gmail"
                                onClick={() => openLink(data.social.gmail)}
                            >
                                <i className="fab fa-google"></i>
                            </button>

                            <button
                                className="social-button whatsapp"
                                onClick={() => openLink(data.social.whatsapp)}
                            >
                                <i className="fa-brands fa-whatsapp"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="image-section">
                    <div className="image-div"></div>
                </div>
            </div>
        </div>
    )
}

export default Home;