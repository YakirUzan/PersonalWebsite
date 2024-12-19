import React, {forwardRef, useImperativeHandle} from 'react';
import './Home.css';

const Home = forwardRef((props, ref) => {
    const openLink = (url) => {
        window.open(url, "_blank");
    };

    useImperativeHandle(ref, () => ({
        openLink,
    }));

    return (
        <div className="home">
            <div className="split-container">
                <div className="text-section">
                    <div>
                        <h1 className="sour-gummy no-margin">Hi👋 I'm Yakir Uzan</h1>
                        <h1 className="sour-gummy no-margin app-color-text">Software Developer</h1>
                        <p>Fast learning, Hard working with great interpersonal skills.</p>
                        <h3>Where can you find me:</h3>
                        <div className="social-buttons">
                            <button
                                className="social-button facebook"
                                onClick={() => openLink("https://www.facebook.com/yakir.uzan.9/")}
                            >
                                <i className="fa-brands fa-facebook"></i>
                            </button>

                            <button
                                className="social-button linkedin"
                                onClick={() => openLink("https://www.linkedin.com/in/yakir-uzan/")}
                            >
                                <i className="fab fa-linkedin"></i>
                            </button>

                            <button
                                className="social-button gmail"
                                onClick={() => openLink("mailto:uzan.yakir@gmail.com")}
                            >
                                <i className="fab fa-google"></i>
                            </button>

                            <button
                                className="social-button whatsapp"
                                onClick={() => openLink("https://api.whatsapp.com/send?phone=+972544850933&text=Hi%20Yakir%20%F0%9F%98%8A")}
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
});

export default Home;