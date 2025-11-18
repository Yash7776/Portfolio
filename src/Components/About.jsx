import React from 'react'

const About = () => {
  return (
    <div>
       <section class="section" id="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-img">
                    <img src="/profilecover.jpg" alt="Yash Pathak Developer"/>
                </div>
                <div class="about-text">
                    <h3>Hello! I'm Yash Pathak, a passionate Software Developer</h3>
                    <p>With one year of professional experience, I specialize in creating responsive web applications using modern technologies. I'm dedicated to writing clean, efficient code and solving complex problems.</p>
                    <p>My journey in software development started during my computer science studies, and I've been continuously learning and growing ever since. I enjoy collaborating with teams to build products that make a difference.</p>
                    <div class="skills">
                        <span class="skill">JavaScript</span>
                        <span class="skill">React</span>
                        <span class="skill">Node.js</span>
                        <span class="skill">Python</span>
                        <span class="skill">HTML/CSS</span>
                        <span class="skill">MongoDB</span>
                        <span class="skill">Git</span>
                        <span class="skill">Responsive Design</span>
                        <span class="skill">UI/UX Design</span>
                        <span class="skill">REST APIs</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
