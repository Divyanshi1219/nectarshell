import React, { useState } from "react";
import "./Careers.css";
import aboutApproach from "../assets/about-approach.jpg";
import aboutVision from "../assets/about-vision.jpg";

const Careers = () => {
  // ================================
  // ACTIVE JOB CATEGORY
  // ================================

  const [activeCategory, setActiveCategory] = useState("All");

  // ================================
  // JOB POSITIONS
  // ================================

  const openPositions = [
    {
      title: "Software Developer",
      description:
        "Build scalable digital solutions and contribute to products used by growing businesses.",
      department: "Technology",
      category: "Technology",
      location: "Remote / India",
      type: "Full Time",
    },

    {
      title: "Business Analyst",
      description:
        "Bridge business needs with technology-driven solutions.",
      department: "Accounts",
      category: "Accounts",
      location: "Gurugram, India",
      type: "Full Time",
    },

    {
      title: "UI/UX Designer",
      description:
        "Create intuitive digital experiences across our products and platforms.",
      department: "IT",
      category: "IT",
      location: "Remote / India",
      type: "Full Time",
    },

    {
      title: "Project Manager",
      description:
        "Lead cross-functional teams and deliver impactful solutions for our clients.",
      department: "Operations",
      category: "Operations",
      location: "Gurugram, India",
      type: "Full Time",
    },
  ];

  // ================================
  // FILTER JOBS
  // ================================

  const filteredJobs =
    activeCategory === "All"
      ? openPositions
      : openPositions.filter(
          (job) => job.category === activeCategory
        );

  return (
    <>
    <main className="careers-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="careers-hero">

        <div className="careers-hero-content">

          {/* LEFT SIDE */}

          <div className="careers-hero-text">

            <div className="careers-eyebrow">
              <span>CAREERS AT NECTARSHELL</span>
              <i></i>
            </div>

            <h1>
              Build What's Next.
              <br />
              Grow With
              <br />
              <span>NectarShell.</span>
            </h1>

            <p>
              We bring technology and financial expertise together
              to create smarter, more scalable solutions for businesses.
              Join a team where your ideas can make a real impact.
            </p>

            <div className="careers-hero-buttons">

              <a
                href="#open-positions"
                className="careers-primary-btn"
              >
                View Open Positions
                <span>→</span>
              </a>

              <a
                href="#resume"
                className="careers-secondary-btn"
              >
                Send Your Resume
              </a>

            </div>

          </div>


          {/* RIGHT SIDE IMAGE */}

          <div className="careers-hero-image">

          <img
  src={aboutVision}
  alt="about vision"
/>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR PURPOSE
      ===================================================== */}

      <section className="careers-purpose section">

        <div className="section-container">

          <div className="purpose-content">

            <div className="purpose-text">

              <div className="section-eyebrow">
                OUR PURPOSE
                <span></span>
              </div>

              <h2>
                More Than a Job.
                <br />
                <span>A Place to Build.</span>
              </h2>

              <p>
                At NectarShell, we believe great solutions are built
                by curious people who aren't afraid to challenge the
                ordinary. We work at the intersection of technology,
                finance and business to solve meaningful problems
                and create lasting value.
              </p>

            </div>


            {/* PURPOSE CARDS */}

            <div className="purpose-pillars">

              <div className="purpose-pillar">

                <div className="pillar-icon">

                  <svg viewBox="0 0 24 24">

                    <path d="M12 3L3 8l9 5 9-5-9-5Z" />

                    <path d="m3 12 9 5 9-5" />

                    <path d="m3 16 9 5 9-5" />

                  </svg>

                </div>

                <h3>Technology</h3>

                <p>
                  Building modern digital solutions
                </p>

              </div>


              <div className="purpose-pillar">

                <div className="pillar-icon">

                  <svg viewBox="0 0 24 24">

                    <path d="M4 19V9" />

                    <path d="M10 19V5" />

                    <path d="M16 19v-8" />

                    <path d="M22 19V3" />

                  </svg>

                </div>

                <h3>Finance</h3>

                <p>
                  Creating smarter financial systems
                </p>

              </div>


              <div className="purpose-pillar">

                <div className="pillar-icon">

                  <svg viewBox="0 0 24 24">

                    <circle
                      cx="12"
                      cy="8"
                      r="3"
                    />

                    <path d="M6 21v-2a6 6 0 0 1 12 0v2" />

                    <path d="M18 11a3 3 0 1 0 0-6" />

                    <path d="M21 21v-2a5 5 0 0 0-3-4.58" />

                  </svg>

                </div>

                <h3>Impact</h3>

                <p>
                  Solving real business challenges
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY NECTARSHELL
      ===================================================== */}

      <section className="careers-values section">

        <div className="section-container">

          <div className="values-heading">

            <div className="section-eyebrow">
              WHY NECTARSHELL
              <span></span>
            </div>

            <h2>
              Why You'll Love
              <br />
              Working Here
            </h2>

            <p>
              We're a team of problem-solvers, builders and thinkers,
              working together to create meaningful solutions for our
              clients and communities.
            </p>

          </div>


          {/* VALUE CARDS */}

          <div className="values-grid">

            <div className="value-card">

              <div className="value-icon">

                <svg viewBox="0 0 24 24">

                  <path d="M12 3c-4 0-7 3-7 7 0 5 7 11 7 11s7-6 7-11c0-4-3-7-7-7Z" />

                  <path d="M9 10c1.5 1 4.5 1 6 0" />

                </svg>

              </div>

              <h3>
                Grow With Purpose
              </h3>

              <p>
                Work on meaningful projects while continuously
                developing your skills.
              </p>

            </div>


            <div className="value-card">

              <div className="value-icon">

                <svg viewBox="0 0 24 24">

                  <path d="M9 18h6" />

                  <path d="M10 22h4" />

                  <path d="M8 14c-1.2-1-2-2.5-2-4.2A6 6 0 0 1 18 10c0 1.7-.8 3.2-2 4.2-.8.7-1 1.3-1 2.8H9c0-1.5-.2-2.1-1-3Z" />

                </svg>

              </div>

              <h3>
                Think & Create
              </h3>

              <p>
                Bring your ideas to the table. We value curiosity,
                creativity and thoughtful problem-solving.
              </p>

            </div>


            <div className="value-card">

              <div className="value-icon">

                <svg viewBox="0 0 24 24">

                  <circle
                    cx="9"
                    cy="8"
                    r="3"
                  />

                  <circle
                    cx="17"
                    cy="9"
                    r="2.5"
                  />

                  <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />

                  <path d="M15 15c3.5-.5 6 1.5 6 5" />

                </svg>

              </div>

              <h3>
                Work Together
              </h3>

              <p>
                Collaborate across technology, finance and
                business teams.
              </p>

            </div>


            <div className="value-card">

              <div className="value-icon">

                <svg viewBox="0 0 24 24">

                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                  />

                  <path d="M12 4V2" />

                  <path d="M20 12h2" />

                  <path d="m17.5 6.5 1.5-1.5" />

                </svg>

              </div>

              <h3>
                Make an Impact
              </h3>

              <p>
                Your work contributes directly to solutions
                that businesses depend on.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CULTURE
      ===================================================== */}

      <section className="careers-culture section">

        <div className="culture-container">

          {/* IMAGE */}

          <div className="culture-image">

          <img
            src={aboutApproach}
            alt="Nectarshell approach"
          />

          </div>


          {/* CONTENT */}

          <div className="culture-content">

            <div className="section-eyebrow">
              OUR CULTURE
              <span></span>
            </div>

            <h2>
              A Culture Built
              <br />
              Around Curiosity
            </h2>

            <p className="culture-intro">
              We believe the best ideas come from people who ask
              questions, challenge assumptions and aren't afraid
              to explore what's possible.
            </p>


            <div className="culture-list">

              <div className="culture-item">

                <span className="culture-number">
                  01
                </span>

                <div>

                  <h3>
                    Stay Curious
                  </h3>

                  <p>
                    Always keep learning.
                  </p>

                </div>

              </div>


              <div className="culture-item">

                <span className="culture-number">
                  02
                </span>

                <div>

                  <h3>
                    Think Beyond
                  </h3>

                  <p>
                    Look beyond the obvious solution.
                  </p>

                </div>

              </div>


              <div className="culture-item">

                <span className="culture-number">
                  03
                </span>

                <div>

                  <h3>
                    Build Together
                  </h3>

                  <p>
                    Great work is rarely built alone.
                  </p>

                </div>

              </div>


              <div className="culture-item">

                <span className="culture-number">
                  04
                </span>

                <div>

                  <h3>
                    Deliver Impact
                  </h3>

                  <p>
                    Ideas matter when they create results.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OPEN POSITIONS
      ===================================================== */}

      <section
        className="careers-jobs section"
        id="open-positions"
      >

        <div className="section-container">

          {/* HEADING */}

          <div className="jobs-heading">

            <div>

              <div className="section-eyebrow">
                OPEN POSITIONS
                <span></span>
              </div>

              <h2>
                Find Your Next Opportunity
              </h2>

              <p>
                Explore opportunities to build, innovate and
                grow with NectarShell.
              </p>

            </div>

          </div>


          {/* =================================================
              WORKING TABS
          ================================================= */}

          <div className="job-filters">

            <button
              className={`job-filter ${
                activeCategory === "All"
                  ? "active"
                  : ""
              }`}
              onClick={() => setActiveCategory("All")}
            >
              All
            </button>


            <button
              className={`job-filter ${
                activeCategory === "IT"
                  ? "active"
                  : ""
              }`}
              onClick={() => setActiveCategory("IT")}
            >
              IT
            </button>


            <button
              className={`job-filter ${
                activeCategory === "Technology"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory("Technology")
              }
            >
              Technology
            </button>


            <button
              className={`job-filter ${
                activeCategory === "Accounts"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory("Accounts")
              }
            >
              Accounts
            </button>


            <button
              className={`job-filter ${
                activeCategory === "Operations"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory("Operations")
              }
            >
              Operations
            </button>

          </div>


          {/* =================================================
              JOB LIST
          ================================================= */}

          <div className="jobs-list">

            {filteredJobs.length > 0 ? (

              filteredJobs.map((job, index) => (

                <div
                  className="job-card"
                  key={index}
                  onClick={() => window.location.href = `mailto:info@nectarshell.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  style={{ cursor: "pointer" }}
                >

                  {/* JOB NAME */}

                  <div className="job-main">

                    <h3>
                      {job.title}
                    </h3>

                    <p>
                      {job.description}
                    </p>

                  </div>


                  {/* JOB INFORMATION */}

                  <div className="job-meta">

                    {/* DEPARTMENT */}

                    <span>

                      <svg viewBox="0 0 24 24">

                        <rect
                          x="3"
                          y="7"
                          width="18"
                          height="14"
                          rx="2"
                        />

                        <path d="M8 7V4h8v3" />

                      </svg>

                      {job.department}

                    </span>


                    {/* LOCATION */}

                    <span>

                      <svg viewBox="0 0 24 24">

                        <path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Z" />

                        <circle
                          cx="12"
                          cy="10"
                          r="2.5"
                        />

                      </svg>

                      {job.location}

                    </span>


                    {/* JOB TYPE */}

                    <span>

                      <svg viewBox="0 0 24 24">

                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                        />

                        <path d="M12 7v5l3 2" />

                      </svg>

                      {job.type}

                    </span>

                  </div>


                  {/* ARROW */}

                  <button className="job-arrow">
                    →
                  </button>

                </div>

              ))

            ) : (

              <div className="no-jobs">

                <h3>
                  No open positions
                </h3>

                <p>
                  We don't currently have any openings
                  in this category.
                </p>

              </div>

            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          RESUME SECTION
      ===================================================== */}

      <section
        className="careers-resume"
        id="resume"
      >

        <div className="resume-container">

          <div>

            <div className="resume-eyebrow">
              DON'T SEE YOUR ROLE?
              <span></span>
            </div>

            <h2>
              We're Always Looking for Great People
            </h2>

            <p>
              We're always interested in meeting talented people
              who are passionate about technology, finance and
              solving complex problems.
            </p>

          </div>


          <a
            href="mailto:info@nectarshell.com?subject=Career Opportunity"
            className="resume-button"
          >
            Send Your Resume
            <span>→</span>
          </a>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="careers-final-cta">

        <div className="final-cta-pattern"></div>

        <div className="final-cta-content">

          <div className="final-eyebrow">

            JOIN OUR JOURNEY

            <span></span>

          </div>


          <h2>
            Your Next Chapter
            <br />
            Starts Here.
          </h2>


          <p>
            Have the curiosity to explore what's next?
            We'd love to hear from you.
          </p>


          <a
            href="#open-positions"
            className="final-cta-button"
          >
            Explore Opportunities
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
    </>
  );
};

export default Careers;