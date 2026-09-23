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
const capabilities = [
  {
    id: "tech-solutions",
    category: "TECHNOLOGY",
    title: "Software & Cloud Architecture",
    description: "Custom web applications, cloud infrastructure, API integrations, and scalable enterprise software solutions.",
    tags: ["React / Node", "Cloud Infra", "API Integration"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    id: "accounting-tax",
    category: "ACCOUNTING",
    title: "Financial Control & Tax Strategy",
    description: "Comprehensive bookkeeping, financial modeling, tax planning, cashflow management, and compliance auditing.",
    tags: ["Tax Strategy", "Financial Modeling", "Cashflow"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    id: "operations",
    category: "OPERATIONS",
    title: "Digital Transformation & Workflows",
    description: "Optimizing operational workflows, automating back-office processes, and integrating smart technology systems.",
    tags: ["Workflow Automation", "ERP Systems", "Process Optimization"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  },
  {
    id: "growth-advisory",
    category: "ADVISORY",
    title: "Strategic Consulting & Advisory",
    description: "Data-driven advisory services for startups and established enterprises seeking sustainable growth and risk mitigation.",
    tags: ["Growth Advisory", "Risk Management", "Compliance"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="12 8 8 16 16 16 12 8"></polygon>
      </svg>
    )
  }
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

      <section className="our-capabilities-section">

        {/* SECTION HEADER */}

        <div className="capabilities-header">

          <div className="capabilities-label">
            <span className="capabilities-label-dot"></span>
            <span>OUR CAPABILITIES</span>
          </div>

          <h2>
            Core Solutions &amp;
            <br />
            Technical Expertise
          </h2>

          <p>
            We combine technical engineering and financial precision
            <br />
            to power modern enterprise growth.
          </p>

        </div>


        {/* CAPABILITIES GRID */}

        <div className="capabilities-grid">

          {capabilities.map((item) => (

            <div className="capability-card" key={item.id}>

              <div className="capability-card-top">
                <div className="capability-icon">
                  {item.icon}
                </div>
                <span className="capability-category">{item.category}</span>
              </div>

              <h3 className="capability-title">{item.title}</h3>

              <p className="capability-desc">{item.description}</p>

              <div className="capability-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="capability-tag">{tag}</span>
                ))}
              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}

export default Industries;