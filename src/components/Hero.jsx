import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">

        <h1>
          Where Technology Meets Finance
        </h1>

        <p>
          Connecting digital innovation with financial expertise to help
          businesses operate smarter
        </p>

      </div>

    </section>
  );
}

export default Hero;