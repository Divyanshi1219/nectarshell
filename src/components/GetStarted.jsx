import "./GetStarted.css";

function GetStarted() {
  const images = [
    "/cta-1.png",
    "/cta-2.png",
    "/cta-3.png",
    "/cta-4.png",
    "/cta-5.png",
    "/cta-6.png",
    "/cta-7.png",
  ];

  return (
    <section className="get-started-section">

      <div className="get-started-content">

        <p className="get-started-label">
          READY TO GET STARTED?
        </p>

        <h2>
          Let's Build Something Great Together
        </h2>

        <p className="get-started-description">
          Whether you need technology solutions, accounting expertise,
          or complete digital transformation, our team is ready to help.
        </p>

        <div className="get-started-buttons">
          <a href="/services" className="get-started-primary">
            Get Started
          </a>

          <a href="/contact" className="get-started-secondary">
            Contact Us
          </a>
        </div>

      </div>

      <div className="get-started-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Nectarshell ${index + 1}`}
          />
        ))}
      </div>

      <h3 className="get-started-brand">
        NECTARSHELL
      </h3>

    </section>
  );
}

export default GetStarted;