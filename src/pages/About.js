import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import './About.css';
import SeekBarComponent from "../components/SeekBarComponent";
import {data} from "../data";

const About = forwardRef((props, ref) => {

    const sliderRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const onScrollingIn = () => {
        sliderRefs.forEach(ref => {
            if (ref.current) {
                ref.current.start();
            }
        });
    };

    useImperativeHandle(ref, () => ({
        onScrollingIn,
    }));

    return (
        <div className="about">
            <div className="about-split-container">
                <div>
                    <div className="image-div" style={{backgroundImage: "url('/yakir_uzan.jpg')"}}></div>
                </div>
                <div className="slider-section">
                    <h1>About Me</h1>
                    <p>{data.about.description}</p>
                    {data.about.sliderData.map((item, index) => (
                        <SeekBarComponent key={index} ref={sliderRefs[index]} name={item.name} value={item.value}/>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default About;