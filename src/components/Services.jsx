import "./Services.css";

function Services() {
  const services = [
    {
      title: "Web Development",
      image: "/web-development.png",
    },
    {
      title: "Mobile App Development",
      image: "/mobile-app.png",
    },
    {
      title: "Cloud Solutions",
      image: "/cloud-solutions.png",
    },
    {
      title: "Payroll Services",
      image: "/payroll.png",
    },
    {
      title: "Financial Reporting",
      image: "/financial-reporting.png",
    },
    {
      title: "Business Advisory",
      image: "/business-advisory.png",
    },
  ];

  return (
    <section className="services-section">

      <div className="services-container">

        <h2 className="services-heading">
          Explore our services
        </h2>

        <div className="services-grid">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <img
                src={service.image}
                alt={service.title}
              />

              <div className="service-card-title">
                {service.title}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;