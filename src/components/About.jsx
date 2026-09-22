import "./About.css";

function About() {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* LEFT - IMAGE */}
        <div className="about-image">
          <img
            src="/about-image.png"
            alt="Nectarshell team"
          />
        </div>


        {/* RIGHT - CONTENT */}
        <div className="about-content">

          <p className="about-label">
            ABOUT NECTARSHELL
          </p>

          <h2>
            Empowering Businesses Through
            Technology & Accounting
          </h2>

          <p className="about-text">
            Nectarshell was built on a simple idea — the businesses that
            grow fastest are the ones where technology and finance work
            together, not in silos. We combine modern IT solutions with
            professional accounting expertise, giving businesses one
            trusted partner instead of two disconnected vendors.
          </p>

          <p className="about-text">
            From building the systems that run your business to managing
            the numbers that measure it, our team helps you streamline
            operations, improve efficiency, and grow with confidence.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;