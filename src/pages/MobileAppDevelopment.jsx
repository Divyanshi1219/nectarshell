import { useEffect } from "react";
import "./ServicePage.css";
import mobileAppImage from "../assets/mobile-app-development.jpg";

function MobileAppDevelopment() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="service-page">

      {/* HERO */}
      <section className="service-page-hero">
        <img
          className="service-page-hero-bg"
          src={mobileAppImage}
          alt=""
        />
        <div className="service-page-hero-overlay"></div>

        <div className="service-page-hero-content">

          <span className="service-page-hero-label">
            MOBILE APP DEVELOPMENT
          </span>

          <h1>
            Apps people
            <br />
            love to <span>use.</span>
          </h1>

          <p>
            We build intuitive, high-performance mobile applications that
            keep customers connected and teams productive across iOS and Android.
          </p>

          <div className="service-page-hero-highlights">
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">◎</span>
              <span>iOS &<br />Android</span>
            </div>
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">ϟ</span>
              <span>High<br />Performance</span>
            </div>
            <div className="service-page-hero-highlight">
              <span className="service-page-hero-highlight-icon">▥</span>
              <span>User<br />Focused</span>
            </div>
          </div>

        </div>
      </section>


      {/* INTRO */}
      <section className="service-page-intro">
        <div className="service-page-intro-inner">

          <span className="sp-label">MOBILE APP DEVELOPMENT</span>

          <h2>Experiences people love to use.</h2>

          <p>
            Build intuitive mobile applications that keep customers connected
            and teams productive. Every app is engineered for performance,
            scalability, and seamless user experience across iOS and Android.
          </p>

        </div>
      </section>


      {/* WHAT WE BUILD */}
      <section className="service-page-offers">
        <div className="service-page-container">

          <div className="service-page-heading">
            <span className="sp-label">WHAT WE BUILD</span>
            <h2>
              Mobile solutions built
              <br />
              for your business.
            </h2>
          </div>

          <div className="service-page-grid">

            <div className="sp-card">
              <span>01</span>
              <h3>Native iOS Apps</h3>
              <p>
                Polished iOS applications built with Swift for optimal
                performance and native Apple ecosystem integration.
              </p>
            </div>

            <div className="sp-card">
              <span>02</span>
              <h3>Native Android Apps</h3>
              <p>
                Robust Android applications designed for the full range
                of devices and screen sizes in the Android ecosystem.
              </p>
            </div>

            <div className="sp-card">
              <span>03</span>
              <h3>Cross-Platform Apps</h3>
              <p>
                Single codebase apps using React Native or Flutter that
                deliver native-quality experiences on both platforms.
              </p>
            </div>

            <div className="sp-card">
              <span>04</span>
              <h3>Enterprise Mobile Solutions</h3>
              <p>
                Internal tools and workflow apps that improve team
                productivity and streamline business operations.
              </p>
            </div>

            <div className="sp-card">
              <span>05</span>
              <h3>App Modernisation</h3>
              <p>
                Update legacy mobile apps with modern frameworks,
                improved UX, and better performance.
              </p>
            </div>

            <div className="sp-card">
              <span>06</span>
              <h3>API Integration</h3>
              <p>
                Connect your app to payment gateways, CRMs, analytics,
                and third-party services seamlessly.
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
              From concept to
              <br />
              App Store.
            </h2>
          </div>

          <div className="sp-process-grid">

            <div className="sp-process-item">
              <span>01</span>
              <h3>Discovery</h3>
              <p>Define your app's purpose, audience, and key features.</p>
            </div>

            <div className="sp-process-item">
              <span>02</span>
              <h3>Design</h3>
              <p>Create intuitive wireframes and pixel-perfect interfaces.</p>
            </div>

            <div className="sp-process-item">
              <span>03</span>
              <h3>Develop</h3>
              <p>Build with clean, tested code optimised for performance.</p>
            </div>

            <div className="sp-process-item">
              <span>04</span>
              <h3>Launch</h3>
              <p>Deploy to app stores with ongoing monitoring and support.</p>
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
                We don't just build
                <br />
                apps.
              </h2>
              <p>
                We build mobile experiences designed to solve real
                business problems and grow with your company.
              </p>
            </div>

            <div className="sp-why-points">

              <div>
                <strong>01</strong>
                <h3>Native Quality</h3>
                <p>Smooth, responsive apps that feel native on every device.</p>
              </div>

              <div>
                <strong>02</strong>
                <h3>Scalable Architecture</h3>
                <p>Built to handle growth from hundreds to millions of users.</p>
              </div>

              <div>
                <strong>03</strong>
                <h3>Ongoing Support</h3>
                <p>Continuous updates, monitoring, and feature improvements.</p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="service-page-cta">
        <span className="sp-label">LET'S BUILD</span>
        <h2>
          Your next app
          <br />
          starts here.
        </h2>
        <p>
          Let's create a mobile experience that works as hard
          as your business does.
        </p>
        <a href="/contact">Start a Conversation →</a>
      </section>

    </main>
  );
}

export default MobileAppDevelopment;
