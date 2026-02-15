import React from "react";
import "../index.css";
import Contact from "./Contact";
import Footer from "./common/Footer";

const About = () => {
  return (
    <section className="bg-dark px-6 md:px-16 pt-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-gold mb-4">
            About Me
          </h1>
          <p className="text-gray-400 max-w-2xl">
            A brief look into who I am, what I do, and how I build digital experiences.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-14">

          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">
              I’m a <span className="text-gold font-medium">MERN Stack Developer</span> with a strong
              foundation in UI/UX design, focused on building modern, scalable, and user-friendly
              web applications.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I enjoy working on real-world projects where performance, clean code, and user
              experience matter. My background in design helps me bridge the gap between
              functionality and aesthetics.
            </p>

            <p className="text-gray-400 leading-relaxed">
              From idea to deployment, I focus on writing maintainable code, building responsive
              interfaces, and delivering meaningful digital solutions.
            </p>
          </div>

          {/* Right Content */}
          <div className="space-y-8">

            {/* What I Do */}
            <div>
              <h3 className="text-white text-xl font-semibold text-gold mb-3">
                What I Do
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Build full-stack web applications</li>
                <li>• Create responsive and accessible UIs</li>
                <li>• Design clean and intuitive user experiences</li>
                <li>• Integrate APIs and backend services</li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-white text-xl font-semibold text-gold mb-3">
                Tech Stack
              </h3>
              <p className="text-gray-400">
                React, Node.js, Express, MongoDB, JavaScript, Tailwind CSS,
                REST APIs, Git & GitHub
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CTA */}
            <div>
              <p className="text-gray-300 mb-4">
                Looking to collaborate or hire?
              </p>
              <Contact/>
            </div>
      <Footer />
    </section>
  );
};

export default About;
