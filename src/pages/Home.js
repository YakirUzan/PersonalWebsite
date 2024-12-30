import React from 'react';
import './Home.css';
import {data} from "../data";
import SocialComponent from "../components/SocialComponent";

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
                            <SocialComponent className="social-button linkedin" url={data.social.linkedin}
                                             icon="fab fa-linkedin"/>
                            <SocialComponent className="social-button facebook" url={data.social.facebook}
                                             icon="fa-brands fa-facebook"/>
                            <SocialComponent className="social-button github" url={data.social.github}
                                             icon="fa-brands fa-github"/>
                            <SocialComponent className="social-button gmail" url={data.social.gmail}
                                             icon="fab fa-google"/>
                            <SocialComponent className="social-button whatsapp" url={data.social.whatsapp}
                                             icon="fa-brands fa-whatsapp"/>
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