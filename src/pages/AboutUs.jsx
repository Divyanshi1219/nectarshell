import "./AboutUs.css";
import aboutWhoWeAre from "../assets/about-who-we-are.png";
import aboutVision from "../assets/about-vision.png";
import aboutApproach from "../assets/about-approach.png";
import resultFasterOperations from "../assets/result-faster-operations.png";
import resultBetterDecisions from "../assets/result-better-decisions.png";
import resultSecureSystems from "../assets/result-secure-systems.png";
import resultFinancialAccuracy from "../assets/result-financial-accuracy.png";
import resultScalableGrowth from "../assets/result-scalable-growth.png";

function AboutUs() {
  return (
    <main className="about-page">

      {/* =========================
          ABOUT HERO
      ========================= */}

      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <h1>About Nectarshell</h1>

          <p>
            Empowering Businesses Through Technology &amp; Financial Excellence
          </p>
        </div>
      </section>


      {/* =========================
          WHO WE ARE
      ========================= */}

      <section className="who-we-are-wrapper">
        <div className="who-we-are-container">
          <div className="who-we-are-image">
            <img src={aboutWhoWeAre} alt="Nectarshell team" />
          </div>

          <div className="who-we-are-content">
            <span className="section-label">Who We Are</span>

            <h2>Technology Meets Financial Expertise</h2>

            <p>
              Nectarshell was founded with a simple mission—to provide
              businesses with a single trusted partner for both technology
              and accounting solutions.
            </p>

            <p>
              Instead of managing multiple service providers, our clients
              benefit from integrated digital and financial strategies
              that improve productivity, simplify operations, and support
              long-term business growth.
            </p>

            <a href="/services" className="explore-services">
              Explore Our Services <span>→</span>
            </a>
          </div>
        </div>
      </section>


      {/* =========================
          OUR VISION
      ========================= */}

      <section className="about-split-section vision-section">

        {/* LEFT CONTENT */}

        <div className="about-split-content">

          <span className="section-label">
            Our Vision
          </span>

          <div className="about-main-copy">

            <h2>
              Building Smarter Businesses
            </h2>

            <p>
              Made with care and unconditionally loved by our customers,
              this signature bestseller exceeds all expectations.
            </p>

          </div>

          <a href="/services" className="about-text-link">
            Learn More
          </a>

        </div>


        {/* RIGHT IMAGE */}

        <div className="about-split-image">
        <img
  src={aboutVision}
  alt="about vision"
/>
        </div>

      </section>


      {/* =========================
          OUR APPROACH
      ========================= */}

      <section className="about-split-section approach-section">

        {/* LEFT IMAGE */}

        <div className="about-split-image">
          <img
            src={aboutApproach}
            alt="Nectarshell approach"
          />
        </div>


        {/* RIGHT CONTENT */}

        <div className="about-split-content">

          <span className="section-label">
            Our Approach
          </span>

          <div className="about-main-copy">

            <h2>
              Delivering Results That Matter
            </h2>

            <p>
              Every project begins with understanding your business goals.
            </p>

            <p>
              Our team combines strategic thinking, technical expertise,
              and financial knowledge to develop solutions that are
              scalable, secure, and tailored to your business.
            </p>

            <p>
              We focus on long-term partnerships by providing reliable
              support, transparent communication, and continuous
              improvement.
            </p>

          </div>

          <a href="/contact" className="about-text-link">
            Work With Us
          </a>

        </div>

      </section>
 

<section className="about-values-section">

  <div className="about-value-card">

    <h3>
      Business - First Solutions
    </h3>

    <p>
      Every service is designed around your business objectives,
      ensuring technology and finance work together to drive
      sustainable growth.
    </p>

  </div>


  <div className="about-value-card">

    <h3>
      Quality Without Compromise
    </h3>

    <p>
      From development to financial reporting, we maintain the
      highest standards of accuracy, reliability, and professionalism.
    </p>

  </div>


  <div className="about-value-card">

    <h3>
      Dedicated Client Support
    </h3>

    <p>
      We build lasting relationships by providing responsive support,
      expert guidance, and solutions that evolve with your business.
    </p>

  </div>

</section>


{/* =========================
    RESULTS
========================= */}

<section className="results-section">

  <div className="results-header">

    <span className="results-label">
      RESULTS
    </span>

    <h2>
      The outcomes not just the output.
    </h2>

    <p>
      Every engagement gets judged the same way: did it make the
      business faster, clearer, safer, and more valuable.
      Here's what that looks like in practice.
    </p>

  </div>


  <div className="results-cards">

    {/* Card 1 */}

    <div className="result-card">

      <img
        src={resultFasterOperations}
        alt="Faster Operations"
      />

      <div className="result-card-content">

        <h3>
          Faster Operations
        </h3>

        <p>
          The hours your team loses to manual work, re-entry,
          and workarounds get reclaimed by systems built to run
          without supervision.
        </p>

        <a href="/services">
          See the workflow difference
          <span>→</span>
        </a>

      </div>

    </div>


    {/* Card 2 */}

    <div className="result-card">

      <img
        src={resultBetterDecisions}
        alt="Better Business Decisions"
      />

      <div className="result-card-content">

        <h3>
          Better Business Decisions
        </h3>

        <p>
          Financial data updates in real time instead of at
          month-end, so decisions get made on where the business
          is now — not where it was three weeks ago.
        </p>

        <a href="/services">
          See the reporting difference
          <span>→</span>
        </a>

      </div>

    </div>


    {/* Card 3 */}

    <div className="result-card">

      <img
        src={resultSecureSystems}
        alt="Secure Systems"
      />

      <div className="result-card-content">

        <h3>
          Secure Systems
        </h3>

        <p>
          Monitoring runs continuously, not on a schedule.
          Threats get caught in hours, not discovered in an
          annual audit.
        </p>

        <a href="/services">
          See the security standard
          <span>→</span>
        </a>

      </div>

    </div>


    {/* Card 4 */}

    <div className="result-card">

      <img
        src={resultFinancialAccuracy}
        alt="Financial Accuracy"
      />

      <div className="result-card-content">

        <h3>
          Financial Accuracy
        </h3>

        <p>
          Books that reconcile the first time, tax filings that
          hold up to scrutiny, and numbers you can defend without
          a caveat.
        </p>

        <a href="/services">
          See the accuracy standard
          <span>→</span>
        </a>

      </div>

    </div>


    {/* Card 5 */}

    <div className="result-card featured-result">

      <img
        src={resultScalableGrowth}
        alt="Scalable Growth"
      />

      <div className="result-card-content">

        <h3>
          Scalable Growth
        </h3>

        <p>
          Infrastructure and financial reporting that expand at
          the same pace you do — new markets, new headcount, new
          complexity — without a rebuild.
        </p>

        <a href="/services">
          See what scaling looks like
          <span>→</span>
        </a>

      </div>

    </div>

  </div>

</section>


{/* =========================
    FAQ
========================= */}

<section className="faq-section">

  <div className="faq-header">

    <span className="faq-label">
      FAQ
    </span>

    <h2>
      Frequently Asked Questions
    </h2>

    <p>
      Everything you need to know about our technology and accounting
      services.
    </p>

  </div>


  <div className="faq-list">

    <details className="faq-item" open>

      <summary>
        How long does a website project take?

        <span className="faq-icon"></span>
      </summary>

      <div className="faq-answer">
        Typical website projects take between 4 to 8 weeks from
        discovery to launch, depending on the complexity of the
        design, the number of pages, and the integrations required.
        We provide a detailed timeline during our initial strategy
        phase.
      </div>

    </details>


    <details className="faq-item">

      <summary>
        Can you provide both IT and accounting services?

        <span className="faq-icon"></span>
      </summary>

      <div className="faq-answer">
        Yes. Nectarshell combines technology solutions with
        accounting expertise so businesses can work with one
        trusted partner.
      </div>

    </details>


    <details className="faq-item">

      <summary>
        Do you offer ongoing support after project completion?

        <span className="faq-icon"></span>
      </summary>

      <div className="faq-answer">
        Yes. We provide ongoing support, guidance, and improvements
        after project completion.
      </div>

    </details>


    <details className="faq-item">

      <summary>
        Can you integrate with our existing systems?

        <span className="faq-icon"></span>
      </summary>

      <div className="faq-answer">
        Yes. We can work with your existing systems and integrate
        solutions based on your business requirements.
      </div>

    </details>


    <details className="faq-item">

      <summary>
        How do we get started?

        <span className="faq-icon"></span>
      </summary>

      <div className="faq-answer">
        Contact our team to discuss your requirements and we'll
        guide you through the next steps.
      </div>

    </details>

  </div>

</section>

    </main>
  );
}

export default AboutUs;