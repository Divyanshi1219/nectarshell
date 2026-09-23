import { useEffect } from "react";
import "./ServicePage.css";
import financialImage from "../assets/financial-reporting (1).png";

function FinancialReporting() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="service-page">

      {/* HERO */}
      <section className="service-page-hero">
        <img className="service-page-hero-bg" src={financialImage} alt="" />
        <div className="service-page-hero-overlay"></div>

        <div className="service-page-hero-content">
          <span className="service-page-hero-label">FINANCIAL REPORTING</span>

          <h1>
            Understand your business
            <br />
            through <span>numbers.</span>
          </h1>

          <p>
            Clear financial reporting provides the insight needed to make
            confident decisions. We deliver accurate reports that help you
            measure performance, identify opportunities, and plan for growth.
          </p>

          <div className="service-page-hero-highlights">
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">📋</span>
              <span>Accurate<br />Reports</span>
            </div>
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">📊</span>
              <span>Clear<br />Insights</span>
            </div>
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">✓</span>
              <span>IFRS<br />Compliant</span>
            </div>
          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className="service-page-intro">
        <div className="service-page-intro-inner">
          <span className="sp-label">FINANCIAL REPORTING</span>
          <h2>Understand your business through numbers.</h2>
          <p>
            Clear financial reporting provides the insight needed to make
            confident decisions. We deliver accurate reports that help you
            measure performance, identify opportunities, and plan for growth.
          </p>
        </div>
      </section>


      {/* WHAT WE OFFER */}
      <section className="service-page-offers">
        <div className="service-page-container">

          <div className="service-page-heading">
            <span className="sp-label">WHAT WE DELIVER</span>
            <h2>
              Financial clarity
              <br />
              for your business.
            </h2>
          </div>

          <div className="service-page-grid">

            <div className="sp-card">
              <span>01</span>
              <h3>Profit & Loss Statements</h3>
              <p>
                Detailed income and expense reporting that shows
                exactly where your business stands financially.
              </p>
            </div>

            <div className="sp-card">
              <span>02</span>
              <h3>Balance Sheets</h3>
              <p>
                Comprehensive snapshots of assets, liabilities, and
                equity to track your financial health over time.
              </p>
            </div>

            <div className="sp-card">
              <span>03</span>
              <h3>Cash Flow Statements</h3>
              <p>
                Understand how cash moves through your business
                and plan for future liquidity needs.
              </p>
            </div>

            <div className="sp-card">
              <span>04</span>
              <h3>Management Reports</h3>
              <p>
                Custom reports designed for internal decision-making,
                board presentations, and stakeholder updates.
              </p>
            </div>

            <div className="sp-card">
              <span>05</span>
              <h3>Compliance Reporting</h3>
              <p>
                BAS, IAS, GST, and regulatory filings prepared
                accurately and lodged on time.
              </p>
            </div>

            <div className="sp-card">
              <span>06</span>
              <h3>Budgeting & Forecasting</h3>
              <p>
                Forward-looking financial models that help you
                plan investments and manage growth sustainably.
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
              clear reports.
            </h2>
          </div>

          <div className="sp-process-grid">
            <div className="sp-process-item">
              <span>01</span>
              <h3>Collect</h3>
              <p>Gather and reconcile all financial data from your systems.</p>
            </div>
            <div className="sp-process-item">
              <span>02</span>
              <h3>Analyse</h3>
              <p>Review transactions, identify trends, and flag anomalies.</p>
            </div>
            <div className="sp-process-item">
              <span>03</span>
              <h3>Report</h3>
              <p>Produce clear, accurate reports on your preferred schedule.</p>
            </div>
            <div className="sp-process-item">
              <span>04</span>
              <h3>Advise</h3>
              <p>Provide actionable recommendations alongside every report.</p>
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
                Reports that tell
                <br />
                you something.
              </h2>
              <p>
                We don't just generate numbers — we translate them
                into insights that drive action.
              </p>
            </div>

            <div className="sp-why-points">
              <div>
                <strong>01</strong>
                <h3>Precision</h3>
                <p>Every figure is verified, reconciled, and audit-ready.</p>
              </div>
              <div>
                <strong>02</strong>
                <h3>Timeliness</h3>
                <p>Reports delivered on schedule, every month, without chasing.</p>
              </div>
              <div>
                <strong>03</strong>
                <h3>Actionable Insights</h3>
                <p>Not just what happened — what it means and what to do next.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="service-page-cta">
        <span className="sp-label">LET'S CLARIFY</span>
        <h2>
          Your financial picture
          <br />
          starts here.
        </h2>
        <p>
          Let's give you the clarity to make confident financial decisions.
        </p>
        <a href="/contact">Start a Conversation →</a>
      </section>

    </main>
  );
}

export default FinancialReporting;
