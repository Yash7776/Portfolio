import React, { useEffect } from 'react'
import Eduction from './Eduction'
import { initGlobalScripts } from "../globalScript";
const Home = () => {
      
  useEffect(() => {
    initGlobalScripts();
  }, []);
  return (
    <div>
      <section className="hero" id="home">
        <div className="floating-elements"></div>

        <div className="container">

          <div className="hero-wrapper">
            {/* ===== RIGHT SIDE: PROFILE PHOTO ===== */}
            <div className="hero-image">
              <img 
                src="/profile.png"
                alt="Profile"
              />
            </div>

            {/* ===== LEFT SIDE: TEXT ===== */}
            <div className="hero-content">
              <h1>Yash Pathak</h1>
              <p>
                Creative Software Developer with 1+ year of experience building
                innovative web solutions with modern technologies.
              </p>

              <div className="hero-btns">
                <a href="/projects" className="btn">View My Work</a>
                <a href="/contact" className="btn btn-outline">Get In Touch</a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Home
