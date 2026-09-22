import { useEffect, useRef } from "react";
import "./WebDevelopment.css";

import webDevelopmentBackground from "../assets/web-development-background.png";
import webDevelopmentCharacter from "../assets/web-development-character.png";

function WebDevelopment() {

  const characterRef = useRef(null);

  useEffect(() => {

    const hero = document.querySelector(".web-development-hero");

    if (!hero) return;

    const handleMouseMove = (event) => {

      if (window.innerWidth <= 600) return;

      const rect = hero.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = ((x - centerX) / centerX) * 18;
      const moveY = ((y - centerY) / centerY) * 10;

      if (characterRef.current) {

        characterRef.current.style.transform =
          `translate3d(${moveX}px, ${moveY}px, 0)`;

      }

    };

    hero.addEventListener("mousemove", handleMouseMove);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  return (
      
    <main className="web-development-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="web-development-hero">
            {/* Hero Content */}
<div className="web-development-hero-content">

<span className="hero-section-label">
  WEB DEVELOPMENT
</span>

<h1>
  Websites
  <br />
  that <span>work.</span>
</h1>

<p>
  We build modern, high-performing websites that turn
  your ideas into digital experiences that work for your business.
</p>

<div className="hero-highlights">

  <div className="hero-highlight">
    <span className="hero-highlight-icon">▣</span>
    <span>
      Modern
      <br />
      Design
    </span>
  </div>

  <div className="hero-highlight">
    <span className="hero-highlight-icon">ϟ</span>
    <span>
      Fast &
      <br />
      Responsive
    </span>
  </div>

  <div className="hero-highlight">
    <span className="hero-highlight-icon">▥</span>
    <span>
      Business
      <br />
      Growth
    </span>
  </div>

</div>

</div>

        {/* Background Image */}
        <img
          className="web-development-background"
          src={webDevelopmentBackground}
          alt=""
        />

        {/* Movable Character */}
        <img
          ref={characterRef}
          className="web-development-character"
          src={webDevelopmentCharacter}
          alt=""
        />

      </section>
      


      {/* =========================================
          INTRO
      ========================================= */}

      <section className="web-development-intro">

        <div className="web-development-intro-inner">

          <span className="section-label">
            WEB DEVELOPMENT
          </span>

          <h2>
            Websites that work.
          </h2>

          <p>
            Your website is more than a digital presence—
            it's your most valuable business asset. We design
            and develop modern, responsive websites that combine
            exceptional user experience with measurable business
            results.
          </p>

        </div>

      </section>


      {/* =========================================
          WHAT WE BUILD
      ========================================= */}

      <section className="web-development-services">

        <div className="web-development-container">

          <div className="web-development-heading">

            <span className="section-label">
              WHAT WE BUILD
            </span>

            <h2>
              Digital experiences built
              <br />
              for your business.
            </h2>

          </div>


          <div className="web-development-grid">

            <div className="web-service-card">

              <span>01</span>

              <h3>
                Business Websites
              </h3>

              <p>
                Modern websites that communicate your
                brand clearly and turn visitors into customers.
              </p>

            </div>


            <div className="web-service-card">

              <span>02</span>

              <h3>
                E-commerce
              </h3>

              <p>
                High-converting online stores designed
                for smooth shopping experiences.
              </p>

            </div>


            <div className="web-service-card">

              <span>03</span>

              <h3>
                Shopify Development
              </h3>

              <p>
                Custom Shopify experiences built around
                your products, customers and business goals.
              </p>

            </div>


            <div className="web-service-card">

              <span>04</span>

              <h3>
                Custom Web Applications
              </h3>

              <p>
                Scalable web applications designed to
                solve real business problems.
              </p>

            </div>


            <div className="web-service-card">

              <span>05</span>

              <h3>
                Responsive Development
              </h3>

              <p>
                Seamless experiences across desktop,
                tablet and mobile devices.
              </p>

            </div>


            <div className="web-service-card">

              <span>06</span>

              <h3>
                Website Revamps
              </h3>

              <p>
                Transform outdated websites into faster,
                cleaner and more effective digital experiences.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          PROCESS
      ========================================= */}

      <section className="web-development-process">

        <div className="web-development-container">

          <div className="web-development-heading">

            <span className="section-label">
              OUR APPROACH
            </span>

            <h2>
              From idea to
              <br />
              something that works.
            </h2>

          </div>


          <div className="process-grid">

            <div className="process-item">

              <span>01</span>

              <h3>
                Discover
              </h3>

              <p>
                Understand your business, audience and goals.
              </p>

            </div>


            <div className="process-item">

              <span>02</span>

              <h3>
                Design
              </h3>

              <p>
                Create intuitive interfaces around your brand.
              </p>

            </div>


            <div className="process-item">

              <span>03</span>

              <h3>
                Develop
              </h3>

              <p>
                Turn designs into fast, responsive experiences.
              </p>

            </div>


            <div className="process-item">

              <span>04</span>

              <h3>
                Launch
              </h3>

              <p>
                Test, refine and bring your website to life.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          WHY NECTARSHELL
      ========================================= */}

      <section className="web-development-why">

        <div className="web-development-container">

          <div className="why-content">

            <span className="section-label">
              WHY NECTARSHELL
            </span>

            <h2>
              We don't just build
              <br />
              websites.
            </h2>

            <p>
              We build digital experiences designed to
              support your business today and grow with it tomorrow.
            </p>

          </div>


          <div className="why-points">

            <div>

              <strong>01</strong>

              <h3>
                Modern Design
              </h3>

              <p>
                Clean interfaces designed around your customers.
              </p>

            </div>


            <div>

              <strong>02</strong>

              <h3>
                Performance
              </h3>

              <p>
                Fast, responsive and reliable experiences.
              </p>

            </div>


            <div>

              <strong>03</strong>

              <h3>
                Business Results
              </h3>

              <p>
                Every design decision has a purpose.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="web-development-cta">

        <span className="section-label">
          LET'S BUILD
        </span>

        <h2>
          Your next website
          <br />
          starts here.
        </h2>

        <p>
          Let's create something that works as hard
          as your business does.
        </p>

        <a href="/contact">
          Start a Conversation →
        </a>

      </section>

    </main>
  );
}

export default WebDevelopment;