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

          <a href="/services/it-consulting">IT Consulting</a>
          <a href="/services/software-development">
            Software Development
          </a>
          <a href="/services/cloud-solutions">
            Cloud Solutions
          </a>
          <a href="/services/accounting-services">
            Accounting Services
          </a>
          <a href="/services/tax-compliance">
            Tax & Compliance
          </a>
          <a href="/services/business-advisory">
            Business Advisory
          </a>
        </div>


        {/* INDUSTRIES */}
        <div className="footer-column">
          <h3>Industries</h3>

          <a href="/industries/e-commerce">E-commerce</a>
          <a href="/industries/professional-services">
            Professional Services
          </a>
          <a href="/industries/finance">Finance</a>
          <a href="/industries/healthcare">Healthcare</a>
          <a href="/industries/startups-smes">
            Startups & SMEs
          </a>
          <a href="/industries/construction">Construction</a>
        </div>


        {/* COMPANY */}
        <div className="footer-column">
          <h3>Company</h3>

          <a href="/industries/e-commerce">E-commerce</a>
          <a href="/industries/professional-services">
            Professional Services
          </a>
          <a href="/industries/finance">Finance</a>
          <a href="/industries/healthcare">Healthcare</a>
          <a href="/industries/startups-smes">
            Startups & SMEs
          </a>
          <a href="/industries/construction">Construction</a>
        </div>


        {/* RESOURCES */}
        <div className="footer-column">
          <h3>Resources</h3>

          <a href="/case-studies">Case Studies</a>
          <a href="/blog">Blog</a>
          <a href="/faqs">FAQs</a>
          <a href="/support">Support</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>


        {/* STAY UPDATED */}
        <div className="footer-column footer-updated">

          <h3>Stay Updated</h3>

          <div className="footer-email">
            <input
              type="email"
              placeholder="Enter your business email"
            />

            <button type="button">
              →
            </button>
          </div>

          <div className="footer-country">
            <span>India</span>
            <span>⌄</span>
          </div>

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