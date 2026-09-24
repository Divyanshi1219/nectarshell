import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  const services = [
    {
      title: "Web Development",
      image: "/web-development.png",
      path: "/web-development",
    },
    {
      title: "Mobile App Development",
      image: "/mobile-app.png",
      path: "/mobile-app-development",
    },
    {
      title: "Cloud Solutions",
      image: "/cloud-solutions.png",
      path: "/cloud-solutions",
    },
    {
      title: "Payroll Services",
      image: "/payroll.png",
      path: "/payroll-services",
    },
    {
      title: "Financial Reporting",
      image: "/financial-reporting.png",
      path: "/financial-reporting",
    },
    {
      title: "Business Advisory",
      image: "/business-advisory.png",
      path: "/business-advisory",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-heading">Explore our services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link to={service.path} className="service-card" key={index}>
              <img src={service.image} alt={service.title} />
              <div className="service-card-title">{service.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;