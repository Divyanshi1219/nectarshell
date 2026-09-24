import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Nectarshell" />
          </div>

          <p>
            Empowering businesses through innovative technology, expert
            accounting, and digital solutions that inspire growth and
            long-term success.
          </p>
        </div>


        {/* SERVICES */}
        <div className="footer-column">
          <h3>Services</h3>

          <Link to="/web-development">Web Development</Link>
          <Link to="/mobile-app-development">Mobile App Development</Link>
          <Link to="/cloud-solutions">Cloud Solutions</Link>
          <Link to="/business-intelligence">Business Intelligence</Link>
          <Link to="/payroll-services">Payroll Services</Link>
          <Link to="/financial-reporting">Financial Reporting</Link>
          <Link to="/business-advisory">Business Advisory</Link>
          <Link to="/cash-flow-management">Cash Flow Management</Link>
        </div>


        {/* INDUSTRIES */}
        <div className="footer-column">
          <h3>Industries</h3>

          <Link to="/industries">E-commerce</Link>
          <Link to="/industries">Professional Services</Link>
          <Link to="/industries">Finance</Link>
          <Link to="/industries">Healthcare</Link>
          <Link to="/industries">Startups &amp; SMEs</Link>
          <Link to="/industries">Construction</Link>
        </div>


        {/* COMPANY */}
        <div className="footer-column">
          <h3>Company</h3>

          <Link to="/about-us">About Us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
        </div>


      </div>


      {/* COPYRIGHT */}

      <div className="footer-bottom">
        © 2026 Nectarshell. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;