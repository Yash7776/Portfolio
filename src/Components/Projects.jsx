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
                        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="E-Commerce Platform"/>
                    </div>
                    <div class="project-info">
                        <h3>E-Commerce Platform</h3>
                        <p>A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.</p>
                        <div class="project-tech">
                            <span class="tech">React</span>
                            <span class="tech">Node.js</span>
                            <span class="tech">MongoDB</span>
                            <span class="tech">Stripe API</span>
                        </div>
                        <div class="project-links">
                            <a href="#"><i class="fab fa-github"></i> Code</a>
                            <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        </div>
                    </div>
                </div>
                
                
                <div class="project-card">
                    <div class="project-img">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Task Management App"/>
                    </div>
                    <div class="project-info">
                        <h3>Task Management App</h3>
                        <p>A productivity application for managing tasks, projects, and deadlines with real-time updates and team collaboration features.</p>
                        <div class="project-tech">
                            <span class="tech">Vue.js</span>
                            <span class="tech">Firebase</span>
                            <span class="tech">CSS3</span>
                            <span class="tech">PWA</span>
                        </div>
                        <div class="project-links">
                            <a href="#"><i class="fab fa-github"></i> Code</a>
                            <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        </div>
                    </div>
                </div>
                
                
                <div class="project-card">
                    <div class="project-img">
                        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Weather Dashboard"/>
                    </div>
                    <div class="project-info">
                        <h3>Weather Dashboard</h3>
                        <p>A responsive weather application that displays current conditions and forecasts using data from a weather API.</p>
                        <div class="project-tech">
                            <span class="tech">JavaScript</span>
                            <span class="tech">API Integration</span>
                            <span class="tech">Bootstrap</span>
                            <span class="tech">Chart.js</span>
                        </div>
                        <div class="project-links">
                            <a href="#"><i class="fab fa-github"></i> Code</a>
                            <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
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
