import { useEffect } from "react";
import "./ServicePage.css";
import advisoryImage from "../assets/business-advisory.jpg";

function BusinessAdvisory() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="service-page">

      {/* HERO */}
      <section className="service-page-hero">
        <img className="service-page-hero-bg" src={advisoryImage} alt="" />
        <div className="service-page-hero-overlay"></div>

        <div className="service-page-hero-content">
          <span className="service-page-hero-label">BUSINESS ADVISORY</span>

          <h1>
            Strategic guidance
            <br />
            beyond <span>accounting.</span>
          </h1>

          <p>
            Every successful business needs experienced advice. We work alongside
            business owners to improve profitability, strengthen operations, and
            create sustainable long-term growth strategies.
          </p>

          <div className="service-page-hero-highlights">
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">🎯</span>
              <span>Strategic<br />Planning</span>
            </div>
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">📈</span>
              <span>Growth<br />Strategies</span>
            </div>
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">🛡️</span>
              <span>Risk<br />Mitigation</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="service-page-intro">
        <div className="service-page-intro-inner">
          <span className="sp-label">BUSINESS ADVISORY</span>
          <h2>Strategic guidance beyond accounting.</h2>
          <p>
            Every successful business needs experienced advice. We work alongside
            business owners to improve profitability, strengthen operations, and
            create sustainable long-term growth strategies.
          </p>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="service-page-offers">
        <div className="service-page-container">
          <div className="service-page-heading">
            <span className="sp-label">WHAT WE OFFER</span>
            <h2>
              Guidance tailored
              <br />
              to your goals.
            </h2>
          </div>

          <div className="service-page-grid">
            <div className="sp-card">
              <span>01</span>
              <h3>Strategic Planning</h3>
              <p>
                Develop clear, actionable business plans that align
                with your long-term vision and market opportunities.
              </p>
            </div>
            <div className="sp-card">
              <span>02</span>
              <h3>Profitability Analysis</h3>
              <p>
                Identify areas where you can reduce costs, increase
                margins, and maximize overall profitability.
              </p>
            </div>
            <div className="sp-card">
              <span>03</span>
              <h3>Business Valuation</h3>
              <p>
                Determine the true value of your business for
                succession planning, sales, or investment purposes.
              </p>
            </div>
            <div className="sp-card">
              <span>04</span>
              <h3>Risk Management</h3>
              <p>
                Identify potential risks to your business and
                develop strategies to mitigate their impact.
              </p>
            </div>
            <div className="sp-card">
              <span>05</span>
              <h3>Performance Improvement</h3>
              <p>
                Analyze operational inefficiencies and implement
                solutions to streamline processes and boost productivity.
              </p>
            </div>
            <div className="sp-card">
              <span>06</span>
              <h3>Mergers & Acquisitions</h3>
              <p>
                Expert guidance through the complex process of buying,
                selling, or merging businesses.
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
              Partnering for
              <br />
              success.
            </h2>
          </div>
          <div className="sp-process-grid">
            <div className="sp-process-item">
              <span>01</span>
              <h3>Assess</h3>
              <p>Deep dive into your current business performance and goals.</p>
            </div>
            <div className="sp-process-item">
              <span>02</span>
              <h3>Strategise</h3>
              <p>Develop tailored strategies to overcome challenges and drive growth.</p>
            </div>
            <div className="sp-process-item">
              <span>03</span>
              <h3>Implement</h3>
              <p>Work alongside you to execute the agreed-upon strategies.</p>
            </div>
            <div className="sp-process-item">
              <span>04</span>
              <h3>Review</h3>
              <p>Regularly monitor progress and adjust strategies as needed.</p>
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
                Experience that
                <br />
                makes a difference.
              </h2>
              <p>
                We bring years of practical business experience to help you
                navigate complex challenges and seize new opportunities.
              </p>
            </div>
            <div className="sp-why-points">
              <div>
                <strong>01</strong>
                <h3>Practical Advice</h3>
                <p>We provide actionable insights, not just theoretical concepts.</p>
              </div>
              <div>
                <strong>02</strong>
                <h3>Tailored Solutions</h3>
                <p>Our advice is specific to your unique business circumstances and goals.</p>
              </div>
              <div>
                <strong>03</strong>
                <h3>Long-Term Partnership</h3>
                <p>We are committed to your ongoing success and growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-page-cta">
        <span className="sp-label">LET'S CONNECT</span>
        <h2>
          Ready to grow
          <br />
          your business?
        </h2>
        <p>
          Let's discuss how our advisory services can help you achieve your goals.
        </p>
        <a href="/contact">Start a Conversation →</a>
      </section>

    </main>
  );
}

export default BusinessAdvisory;
