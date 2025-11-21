import React from 'react'

const Projects = () => {
  return (
    <div>
       <section class="section" id="projects">
        <div class="container">
            <h2 class="section-title">My Projects</h2>
            <div class="projects-grid">
                
                <div class="project-card">
                    <div class="project-img">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Integrated Platform"/>
                    </div>
                    <div class="project-info">
                        <h3>Integrated Platform</h3>
                        <p>A centralized platform for multiple departments (e.g., Cisco, MSRDC) that manages projects and packages, assigns them to contractors, and provides real-time progress tracking with interactive map-based visualization for better monitoring and decision-making.</p>
                        <div class="project-tech">
                            <span class="tech">User Management</span>
                            <span class="tech">IP Camera Monitoring</span>
                        </div>
                        <div class="project-links">
                            <a href="http://integratedplatform.staffhandler.com" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        </div>
                    </div>
                </div>
                
                
                <div class="project-card">
                    <div class="project-img">
                        <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Notebook App"/>
                    </div>
                    <div class="project-info">
                        <h3>Notebook App</h3>
                        <p>A full-stack note-taking application with secure user authentication, CRUD operations with file attachments, and vendor-controlled notes. Built with Material UI for enhanced usability and user experience.</p>
                        <div class="project-tech">
                            <span class="tech">React.js</span>
                            <span class="tech">Material UI</span>
                            <span class="tech">Django</span>
                            <span class="tech">PostgreSQL</span>
                            <span class="tech">SaaS</span>
                        </div>
                        <div class="project-links">
                            <a href="https://i-notebook-xi-sooty.vercel.app/login" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        </div>
                    </div>
                </div>
                
                
                <div class="project-card">
                    <div class="project-img">
                        <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Job Portal"/>
                    </div>
                    <div class="project-info">
                        <h3>Job Portal</h3>
                        <p>A comprehensive job portal enabling employers to post job openings and review applications. Recruiters can source, track, and onboard candidates with customizable questions and filters for efficient shortlisting.</p>
                        <div class="project-tech">
                            <span class="tech">HTML</span>
                            <span class="tech">CSS</span>
                            <span class="tech">JavaScript</span>
                            <span class="tech">Bootstrap</span>
                            <span class="tech">Django</span>
                            <span class="tech">MySQL</span>
                        </div>
                        <div class="project-links">
                            <a href="#"><i class="fab fa-github"></i> Code</a>
                        </div>
                    </div>
                </div>
                
                
                <div class="project-card">
                    <div class="project-img">
                        <img src="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Weather App"/>
                    </div>
                    <div class="project-info">
                        <h3>Weather App</h3>
                        <p>Developed a Weather App using React JS and Rapid API to fetch real-time global weather data, displaying temperature, conditions, humidity, and "feels like" temperature through a clean, user-friendly interface.</p>
                        <div class="project-tech">
                            <span class="tech">React JS</span>
                            <span class="tech">Rest APIs</span>
                            <span class="tech">Rapid API</span>
                        </div>
                        <div class="project-links">
                            <a href="#"><i class="fab fa-github"></i> Code</a>
                        </div>
                    </div>
                </div>
                
                
                <div class="project-card">
                    <div class="project-img">
                        <img src="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Myntra Clone"/>
                    </div>
                    <div class="project-info">
                        <h3>Myntra Clone</h3>
                        <p>Designed a responsive e-commerce UI replicating a popular platform's look and feel, with modern UI/UX practices for smooth, device-friendly navigation.</p>
                        <div class="project-tech">
                            <span class="tech">HTML</span>
                            <span class="tech">CSS</span>
                            <span class="tech">Tailwind</span>
                        </div>
                        <div class="project-links">
                            <a href="https://github.com/Yash7776/Myntra" target="_blank"><i class="fab fa-github"></i> Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Projects
