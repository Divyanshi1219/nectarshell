import { useEffect } from "react";
import "./ServicePage.css";
import biImage from "../assets/business-intelligence.jpg";

function BusinessIntelligence() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="service-page">

      {/* HERO */}
      <section className="service-page-hero">
        <img className="service-page-hero-bg" src={biImage} alt="" />
        <div className="service-page-hero-overlay"></div>

        <div className="service-page-hero-content">
          <span className="service-page-hero-label">BUSINESS INTELLIGENCE</span>

          <h1>
            Turn data into
            <br />
            better <span>decisions.</span>
          </h1>

          <p>
            Transform your business data into meaningful insights through
            interactive dashboards, reporting systems, and intelligent analytics.
          </p>

          <div className="service-page-hero-highlights">
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">📊</span>
              <span>Interactive<br />Dashboards</span>
            </div>
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">📈</span>
              <span>Real-Time<br />Analytics</span>
            </div>
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">🎯</span>
              <span>Data-Driven<br />Growth</span>
            </div>
          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className="service-page-intro">
        <div className="service-page-intro-inner">
          <span className="sp-label">BUSINESS INTELLIGENCE</span>
          <h2>Turn data into better decisions.</h2>
          <p>
            Every business generates valuable data. We transform that information
            into meaningful insights through interactive dashboards, reporting
            systems, and intelligent analytics that support smarter decision-making.
          </p>
        </div>
      </section>


      {/* WHAT WE OFFER */}
      <section className="service-page-offers">
        <div className="service-page-container">

          <div className="service-page-heading">
            <span className="sp-label">WHAT WE OFFER</span>
            <h2>
              Intelligence solutions
              <br />
              for your business.
            </h2>
          </div>

          <div className="service-page-grid">

            <div className="sp-card">
              <span>01</span>
              <h3>Custom Dashboards</h3>
              <p>
                Interactive visual dashboards that surface the metrics
                that matter most to your business in real time.
              </p>
            </div>

            <div className="sp-card">
              <span>02</span>
              <h3>Data Warehousing</h3>
              <p>
                Centralise data from multiple sources into a single,
                reliable warehouse for consistent reporting.
              </p>
            </div>

            <div className="sp-card">
              <span>03</span>
              <h3>Reporting Automation</h3>
              <p>
                Automate recurring reports so your team spends less time
                pulling numbers and more time acting on them.
              </p>
            </div>

            <div className="sp-card">
              <span>04</span>
              <h3>Predictive Analytics</h3>
              <p>
                Use historical data to forecast trends, anticipate
                demand, and identify growth opportunities early.
              </p>
            </div>

            <div className="sp-card">
              <span>05</span>
              <h3>KPI Tracking</h3>
              <p>
                Define, monitor, and alert on key performance indicators
                across every department and team.
              </p>
            </div>

            <div className="sp-card">
              <span>06</span>
              <h3>Data Integration</h3>
              <p>
                Connect CRMs, ERPs, marketing platforms, and financial
                systems into a unified analytics layer.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* PROCESS */}
      <section className="service-page-process">
        <div className="service-page-container">

          <div className="service-page-heading">
            <span className="sp-label">OUR APPROACH</span>
            <h2>
              From raw data to
              <br />
              actionable insights.
            </h2>
          </div>

          <div className="sp-process-grid">
            <div className="sp-process-item">
              <span>01</span>
              <h3>Audit</h3>
              <p>Review your data sources, quality, and current reporting gaps.</p>
            </div>
            <div className="sp-process-item">
              <span>02</span>
              <h3>Model</h3>
              <p>Design data models that align with your business questions.</p>
            </div>
            <div className="sp-process-item">
              <span>03</span>
              <h3>Build</h3>
              <p>Create dashboards and pipelines tailored to your workflows.</p>
            </div>
            <div className="sp-process-item">
              <span>04</span>
              <h3>Iterate</h3>
              <p>Refine insights as your business evolves and data grows.</p>
            </div>
          </div>

        </div>
      </section>


      {/* WHY NECTARSHELL */}
      <section className="service-page-why">
        <div className="service-page-container">
          <div className="sp-why-layout">

            <div className="sp-why-content">
              <span className="sp-label">WHY NECTARSHELL</span>
              <h2>
                We don't just
                <br />
                visualise data.
              </h2>
              <p>
                We build intelligence systems that help your team
                make better decisions, faster.
              </p>
            </div>

            <div className="sp-why-points">
              <div>
                <strong>01</strong>
                <h3>Business-First Approach</h3>
                <p>Every dashboard is designed around real business questions, not vanity metrics.</p>
              </div>
              <div>
                <strong>02</strong>
                <h3>Platform Agnostic</h3>
                <p>Power BI, Tableau, Looker, or custom — we work with the tools that fit.</p>
              </div>
              <div>
                <strong>03</strong>
                <h3>Continuous Improvement</h3>
                <p>Your analytics evolve with your business through ongoing support.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="service-page-cta">
        <span className="sp-label">LET'S BUILD</span>
        <h2>
          Your data strategy
          <br />
          starts here.
        </h2>
        <p>
          Let's turn your data into decisions that drive growth.
        </p>
        <a href="/contact">Start a Conversation →</a>
      </section>

    </main>
  );
}

export default BusinessIntelligence;
