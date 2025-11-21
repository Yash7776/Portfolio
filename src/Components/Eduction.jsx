import React from "react";

const Education = () => {
  return (
    <div>

      {/* ================================================ */}
      {/* =============== EDUCATION SECTION =============== */}
      {/* ================================================ */}
      <section className="section" id="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          
          <div className="education-timeline">
            
            <div className="education-item">
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="education-content">
                <h3>Master of Computer Applications</h3>
                <div className="education-date">2022 - 2024</div>
                <p>Institute Of Management And Research</p>
              </div>
            </div>

            <div className="education-item">
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="education-content">
                <h3>Bachelor of Computer Applications</h3>
                <div className="education-date">2019 - 2022</div>
                <p>North Maharashtra University, Jalgaon</p>
              </div>
            </div>

            <div className="education-item">
              <div className="education-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <div className="education-content">
                <h3>Higher Secondary Certificate</h3>
                <div className="education-date">2018 - 2019</div>
                <p>N.Y.N.C. Rashtriya College, Chalisgaon</p>
              </div>
            </div>

            <div className="education-item">
              <div className="education-icon">
                <i className="fas fa-school"></i>
              </div>
              <div className="education-content">
                <h3>Secondary School Certificate</h3>
                <div className="education-date">2016 - 2017</div>
                <p>Madhyamik Vidyalay, Talegaon</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================ */}
      {/* ============= CERTIFICATIONS SECTION ============ */}
      {/* ================================================ */}
      <section className="section" id="certifications" style={{ paddingTop: '60px' }}>
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          
          <div className="education-timeline">
            
            <div className="education-item">
              <div className="education-icon">
                <i className="fas fa-award"></i>
              </div>
              <div className="education-content">
                <h3>Python Django - Full Stack Development</h3>
                <div className="education-date">April 5, 2023</div>
                <p>Learn Vern</p>
                <p>
                  Successfully Completed Full Stack Python Django: With CRUD Operation Course
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================ */}
      {/* =============== EXPERIENCE SECTION ============== */}
      {/* ================================================ */}
      <section className="section" id="experience" style={{ paddingTop: '60px' }}>
        <div className="container">
          <h2 className="section-title">Experience (10+ Months)</h2>
          
          <div className="education-timeline">

            <div className="education-item">
              <div className="education-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="education-content">
                <h3>Full Stack Developer</h3>
                <div className="education-date">May 2025 - Present</div>
                <p>Monarch Tech Solutions & Systems</p>
                <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                  <li>Implemented user management, jurisdiction mapping, and project assignment features for enterprise clients (Cisco, MSRDC).</li>
                  <li>Built real-time project tracking dashboards with interactive maps for monitoring progress.</li>
                  <li>Integrated SMS/WhatsApp notifications for user activities, improving communication efficiency by 30%.</li>
                </ul>
              </div>
            </div>

            <div className="education-item">
              <div className="education-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="education-content">
                <h3>Django Developer</h3>
                <div className="education-date">Nov 2024 - Apr 2025</div>
                <p>Trakky Services</p>
                <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                  <li>Responsible for creating and maintaining web applications using the Django framework and Python code.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Education;
