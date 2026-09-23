import { useEffect } from "react";
import "./ServicePage.css";
import cashFlowImage from "../assets/cash-flow-management.jpg";

function CashFlowManagement() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="service-page">

      {/* HERO */}
      <section className="service-page-hero">
        <img className="service-page-hero-bg" src={cashFlowImage} alt="" />
        <div className="service-page-hero-overlay"></div>

        <div className="service-page-hero-content">
          <span className="service-page-hero-label">CASH FLOW MANAGEMENT</span>

          <h1>
            Keep your business
            <br />
            <span>moving.</span>
          </h1>

          <p>
            Healthy cash flow is the foundation of every successful business.
            We help forecast, monitor, and optimize cash flow so you can invest
            confidently and prepare for future opportunities.
          </p>

          <div className="service-page-hero-highlights">
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">💰</span>
              <span>Liquidity<br />Optimization</span>
            </div>
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">📈</span>
              <span>Accurate<br />Forecasting</span>
            </div>
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">🛡️</span>
              <span>Financial<br />Stability</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="service-page-intro">
        <div className="service-page-intro-inner">
          <span className="sp-label">CASH FLOW MANAGEMENT</span>
          <h2>Keep your business moving.</h2>
          <p>
            Healthy cash flow is the foundation of every successful business.
            We help forecast, monitor, and optimize cash flow so you can invest
            confidently and prepare for future opportunities.
          </p>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="service-page-offers">
        <div className="service-page-container">
          <div className="service-page-heading">
            <span className="sp-label">WHAT WE OFFER</span>
            <h2>
              Strategies for
              <br />
              sustainable growth.
            </h2>
          </div>

          <div className="service-page-grid">
            <div className="sp-card">
              <span>01</span>
              <h3>Cash Flow Forecasting</h3>
              <p>
                Predict future cash positions to anticipate shortfalls
                and plan for strategic investments.
              </p>
            </div>
            <div className="sp-card">
              <span>02</span>
              <h3>Working Capital Optimization</h3>
              <p>
                Improve how you manage receivables, payables, and
                inventory to free up tied cash.
              </p>
            </div>
            <div className="sp-card">
              <span>03</span>
              <h3>Expense Management</h3>
              <p>
                Analyze and control business expenses to improve
                overall cash flow margins.
              </p>
            </div>
            <div className="sp-card">
              <span>04</span>
              <h3>Debtor Management</h3>
              <p>
                Implement strategies to collect outstanding payments
                faster and reduce bad debts.
              </p>
            </div>
            <div className="sp-card">
              <span>05</span>
              <h3>Scenario Planning</h3>
              <p>
                Model different business scenarios to understand their
                impact on your cash flow.
              </p>
            </div>
            <div className="sp-card">
              <span>06</span>
              <h3>Funding Assistance</h3>
              <p>
                Guidance on securing external funding or lines of
                credit when necessary to support growth.
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
              Securing your
              <br />
              financial future.
            </h2>
          </div>
          <div className="sp-process-grid">
            <div className="sp-process-item">
              <span>01</span>
              <h3>Analyze</h3>
              <p>Review historical cash flow patterns and current financial standing.</p>
            </div>
            <div className="sp-process-item">
              <span>02</span>
              <h3>Forecast</h3>
              <p>Build robust models to predict future cash inflows and outflows.</p>
            </div>
            <div className="sp-process-item">
              <span>03</span>
              <h3>Optimize</h3>
              <p>Implement strategies to improve working capital and liquidity.</p>
            </div>
            <div className="sp-process-item">
              <span>04</span>
              <h3>Monitor</h3>
              <p>Regularly track actual cash flow against forecasts and adjust as needed.</p>
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
                Proactive cash flow
                <br />
                management.
              </h2>
              <p>
                We provide the visibility and control you need to ensure
                your business always has the resources to thrive.
              </p>
            </div>
            <div className="sp-why-points">
              <div>
                <strong>01</strong>
                <h3>Forward-Looking</h3>
                <p>We focus on predicting the future, not just reporting the past.</p>
              </div>
              <div>
                <strong>02</strong>
                <h3>Actionable Strategies</h3>
                <p>We provide practical recommendations to improve cash positions.</p>
              </div>
              <div>
                <strong>03</strong>
                <h3>Peace of Mind</h3>
                <p>Knowing your cash flow is managed allows you to focus on growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-page-cta">
        <span className="sp-label">LET'S OPTIMISE</span>
        <h2>
          Take control of
          <br />
          your cash flow.
        </h2>
        <p>
          Let's ensure your business has the liquidity it needs to succeed.
        </p>
        <a href="/contact">Start a Conversation →</a>
      </section>

    </main>
  );
}

export default CashFlowManagement;
