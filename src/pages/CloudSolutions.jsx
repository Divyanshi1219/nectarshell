import { useEffect } from "react";
import "./ServicePage.css";
import cloudImage from "../assets/cloud-solutions-services.png";

function CloudSolutions() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="service-page">

      {/* HERO */}
      <section className="service-page-hero">
        <img className="service-page-hero-bg" src={cloudImage} alt="" />
        <div className="service-page-hero-overlay"></div>

        <div className="service-page-hero-content">
          <span className="service-page-hero-label">CLOUD SOLUTIONS</span>

          <h1>
            Infrastructure built
            <br />
            for the <span>future.</span>
          </h1>

          <p>
            Modern cloud platforms that provide the flexibility, security,
            and reliability your business needs to scale confidently.
          </p>

          <div className="service-page-hero-highlights">
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">☁</span>
              <span>Cloud<br />Native</span>
            </div>
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">🔒</span>
              <span>Secure &<br />Compliant</span>
            </div>
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">⚡</span>
              <span>Auto<br />Scaling</span>
            </div>
          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className="service-page-intro">
        <div className="service-page-intro-inner">
          <span className="sp-label">CLOUD SOLUTIONS</span>
          <h2>Infrastructure built for the future.</h2>
          <p>
            Modern cloud platforms provide flexibility, security, and reliability.
            We help businesses migrate, manage, and optimize cloud environments
            that scale alongside their growth.
          </p>
        </div>
      </section>


      {/* WHAT WE OFFER */}
      <section className="service-page-offers">
        <div className="service-page-container">

          <div className="service-page-heading">
            <span className="sp-label">WHAT WE OFFER</span>
            <h2>
              Cloud services that
              <br />
              move your business forward.
            </h2>
          </div>

          <div className="service-page-grid">

            <div className="sp-card">
              <span>01</span>
              <h3>Cloud Migration</h3>
              <p>
                Seamless migration from on-premise systems to AWS,
                Azure, or Google Cloud with zero downtime planning.
              </p>
            </div>

            <div className="sp-card">
              <span>02</span>
              <h3>Cloud Architecture</h3>
              <p>
                Design scalable, resilient cloud infrastructure tailored
                to your workload and compliance requirements.
              </p>
            </div>

            <div className="sp-card">
              <span>03</span>
              <h3>DevOps & CI/CD</h3>
              <p>
                Automate deployments, testing, and infrastructure
                management with modern DevOps pipelines.
              </p>
            </div>

            <div className="sp-card">
              <span>04</span>
              <h3>Cloud Security</h3>
              <p>
                Implement robust security controls, encryption,
                and compliance monitoring across your cloud environment.
              </p>
            </div>

            <div className="sp-card">
              <span>05</span>
              <h3>Cost Optimisation</h3>
              <p>
                Analyse and reduce cloud spending through right-sizing,
                reserved instances, and resource efficiency.
              </p>
            </div>

            <div className="sp-card">
              <span>06</span>
              <h3>Managed Cloud Services</h3>
              <p>
                24/7 monitoring, maintenance, and support so you
                can focus on your business, not your servers.
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
              From assessment to
              <br />
              optimised cloud.
            </h2>
          </div>

          <div className="sp-process-grid">
            <div className="sp-process-item">
              <span>01</span>
              <h3>Assess</h3>
              <p>Audit current infrastructure and identify migration paths.</p>
            </div>
            <div className="sp-process-item">
              <span>02</span>
              <h3>Architect</h3>
              <p>Design a cloud architecture optimised for your needs.</p>
            </div>
            <div className="sp-process-item">
              <span>03</span>
              <h3>Migrate</h3>
              <p>Execute migration with minimal business disruption.</p>
            </div>
            <div className="sp-process-item">
              <span>04</span>
              <h3>Optimise</h3>
              <p>Continuously monitor, scale, and improve performance.</p>
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
                Cloud without the
                <br />
                complexity.
              </h2>
              <p>
                We handle the technical complexity so you get the
                benefits of cloud without the operational headaches.
              </p>
            </div>

            <div className="sp-why-points">
              <div>
                <strong>01</strong>
                <h3>Multi-Cloud Expertise</h3>
                <p>AWS, Azure, and Google Cloud — we work across all major platforms.</p>
              </div>
              <div>
                <strong>02</strong>
                <h3>Security First</h3>
                <p>Enterprise-grade security built into every layer of your infrastructure.</p>
              </div>
              <div>
                <strong>03</strong>
                <h3>Cost Transparency</h3>
                <p>Clear reporting on cloud costs with ongoing optimisation recommendations.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="service-page-cta">
        <span className="sp-label">LET'S BUILD</span>
        <h2>
          Your cloud strategy
          <br />
          starts here.
        </h2>
        <p>
          Let's build an infrastructure that scales as fast as your ambitions.
        </p>
        <a href="/contact">Start a Conversation →</a>
      </section>

    </main>
  );
}

export default CloudSolutions;
