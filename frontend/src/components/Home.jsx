import React, { useEffect, useRef } from 'react'
import "../index.css"
import profile from "../assets/profile.png"
import angular from "../assets/angular-img.png"
import python from "../assets/python-img.png"
import DB from "../assets/mongodb-img.png"
import react from "../assets/react-img.png"
import node from "../assets/node-img.png"
import html from "../assets/html-img.png"
import css from "../assets/css-img.png"
import js from "../assets/js-img.png"
import skills from "../assets/skills.png"
import BlogImage from "../assets/blog-img.png"
import pattern from "../assets/dots-pattern.png"
import weatherapp from "../assets/weatherapp-img.png"
import netflixapp from "../assets/netflixapp-img.png"
import civicpulse from "../assets/civicpulse-img.png"
import novacart from "../assets/novacart-img.png"
import aws from "../assets/AWS_Academy_Graduate_Certificate_page-0001.jpg"
import mern from "../assets/mohamed-yusuf-mern-stack-certificate_page-0001.jpg"
import uiux from "../assets/ui ux_course_completion_certificate-1.png"
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import GalaxyBackground from './GalaxyBackground'
import Stats from './Stats'
import Contact from './Contact'
import Footer from './common/Footer'

function Home() {
    const navigate = useNavigate()
    const trackRef = useRef();

    useEffect(() => {
        const width = trackRef.current.scrollWidth / 2;
        trackRef.current.style.setProperty("--move", `-${width}px`);
    }, []);
    const certi = [
        {
            img: uiux,
            name: "UX and UI",
        },
        {
            img: mern,
            name: "MERN FULL STACK DEVELOPMENT"
        },
        {
            img: aws,
            name: "AWS Fundamentals"
        },
        {
            img: uiux,
            name: "UX and UI",
        },
        {
            img: mern,
            name: "MERN FULL STACK DEVELOPMENT"
        },
        {
            img: aws,
            name: "AWS Fundamentals"
        }
    ];

    const projectcards = [
        {
            img: civicpulse,
            title: "Civic Pulse",
            desc: "Civic Pulse is a community-focused platform designed to connect citizens with local issues, public updates, and civic engagement opportunities. It enables users to stay informed, report concerns, and participate in building smarter, more responsive communities.",
            gitlink: "https://github.com/mohamedyusuf787/Civic-Pulse",
            projectlink: "https://civic-pulse-seven.vercel.app/",
        },
        {
            img: novacart,
            title: "NovaCart",
            desc: "NovaCart is a modern e-commerce platform built to deliver a fast, seamless, and user-friendly online shopping experience. It features smart product browsing, secure checkout, and responsive design to help users shop efficiently across all devices.",
            gitlink: "https://github.com/mohamedyusuf787/E-Comm-Project",
            projectlink: "https://e-comm-project-lac.vercel.app/",
        },
        {
            img: netflixapp,
            title: "Netflix login",
            desc: "A pixel-perfect Netflix login page clone focused on UI accuracy, responsiveness, and form validation. Tech Stack:React, Node.js, Express, MongoDB, JWT",
            gitlink: "https://github.com/mohamedyusuf787/netflix-login-signup",
            projectlink: "https://netflix-plum-five.vercel.app/",
        },
        {
            img: weatherapp,
            title: "Weather App",
            desc: "A weather application that fetches live data using APIs to display current conditions, temperature, and forecasts based on user location. Tech Stack:React, Node.js, Express, MongoDB, JWT",
            gitlink: "https://github.com/mohamedyusuf787/Weather-Report",
            projectlink: "https://weather-report-eight-pi.vercel.app/",
        }
    ]
    const handleScroll = () => {
        const section = document.querySelector('#contactme');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (
        <div>
            <div className="relative h-screen overflow-hidden bg-black">

                <GalaxyBackground />

                <div className="absolute inset-0 bg-black/60 z-[1]" />

                <div className="hero-content relative z-10 flex flex-col text-center items-center justify-between h-full p-8 md:px-20 lg:flex-row lg:text-left">
                    <div>
                        <h4 className="text-yellow-500 text-sm font-medium md:text-xl md:font-bold">Hey there!, I'm Mohamed Yusuf</h4>
                        <h1 className="text-white text-3xl md:text-6xl font-bold mt-2">
                            MERN Stack Developer
                        </h1>
                        <p className="text-gray-400 mt-1 max-w-xl">
                            MERN Stack Developer crafting scalable, user-focused web applications.
                        </p>
                        <div className="cta-btns flex flex-col gap-2 justify-center items-center md:flex-row lg:justify-start">
                            <button onClick={handleScroll} className='button-style mt-2'>Contact Me</button>
                            <a target='blank' href="https://drive.google.com/file/d/1qDwEDVKmnlqK5YoIoxHMfFwAQES3rY7w/view?usp=sharing"><button className='button-secondary mt-2'>Resume</button></a>
                        </div>
                    </div>
                    <img src={profile} alt="profile-img" className='profile w-[60%] m-8 md:w-[20%]' />
                </div>

            </div>

            {/* <div className='justify-center hidden sm:block'>
                    <img src={BlogProfileImage} className='w-60 md:w-96 ' alt="Blog Profile Image" />
                </div> */}

            {/* cards */}

            <Stats />



            {/* my stacks */}
            <div className="stack-section m-2 flex flex-col gap-16 px-4 md:flex-row ">

                {/* Left section... */}
                <div className="flex flex-col items-center md:items-start md:w-1/3 md:sticky top-52 h-fit">
                    <h1 className="text-white text-4xl font-bold  anton-reg text-nowrap">My Stack</h1>
                    <p className="text-gray-400 mt-4 text-center md:text-left">
                        A modern stack focused on performance, scalability, and maintainability
                    </p>
                    <button onClick={handleScroll} className="button-style mt-2">Contact now</button>
                </div>

                {/* right scrolling... */}
                <div className="md:w-2/3 grid grid-cols-2 gap-10">
                    <img src={html} className="w-full" alt='html' />
                    <img src={css} className="w-full" alt='css' />
                    <img src={js} className="w-full" alt='js' />
                    <img src={react} className="w-full" alt='react' />
                    <img src={DB} className="w-full" alt='bd' />
                    <img src={node} className="w-full" alt='node' />
                    <img src={python} className="w-full" alt='python' />
                    <img src={angular} className="w-full" alt='angular' />
                </div>

            </div>

            <img src={skills} alt="Skills" className="mx-10 w-[50%] mt-4" />

            {/* certificates */}
            <section>
                <h1 className="text-white text-4xl font-bold  anton-reg p-10 mt-10 text-nowrap text-center">Certificates</h1>

                <div className="scroll-wrapper">
                    <div ref={trackRef} className="scroll-track animate-[scroll_8s_linear_infinite] md:animate-[scroll_15s_linear_infinite]">
                        {
                            certi.map((certificate) => {
                                return (
                                    <div className="certificate flex-shrink-0">
                                        <img src={certificate.img} className='certificate-img w-80 h-[85%] md:w-[300px] md:h-[85%] lg:w-[300px] lg:h-[85%] rounded-md ' alt={certificate.name} />
                                        <p className='text-white text-center font-bold pt-2'>{certificate.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>


            {/* projects sectino */}
            <div className="project-section flex flex-col items-center mt-10 bg-white ">
                <h1 className="text-black text-4xl font-bold  anton-reg p-10 text-nowrap md:text-center">My Projects</h1>

                <div className="project-cards px-2 pb-10 flex flex-col md:flex-row md:justify-evenly  flex-wrap gap-4">
                    {
                        projectcards.map((project) => {
                            return (
                                <div className="card-1 bg-black rounded-md w-full md:w-[40%] p-4">
                                    <img src={project.img} alt="project1" />
                                    <h2 className="text-white font-bold">{project.title}</h2>
                                    <p className="text-white text-sm">{project.desc}</p>
                                    <div className="project-card_btns flex gap-2 justify-between items-center mt-2">
                                        <a href={project.gitlink} target='blank'>    <button className="button-secondary">Git repository</button></a>
                                        <div className="arrowIcon w-fit bg-yellow-400 rounded-full p-2 hover:-rotate-[40deg] ease-out duration-300 cursor-pointer"  >
                                            <a href={project.projectlink} target='blank'>  <FaArrowRight className=" text-black text-xl" /></a>
                                        </div>
                                    </div>
                                </div>)
                        })
                    }
                </div>
            </div>

            {/* blog section */}
            <section className='blog-section relative flex flex-col-reverse text-center justify-between items-center mx-0  py-8 md:flex-row md:mx-10 md:px-10 md:text-left overflow-hidden'>
                <div className="blog-sec_left flex flex-col items-center gap-2 md:items-start z-10">
                    <h1 className='anton-reg font-bold text-3xl text-white'>Insights & Articles</h1>
                    <p className='text-gray-500'>Sharing my learnings in web development, UI/UX, and modern technologies.</p>
                    <button onClick={() => navigate('/blogs')} className='button-style text-white'>
                        Read my Blogs</button>
                    {/* <button onSubmit="/blogs" className='button-style text-white hover:cursor-pointer'>blogs</button> */}
                    {/* <Link to="/blogs" className='button-style hover:cursor-pointer text-white'>Read my Blogs bro</Link> */}
                </div>
                <div className="blog-sec_right flex justify-center items-center">
                    <img src={BlogImage} alt="blog" className='w-[50%]' />
                </div>
                <img src={pattern} alt="pattern" className='absolute bottom-40 -left-40 md:-bottom-32 md:-left-10 w-80' />
            </section>


            {/* contactus section */}
            <Contact />

            {/* footer section */}
            <Footer />

        </div>
    )
}

export default Home