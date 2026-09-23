import { Link } from "react-router-dom";
import "./Services.css";
import webDevelopment from "../assets/web-development.jpg";
import mobileAppImage from "../assets/mobile-app-development.jpg";
import cloudSolutionsImage from "../assets/cloud-solutions-services.png";
import businessIntelligenceImage from "../assets/business-intelligence.jpg";
import payrollImage from "../assets/payroll-services.png";
import financialReportingImage from "../assets/financial-reporting (1).png";
import businessAdvisoryImage from "../assets/business-advisory.jpg";
import cashFlowImage from "../assets/cash-flow-management.jpg";
import whyTeamImage from "../assets/why-team.png";
import whyVendorsImage from "../assets/why-vendors.jpg";
import whyAccessImage from "../assets/why-access.png";
import whyBusinessImage from "../assets/why-business.png";
import whyComplianceImage from "../assets/why-compliance.png";
import whyOutcomesImage from "../assets/why-outcomes.png";

function Services() {
  return (
    <main className="services-page">

      {/* =========================
          SERVICES HERO
      ========================= */}

      <section className="services-hero">

        {/* Background image */}
        <div className="services-hero-image"></div>

        {/* Dark overlay */}
        <div className="services-hero-overlay"></div>

        {/* Hero content */}
        <div className="services-hero-content">

          <h1>
            Where Technology
            <br />
            Meets Financial
            <br />
            Expertise
          </h1>

          <p>
            One partner for software, cloud, accounting, tax, and
            <br />
            business growth.
          </p>

        </div>

        {/* Slider dots */}
        <div className="services-hero-dots">

          <span className="services-dot active"></span>
          <span className="services-dot"></span>

        </div>

      </section>
      {/* =========================
    TECHNOLOGY INTRO
========================= */}

<section className="technology-intro">

<div className="technology-intro-content">

  <h2>TECHNOLOGY</h2>

  <h3>Systems that keep up with you.</h3>

  <p>
    We design, build, and run the technology your business depends on
    — websites, apps, cloud infrastructure, and the intelligence layer
    that turns activity into decisions.
  </p>

</div>

</section>
      {/* =========================
    WEB DEVELOPMENT
========================= */}

<section className="service-feature">

{/* Image */}
<div className="service-feature-image">
  <img
    src={webDevelopment}
    alt="Web Development"
  />
</div>

{/* Content */}
<div className="service-feature-content">

  <p className="service-feature-label">
    Web Development
  </p>

  <div className="service-feature-main">

    <h2>
      Websites designed to perform.
    </h2>

    <p>
      Your website is more than a digital presence—
      it's your most valuable business asset. We
      design and develop modern, responsive
      websites that combine exceptional user
      experience with measurable business results.
    </p>

  </div>

  <Link to="/web-development" className="explore-service-link">
    Explore Services <span>→</span>
  </Link>

</div>

</section>
{/* =========================
    MOBILE APP DEVELOPMENT
========================= */}

<section className="service-feature service-feature-reverse">

  <div className="service-feature-content">

    <p className="service-feature-label">
      Mobile App Development
    </p>

    <div className="service-feature-main">

      <h2>
        Experiences people love to use.
      </h2>

      <p>
        Build intuitive mobile applications that keep
        customers connected and teams productive.
        Every app is engineered for performance,
        scalability, and seamless user experience
        across iOS and Android.
      </p>

    </div>

    <Link to="/mobile-app-development" className="explore-service-link">
      Explore Services <span>→</span>
    </Link>

  </div>


  <div className="service-feature-image">

    <img
      src={mobileAppImage}
      alt="Mobile App Development"
    />

  </div>

</section>


{/* =========================
    CLOUD SOLUTIONS
========================= */}

<section className="service-feature">

  <div className="service-feature-image">

    <img
      src={cloudSolutionsImage}
      alt="Cloud Solutions"
    />

  </div>


  <div className="service-feature-content">

    <p className="service-feature-label">
      Cloud Solutions
    </p>

    <div className="service-feature-main">

      <h2>
        Infrastructure built for the future.
      </h2>

      <p>
        Modern cloud platforms provide flexibility,
        security, and reliability. We help businesses
        migrate, manage, and optimize cloud
        environments that scale alongside their growth.
      </p>

    </div>

    <Link to="/cloud-solutions" className="explore-service-link">
      Explore Services <span>→</span>
    </Link>

  </div>

</section>


{/* =========================
    BUSINESS INTELLIGENCE
========================= */}

<section className="service-feature service-feature-reverse">

  <div className="service-feature-content">

    <p className="service-feature-label">
      Business Intelligence
    </p>

    <div className="service-feature-main">

      <h2>
        Turn data into better decisions.
      </h2>

      <p>
        Every business generates valuable data. We
        transform that information into meaningful
        insights through interactive dashboards,
        reporting systems, and intelligent analytics that
        support smarter decision-making.
      </p>

    </div>

    <Link to="/business-intelligence" className="explore-service-link">
      Explore Services <span>→</span>
    </Link>

  </div>


  <div className="service-feature-image">

    <img
      src={businessIntelligenceImage}
      alt="Business Intelligence"
    />

  </div>

</section>
{/* =====================================================
    ACCOUNTING INTRO
===================================================== */}

<section className="accounting-intro">

  <div className="accounting-intro-content">

    <h2>ACCOUNTING</h2>

    <h3>
      Numbers you can build decisions on.
    </h3>

    <p>
      Growth is a financial exercise as much as a strategic one.
      We handle payroll, reporting, advisory, and cash flow with
      the precision of a firm that knows one error compounds —
      and the judgment of a partner who's run a business too.
    </p>

  </div>

</section>


{/* =====================================================
    PAYROLL SERVICES
===================================================== */}

<section className="service-feature">

  <div className="service-feature-image">

    <img
      src={payrollImage}
      alt="Payroll Services"
    />

  </div>


  <div className="service-feature-content">

    <p className="service-feature-label">
      Payroll Services
    </p>

    <div className="service-feature-main">

      <h2>
        Payroll that's accurate, secure, and always on time.
      </h2>

      <p>
        Managing payroll shouldn't be complicated. We handle
        employee wages, superannuation, leave, and compliance,
        ensuring your team is paid correctly while reducing
        administrative workload.
      </p>

    </div>

    <Link to="/payroll-services" className="explore-service-link">
      Explore Services <span>→</span>
    </Link>

  </div>

</section>


{/* =====================================================
    FINANCIAL REPORTING
===================================================== */}

<section className="service-feature service-feature-reverse">

  <div className="service-feature-content">

    <p className="service-feature-label">
      Financial Reporting
    </p>

    <div className="service-feature-main">

      <h2>
        Understand your business through numbers.
      </h2>

      <p>
        Clear financial reporting provides the insight needed
        to make confident decisions. We deliver accurate
        reports that help you measure performance, identify
        opportunities, and plan for growth.
      </p>

    </div>

    <Link to="/financial-reporting" className="explore-service-link">
      Explore Services <span>→</span>
    </Link>

  </div>


  <div className="service-feature-image">

    <img
      src={financialReportingImage}
      alt="Financial Reporting"
    />

  </div>

</section>


{/* =====================================================
    BUSINESS ADVISORY
===================================================== */}

<section className="service-feature">

  <div className="service-feature-image">

    <img
      src={businessAdvisoryImage}
      alt="Business Advisory"
    />

  </div>


  <div className="service-feature-content">

    <p className="service-feature-label">
      Business Advisory
    </p>

    <div className="service-feature-main">

      <h2>
        Strategic guidance beyond accounting.
      </h2>

      <p>
        Every successful business needs experienced advice.
        We work alongside business owners to improve
        profitability, strengthen operations, and create
        sustainable long-term growth strategies.
      </p>

    </div>

    <Link to="/business-advisory" className="explore-service-link">
      Explore Services <span>→</span>
    </Link>

  </div>

</section>


{/* =====================================================
    CASH FLOW MANAGEMENT
===================================================== */}

<section className="service-feature service-feature-reverse">

  <div className="service-feature-content">

    <p className="service-feature-label">
      Cash Flow Management
    </p>

    <div className="service-feature-main">

      <h2>
        Keep your business moving.
      </h2>

      <p>
        Healthy cash flow is the foundation of every
        successful business. We help forecast, monitor,
        and optimize cash flow so you can invest
        confidently and prepare for future opportunities.
      </p>

    </div>

    <Link to="/cash-flow-management" className="explore-service-link">
      Explore Services <span>→</span>
    </Link>

  </div>


  <div className="service-feature-image">

    <img
      src={cashFlowImage}
      alt="Cash Flow Management"
    />

  </div>

</section>
<section className="why-nectarshell">

  {/* Section Introduction */}
  <div className="why-header">

    <span className="why-label">
      WHY NECTARSHELL
    </span>

    <h2>
      One partner. Both sides of the business.
    </h2>

    <p>
      Most businesses run technology and accounting through two vendors
      who've never spoken to each other. Nectarshell replaces both with
      a single team that understands how a systems decision changes a
      financial one — and builds for both at once.
    </p>

  </div>


  {/* Cards */}
  <div className="why-cards">

    <div className="why-card">
      <img
        src={whyTeamImage}
        alt="One Team, Not Two Vendors"
      />

      <div className="why-card-content">
        <h3>One Team, Not Two Vendors</h3>

        <p>
          No more relying messages between an IT agency and an accounting
          firm that have never spoken. One team owns both sides of the
          business.
        </p>
      </div>
    </div>


    <div className="why-card">
      <img
        src={whyVendorsImage}
        alt="Between Vendors"
      />

      <div className="why-card-content">
        <h3>
          We Catch What Gets Missed Between Vendors
        </h3>

        <p>
          A platform migration changes your cost base. A pricing change
          changes your infrastructure needs. We see both, because we
          build both.
        </p>
      </div>
    </div>


    <div className="why-card">
      <img
        src={whyAccessImage}
        alt="Direct Access"
      />

      <div className="why-card-content">
        <h3>
          Direct Access to the People Doing the Work
        </h3>

        <p>
          You talk to the engineers and accountants on your account —
          not an account manager relaying updates from someone else's desk.
        </p>
      </div>
    </div>


    <div className="why-card">
      <img
        src={whyBusinessImage}
        alt="Built Around Your Business"
      />

      <div className="why-card-content">
        <h3>
          Built Around Your Business, Not a Package
        </h3>

        <p>
          Every engagement starts with how you actually operate,
          not a standard bundle resized to fit your logo.
        </p>
      </div>
    </div>


    <div className="why-card">
      <img
        src={whyComplianceImage}
        alt="Compliance Built In"
      />

      <div className="why-card-content">
        <h3>
          Compliance Built In, Not Bolted On
        </h3>

        <p>
          Security and regulatory standards are part of how we build
          and report from day one — not an audit we run afterward.
        </p>
      </div>
    </div>


    <div className="why-card">
      <img
        src={whyOutcomesImage}
        alt="Accountable to Outcomes"
      />

      <div className="why-card-content">
        <h3>
          Accountable to Outcomes, Not Just Delivery
        </h3>

        <p>
          We're judged the way you'd judge us: fewer errors,
          faster decisions, systems that hold up as you grow.
        </p>
      </div>
    </div>

  </div>

</section>
{/* =====================================================
    OUR PROCESS
===================================================== */}

<section className="process-section">

  <div className="process-header">

    <span className="process-badge">
      OUR PROCESS
    </span>

    <h2>
      How it actually gets done.
    </h2>

    <p>
      A simple, five-step process built to move technology and
      accounting work forward together — without the usual
      back-and-forth between vendors.
    </p>

  </div>


  <div className="process-wrapper">

    {/* CONNECTING LINE */}
    <div className="process-line"></div>


    <div className="process-steps">

      {/* STEP 01 */}

      <div className="process-step active">

        <div className="process-number">
          01
        </div>

        <div className="process-small-number">
          01
        </div>

        <h3>
          Discover
        </h3>

        <p>
          We begin by understanding your business goals,
          challenges, and requirements through in-depth
          consultation.
        </p>

      </div>


      {/* STEP 02 */}

      <div className="process-step">

        <div className="process-number">
          02
        </div>

        <div className="process-small-number">
          02
        </div>

        <h3>
          Strategy
        </h3>

        <p>
          Our experts craft a tailored roadmap combining
          technology and accounting solutions aligned to
          your objectives.
        </p>

      </div>


      {/* STEP 03 */}

      <div className="process-step">

        <div className="process-number">
          03
        </div>

        <div className="process-small-number">
          03
        </div>

        <h3>
          Develop
        </h3>

        <p>
          We build and implement your solutions with precision,
          ensuring quality, security, and compliance at every
          stage.
        </p>

      </div>


      {/* STEP 04 */}

      <div className="process-step">

        <div className="process-number">
          04
        </div>

        <div className="process-small-number">
          04
        </div>

        <h3>
          Launch
        </h3>

        <p>
          Your solutions go live with comprehensive testing,
          training, and seamless deployment to minimise
          disruption.
        </p>

      </div>


      {/* STEP 05 */}

      <div className="process-step">

        <div className="process-number">
          05
        </div>

        <div className="process-small-number">
          05
        </div>

        <h3>
          Support
        </h3>

        <p>
          Ongoing partnership with proactive monitoring,
          optimisation, and expert support to drive continuous
          growth.
        </p>

      </div>

    </div>

  </div>

</section>

    </main>
  );
}

export default Services;