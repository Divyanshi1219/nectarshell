import { useState } from "react";
import "./Industries.css";
//import founderImage from "../assets/founder.png";
//import coFounderImage from "../assets/co-founder.png";
//import accountingHeadImage from "../assets/accounting-head.png";

const industries = [
  {
    id: "ecommerce",
    label: "E-commerce",
    description:
      "We help online retailers scale with reliable systems, streamlined operations and data-driven growth strategies that keep customers coming back.",
  },
  {
    id: "construction",
    label: "Construction",
    description:
      "From project management to financial control, we support construction firms with practical, field-tested technology and precise accounting.",
  },
  {
    id: "finance",
    label: "Finance",
    description:
      "Accurate reporting, compliance and trusted advisory — intelligent systems built for modern finance teams.",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    description:
      "Secure, compliant technology and back-office support that let care providers focus on what matters most: patients.",
  },
  {
    id: "startups",
    label: "Startups",
    description:
      "Flexible systems and expert guidance that help young companies move fast, stay lean and grow with confidence.",
  },
  {
    id: "industry",
    label: "Industry",
    description:
      "Integrated technology, accounting and operational solutions designed to improve efficiency, strengthen decision-making and support sustainable growth.",
  },
  
];
const teamMembers = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    //image: founderImage,
  },
  {
    name: "Sarah Ahmed",
    role: "Lead Web Developer",
    //image: coFounderImage,
  },
  {
    name: "David Chen",
    role: "Head of Accounting & Tax",
    //image: accountingHeadImage,
  },
];

function Industries() {
  const [activeIndustry, setActiveIndustry] = useState("ecommerce");

  const activeData = industries.find(
    (industry) => industry.id === activeIndustry
  );

  return (
    <main className="industries-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="industries-hero">
        <div className="industries-hero-overlay"></div>

        <div className="industries-hero-content">
          <h1>OUR INDUSTRIES</h1>

          <p>
            From petrochemicals, energy and marine to construction, IT
            services and development, we deliver integrated end-to-end
            solutions across the industries that power modern life.
            With sustainable growth and differentiated expertise, we
            create lasting value for our customers worldwide.
          </p>
        </div>
      </section>


      {/* =====================================================
          BUSINESS AREA
      ===================================================== */}

      <section className="business-area">

        <div className="business-area-header">

          <h2>Business Area</h2>

          <p>
            We deliver sustainable growth and differentiated customer
            value across every industry we serve.
          </p>

        </div>


        {/* BIG INNOVATION WORD */}

        <div className="innovation-word" aria-hidden="true">
          INNOVATION
        </div>


        {/* INDUSTRY TABS */}

        <div
          className="industry-tabs"
          role="tablist"
          aria-label="Business areas"
        >

          {industries.map((industry) => (
            <button
              key={industry.id}
              type="button"
              role="tab"
              aria-selected={activeIndustry === industry.id}
              className={`industry-tab ${
                activeIndustry === industry.id ? "active" : ""
              }`}
              onClick={() => setActiveIndustry(industry.id)}
            >
              {industry.label}
            </button>
          ))}

        </div>


        {/* DESCRIPTION */}

        <div className="industry-description">
          <p key={activeIndustry}>
            {activeData.description}
          </p>
        </div>

      </section>


      {/* =====================================================
          WHAT WE DELIVER
      ===================================================== */}

      <section className="what-we-deliver">

        {/* SMALL LABEL */}

        <div className="deliver-label">
          <span className="deliver-label-dot"></span>
          <span>WHAT WE DELIVER</span>
        </div>


        {/* HEADING */}

        <h2 className="deliver-heading">
          Technology &amp; accounting,
          <br />
          engineered to grow
        </h2>


        {/* DESCRIPTION */}

        <p className="deliver-intro">
          From web development to bookkeeping and tax, our integrated
          services increase efficiency and keep your business reliable.
        </p>


        {/* SERVICES */}

        <div className="deliver-grid">

          {/* WEB DEVELOPMENT */}

          <div className="deliver-item">

            <div className="deliver-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M8 8l-4 4 4 4" />
                <path d="M16 8l4 4-4 4" />
                <path d="M14 4l-4 16" />
              </svg>
            </div>

            <h3>Web Development</h3>

            <p>
              Modern, responsive websites and online stores built to
              convert.
            </p>

          </div>


          {/* ACCOUNTING */}

          <div className="deliver-item">

            <div className="deliver-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <rect x="5" y="3" width="14" height="18" rx="2" />
                <path d="M8 7h8" />
                <path d="M8 11h2" />
                <path d="M14 11h2" />
                <path d="M8 15h2" />
                <path d="M14 15h2" />
                <path d="M8 18h8" />
              </svg>
            </div>

            <h3>Accounting &amp; Bookkeeping</h3>

            <p>
              Accurate books, payroll and tax-ready reporting, every
              time.
            </p>

          </div>


          {/* IT & AUTOMATION */}

          <div className="deliver-item">

            <div className="deliver-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <rect x="7" y="7" width="10" height="10" rx="2" />
                <rect x="10" y="10" width="4" height="4" />

                <path d="M9 2v3" />
                <path d="M15 2v3" />
                <path d="M9 19v3" />
                <path d="M15 19v3" />

                <path d="M2 9h3" />
                <path d="M2 15h3" />
                <path d="M19 9h3" />
                <path d="M19 15h3" />
              </svg>
            </div>

            <h3>IT &amp; Automation</h3>

            <p>
              Smart systems that streamline your daily operations.
            </p>

          </div>


          {/* TAX */}

          <div className="deliver-item">

            <div className="deliver-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M12 3l8 3v5c0 5.2-3.4 8.8-8 10-4.6-1.2-8-4.8-8-10V6l8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>

            <h3>Tax &amp; Compliance</h3>

            <p>
              Proactive guidance that keeps your business secure and
              compliant.
            </p>

          </div>

        </div>

      </section>
      {/* =====================================================
    OUR TEAM
===================================================== */}

<section className="our-team">

{/* SECTION HEADER */}

<div className="team-header">

  <div className="team-label">
    <span className="team-label-dot"></span>
    <span>OUR TEAM</span>
  </div>

  <h2>
    Experts delivering
    <br />
    tech &amp; accounting solutions
  </h2>

  <p>
    We combine technical skill and financial expertise
    <br />
    to deliver measurable results.
  </p>

</div>


{/* TEAM MEMBERS */}

<div className="team-grid">

  {teamMembers.map((member) => (

    <div className="team-card" key={member.name}>

      <div className="team-image-wrapper">

        <img
          src={member.image}
          alt={member.name}
          className="team-image"
        />

        <div className="team-gradient"></div>

        <div className="team-info">

          <h3>{member.name}</h3>

          <p>{member.role}</p>

        </div>

      </div>

    </div>

  ))}

</div>

</section>

    </main>
  );
}

export default Industries;