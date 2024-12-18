import React, {useRef, useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
    const location = useLocation();

    // Section refs
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const resumeRef = useRef(null);
    const projectsRef = useRef(null);

    // State to track active section
    const [activeTab, setActiveTab] = useState('home');

    // Scroll to a specific section
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    };

    // Set active tab based on URL
    useEffect(() => {
        switch (location.hash) {
            case '#home':
                scrollToSection(homeRef);
                break;
            case '#about':
                scrollToSection(aboutRef);
                break;
            case '#resume':
                scrollToSection(resumeRef);
                break;
            case '#projects':
                scrollToSection(projectsRef);
                break;
            default:
                break;
        }
    }, [location]);

    // Highlight active tab when scrolling
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            const homeTop = homeRef.current.offsetTop;
            const aboutTop = aboutRef.current.offsetTop;
            const resumeTop = resumeRef.current.offsetTop;
            const projectsTop = projectsRef.current.offsetTop;

            if (scrollPosition >= projectsTop - 50) {
                setActiveTab('projects');
            } else if (scrollPosition >= resumeTop - 50) {
                setActiveTab('resume');
            } else if (scrollPosition >= aboutTop - 50) {
                setActiveTab('about');
            } else {
                setActiveTab('home');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="App">
            <div className="tabs">
                <Link
                    to="#home"
                    className={activeTab === 'home' ? 'active' : ''}
                    onClick={() => scrollToSection(homeRef)}
                >
                    Home
                </Link>
                <Link
                    to="#about"
                    className={activeTab === 'about' ? 'active' : ''}
                    onClick={() => scrollToSection(aboutRef)}
                >
                    About
                </Link>
                <Link
                    to="#resume"
                    className={activeTab === 'resume' ? 'active' : ''}
                    onClick={() => scrollToSection(resumeRef)}
                >
                    Resume
                </Link>
                <Link
                    to="#projects"
                    className={activeTab === 'projects' ? 'active' : ''}
                    onClick={() => scrollToSection(projectsRef)}
                >
                    Projects
                </Link>
                <button className="text-button" onClick={() => alert("Button clicked!")}>
                    Contact
                </button>
            </div>

            <div className="sections">
                <div ref={homeRef} id="home" className="section">
                    <Home/>
                </div>

                <div ref={aboutRef} id="about" className="section">
                    <About/>
                </div>

                <div ref={resumeRef} id="resume" className="section">
                    <Resume/>
                </div>

                <div ref={projectsRef} id="projects" className="section">
                    <Projects/>
                </div>
            </div>
        </div>
    );
}

export default App;
