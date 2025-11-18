import React from "react";

const Education = () => {
  return (
    <div>

      <section className="section" id="qualification">
        <div className="container">

          <h2 className="section-title">Qualification</h2>

          {/* ===== 3 Columns Wrapper ===== */}
          <div className="three-col-wrapper">

            {/* ================================================ */}
            {/* =============== EDUCATION COLUMN ================ */}
            {/* ================================================ */}

            <div className="col-box">
              <h3 className="col-title">Education</h3>

              <div className="education-timeline">
                
                <div className="education-item">
                  <div className="education-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="education-content">
                    <h3>Bachelor of Science in Computer Science</h3>
                    <div className="education-date">2018 - 2022</div>
                    <p>University of Technology, Cityville</p>
                    <p>
                      Graduated with Honors. Relevant coursework: Data
                      Structures, Algorithms, Web Development, Database
                      Systems, Software Engineering.
                    </p>
                  </div>
                </div>

                <div className="education-item">
                  <div className="education-icon">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div className="education-content">
                    <h3>Full Stack Web Development Bootcamp</h3>
                    <div className="education-date">2021</div>
                    <p>CodeCamp Academy</p>
                    <p>
                      Intensive 6-month training on React, Node.js, MongoDB.
                    </p>
                  </div>
                </div>

                <div className="education-item">
                  <div className="education-icon">
                    <i className="fas fa-award"></i>
                  </div>
                  <div className="education-content">
                    <h3>High School Diploma</h3>
                    <div className="education-date">2014 - 2018</div>
                    <p>Central High School, Townsville</p>
                    <p>
                      Distinction in Mathematics & Computer Science. Active in
                      tech clubs and competitions.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* ================================================ */}
            {/* =============== EXPERIENCE COLUMN =============== */}
            {/* ================================================ */}

            <div className="col-box">
              <h3 className="col-title">Experience</h3>

              <div className="education-timeline">

                <div className="education-item">
                  <div className="education-icon">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <div className="education-content">
                    <h3>Frontend Developer</h3>
                    <div className="education-date">2022 - Present</div>
                    <p>Tech Solutions Pvt. Ltd.</p>
                    <p>
                      Developed dashboards, React components, authentication,
                      and API integrations.
                    </p>
                  </div>
                </div>

                <div className="education-item">
                  <div className="education-icon">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <div className="education-content">
                    <h3>Web Developer Intern</h3>
                    <div className="education-date">2021</div>
                    <p>Innovate Labs</p>
                    <p>
                      Assisted in UI development, web enhancements, and testing.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Education;
