import React, {useRef, useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Projects from "./pages/Projects";
import AppBottomComponent from "./components/AppBottomComponent";
import { useMediaQuery } from 'react-responsive';

function App() {
    const location = useLocation();

    // Section refs
    const homeSectionRef = useRef(null);
    const aboutSectionRef = useRef(null);
    const aboutRef = useRef(null);
    const resumeSectionRef = useRef(null);
    const projectsSectionRef = useRef(null);
    const projectsRef = useRef(null);

    // State to track active section
    const [activeTab, setActiveTab] = useState('home');
    const previousTabRef = useRef('home');

    const isMobile = useMediaQuery({ maxWidth: 768 });

    // Scroll to a specific section
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    };

    // Set active tab based on URL
    useEffect(() => {
        switch (location.hash) {
            case '#home':
                scrollToSection(homeSectionRef);
                break;
            case '#about':
                scrollToSection(aboutSectionRef);
                break;
            case '#resume':
                scrollToSection(resumeSectionRef);
                break;
            case '#projects':
                scrollToSection(projectsSectionRef);
                break;
            default:
                break;
        }
    }, [location]);

    // Highlight active tab when scrolling
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            const projectsTop = projectsSectionRef.current.offsetTop;
            const resumeTop = resumeSectionRef.current.offsetTop;
            const aboutTop = aboutSectionRef.current.offsetTop;

            if (scrollPosition >= projectsTop - 50) {
                if (activeTab !== 'projects') {
                    setActiveTab('projects');
                }
            } else if (scrollPosition >= resumeTop - 50) {
                if (activeTab !== 'resume') {
                    setActiveTab('resume');
                }
            } else if (scrollPosition >= aboutTop - 50) {
                if (activeTab !== 'about') {
                    setActiveTab('about');
                }
            } else {
                if (activeTab !== 'home') {
                    setActiveTab('home');
                }
            }

            if (activeTab !== previousTabRef.current) {
                if (activeTab === 'about') {
                    aboutRef.current.onScrollingIn();
                } else if (activeTab === 'projects') {
                    projectsRef.current.onScrollingIn();
                }
                if (previousTabRef.current === 'projects') {
                    projectsRef.current.onScrollingOut();
                }
                previousTabRef.current = activeTab;
            }

            if (!isMobile) {
                const sections = document.querySelector('.app-background');
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                const stretch = 40 + (scrollPosition / maxScroll) * 40;
                sections.style.backgroundPosition = `center ${stretch}%`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeTab, isMobile]);

    return (
        <div className="App">
            <div className="app-background"></div>
            <div className="tabs">
                <Link
                    to="#home"
                    className={activeTab === 'home' ? 'active' : ''}
                    onClick={() => scrollToSection(homeSectionRef)}
                >
                    Home
                </Link>
                <Link
                    to="#about"
                    className={activeTab === 'about' ? 'active' : ''}
                    onClick={() => scrollToSection(aboutSectionRef)}
                >
                    About
                </Link>
                <Link
                    to="#resume"
                    className={activeTab === 'resume' ? 'active' : ''}
                    onClick={() => scrollToSection(resumeSectionRef)}
                >
                    Resume
                </Link>
                <Link
                    to="#projects"
                    className={activeTab === 'projects' ? 'active' : ''}
                    onClick={() => scrollToSection(projectsSectionRef)}
                >
                    Projects
                </Link>
            </div>

            <div className="sections">
                <div ref={homeSectionRef} id="home" className="section">
                    <Home/>
                </div>

                <div ref={aboutSectionRef} id="about" className="section">
                    <About ref={aboutRef}/>
                </div>

                <div ref={resumeSectionRef} id="resume" className="section">
                    <Resume/>
                </div>

                <div ref={projectsSectionRef} id="projects" className="section">
                    <Projects ref={projectsRef}/>
                </div>
            </div>

            <AppBottomComponent />
        </div>
    );
}

export default App;
