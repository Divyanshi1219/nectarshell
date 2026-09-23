import { useEffect } from "react";
import "./ServicePage.css";
import payrollImage from "../assets/payroll-services.png";

function PayrollServices() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="service-page">

      {/* HERO */}
      <section className="service-page-hero">
        <img className="service-page-hero-bg" src={payrollImage} alt="" />
        <div className="service-page-hero-overlay"></div>

        <div className="service-page-hero-content">
          <span className="service-page-hero-label">PAYROLL SERVICES</span>

          <h1>
            Payroll that's accurate,
            <br />
            secure, and always <span>on time.</span>
          </h1>

          <p>
            Managing payroll shouldn't be complicated. We handle employee wages,
            superannuation, leave, and compliance so your team is paid correctly
            while reducing administrative workload.
          </p>

          <div className="service-page-hero-highlights">
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">✓</span>
              <span>ATO<br />Compliant</span>
            </div>
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">🔒</span>
              <span>Secure<br />Processing</span>
            </div>
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">⏰</span>
              <span>Always<br />On Time</span>
            </div>
          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className="service-page-intro">
        <div className="service-page-intro-inner">
          <span className="sp-label">PAYROLL SERVICES</span>
          <h2>Payroll that's accurate, secure, and always on time.</h2>
          <p>
            Managing payroll shouldn't be complicated. We handle employee wages,
            superannuation, leave, and compliance, ensuring your team is paid
            correctly while reducing administrative workload.
          </p>
        </div>
      </section>


      {/* WHAT WE OFFER */}
      <section className="service-page-offers">
        <div className="service-page-container">

          <div className="service-page-heading">
            <span className="sp-label">WHAT WE HANDLE</span>
            <h2>
              Complete payroll
              <br />
              management.
            </h2>
          </div>

          <div className="service-page-grid">

            <div className="sp-card">
              <span>01</span>
              <h3>Wage Processing</h3>
              <p>
                Accurate calculation and processing of employee wages,
                salaries, overtime, and bonuses on schedule.
              </p>
            </div>

            <div className="sp-card">
              <span>02</span>
              <h3>Superannuation</h3>
              <p>
                Manage super contributions, compliance with guarantee
                rates, and timely payments to employee funds.
              </p>
            </div>

            <div className="sp-card">
              <span>03</span>
              <h3>Leave Management</h3>
              <p>
                Track annual leave, sick leave, parental leave, and
                long-service leave entitlements accurately.
              </p>
            </div>

            <div className="sp-card">
              <span>04</span>
              <h3>Tax Compliance</h3>
              <p>
                PAYG withholding, tax file declarations, and end-of-year
                payment summaries handled correctly.
              </p>
            </div>

            <div className="sp-card">
              <span>05</span>
              <h3>STP Reporting</h3>
              <p>
                Single Touch Payroll reporting directly to the ATO
                with every pay run, keeping you compliant.
              </p>
            </div>

            <div className="sp-card">
              <span>06</span>
              <h3>Award Interpretation</h3>
              <p>
                Accurate interpretation of modern awards and enterprise
                agreements to ensure correct pay rates.
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
              Payroll done
              <br />
              right, every time.
            </h2>
          </div>

          <div className="sp-process-grid">
            <div className="sp-process-item">
              <span>01</span>
              <h3>Setup</h3>
              <p>Onboard your employees and configure pay schedules.</p>
            </div>
            <div className="sp-process-item">
              <span>02</span>
              <h3>Process</h3>
              <p>Run payroll with accurate calculations every cycle.</p>
            </div>
            <div className="sp-process-item">
              <span>03</span>
              <h3>Report</h3>
              <p>Generate compliant reports and lodge with authorities.</p>
            </div>
            <div className="sp-process-item">
              <span>04</span>
              <h3>Review</h3>
              <p>Ongoing audits to catch errors before they compound.</p>
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
                Payroll you can
                <br />
                trust.
              </h2>
              <p>
                We take the complexity out of payroll so you can
                focus on running your business.
              </p>
            </div>

            <div className="sp-why-points">
              <div>
                <strong>01</strong>
                <h3>100% Accuracy</h3>
                <p>Rigorous checks ensure every pay run is correct, every time.</p>
              </div>
              <div>
                <strong>02</strong>
                <h3>Full Compliance</h3>
                <p>Stay compliant with ATO, Fair Work, and superannuation requirements.</p>
              </div>
              <div>
                <strong>03</strong>
                <h3>Dedicated Support</h3>
                <p>A dedicated payroll specialist who knows your business.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="service-page-cta">
        <span className="sp-label">LET'S SIMPLIFY</span>
        <h2>
          Your payroll
          <br />
          sorted.
        </h2>
        <p>
          Let's make payroll one less thing you have to worry about.
        </p>
        <a href="/contact">Start a Conversation →</a>
      </section>

    </main>
  );
}

export default PayrollServices;
