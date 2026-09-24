import { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/nectarshell-logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import SearchModal from "./SearchModal";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      await signOut(auth);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : "header--transparent"}`}>
      <div className="header-container">

        {/* =========================
            LOGO
        ========================= */}
        <Link to="/" className="logo">
          <img src={logo} alt="Nectarshell" />
        </Link>


        {/* =========================
            NAVIGATION
        ========================= */}
        <nav className="nav-menu">

          {/* =========================
              ABOUT US
          ========================= */}
          <div className="nav-dropdown">

            <Link
              to="/about-us"
              className="nav-dropdown-button"
            >
              About Us
            </Link>

            <div className="mega-menu">

              {/* Left Content */}
              <div className="mega-menu-intro">

                <h2>About Us</h2>

                <p>
                  Get to know the people and purpose behind our brand —
                  our story, our values, and the team driving everything we do.
                </p>

                <Link
                  to="/about-us"
                  className="mega-learn-more"
                >
                  Learn more <span>→</span>
                </Link>

              </div>


              {/* Right Links */}
              <div className="mega-menu-links single-column">

                <Link to="/about-us">
                  <span className="mega-arrow">›</span>
                  Our Story
                </Link>

                <Link to="/about-us">
                  <span className="mega-arrow">›</span>
                  Leadership
                </Link>

                <Link to="/about-us">
                  <span className="mega-arrow">›</span>
                  Careers
                </Link>

              </div>

            </div>

          </div>


          {/* =========================
              SERVICES
          ========================= */}
          <div className="nav-dropdown">

            <Link
              to="/services"
              className="nav-dropdown-button"
            >
              Services
            </Link>

            <div className="mega-menu services-mega">

              {/* Left Content */}
              <div className="mega-menu-intro">

                <h2>Services</h2>

                <p>
                  Explore the full range of services we offer,
                  built to help modern businesses move faster and grow smarter.
                </p>

                <Link
                  to="/services"
                  className="mega-learn-more"
                >
                  Learn more <span>→</span>
                </Link>

              </div>


              {/* Right Content */}
              <div className="mega-menu-links services-links">

                {/* Technology */}
                <div className="mega-column">

                  <h3>Technology</h3>

                  {/* WEB DEVELOPMENT */}
                  <Link to="/web-development">
                    <span className="mega-arrow">›</span>
                    Web Development
                  </Link>

                  <Link to="/services">
                    <span className="mega-arrow">›</span>
                    Mobile App Development
                  </Link>

                  <Link to="/services">
                    <span className="mega-arrow">›</span>
                    Cloud Solutions
                  </Link>

                  <Link to="/services">
                    <span className="mega-arrow">›</span>
                    Business Intelligence
                  </Link>

                </div>


                {/* Accounting */}
                <div className="mega-column">

                  <h3>Accounting</h3>

                  <Link to="/services">
                    <span className="mega-arrow">›</span>
                    Payroll Services
                  </Link>

                  <Link to="/services">
                    <span className="mega-arrow">›</span>
                    Financial Reporting
                  </Link>

                  <Link to="/services">
                    <span className="mega-arrow">›</span>
                    Business Advisory
                  </Link>

                  <Link to="/services">
                    <span className="mega-arrow">›</span>
                    Cash Flow Management
                  </Link>

                </div>

              </div>

            </div>

          </div>


          {/* =========================
              INDUSTRIES
          ========================= */}
          <div className="nav-dropdown">

            <Link
              to="/industries"
              className="nav-dropdown-button"
            >
              Industries
            </Link>

            <div className="mega-menu">

              {/* Left Content */}
              <div className="mega-menu-intro">

                <h2>Industries</h2>

                <p>
                  Deep expertise across the sectors we serve,
                  with solutions shaped around real industry challenges.
                </p>

                <Link
                  to="/industries"
                  className="mega-learn-more"
                >
                  Learn more <span>→</span>
                </Link>

              </div>


              {/* Industry Links */}
              <div className="mega-menu-links single-column">

                <Link to="/industries">
                  <span className="mega-arrow">›</span>
                  E-commerce
                </Link>

                <Link to="/industries">
                  <span className="mega-arrow">›</span>
                  Professional Services
                </Link>

                <Link to="/industries">
                  <span className="mega-arrow">›</span>
                  Finance
                </Link>

                <Link to="/industries">
                  <span className="mega-arrow">›</span>
                  Healthcare
                </Link>

                <Link to="/industries">
                  <span className="mega-arrow">›</span>
                  Startups & SMEs
                </Link>

                <Link to="/industries">
                  <span className="mega-arrow">›</span>
                  Construction
                </Link>

              </div>

            </div>

          </div>


          {/* =========================
              CAREERS
          ========================= */}
          <div className="nav-dropdown">

            <Link
              to="/careers"
              className="nav-dropdown-button"
            >
              Careers
            </Link>

            <div className="mega-menu">

              {/* Left Content */}
              <div className="mega-menu-intro">

                <h2>Careers</h2>

                <p>
                  Join a team that values craft, curiosity, and balance.
                  Discover where your career can go next.
                </p>

                <Link
                  to="/careers"
                  className="mega-learn-more"
                >
                  Learn more <span>→</span>
                </Link>

              </div>


              {/* Career Links */}
              <div className="mega-menu-links single-column">

                <Link to="/careers">
                  <span className="mega-arrow">›</span>
                  Open Positions
                </Link>

                <Link to="/careers">
                  <span className="mega-arrow">›</span>
                  Culture
                </Link>

                <Link to="/careers">
                  <span className="mega-arrow">›</span>
                  Benefits
                </Link>

              </div>

            </div>

          </div>


          {/* =========================
              CONTACT US
          ========================= */}
          <div className="nav-dropdown">

            <Link
              to="/contact"
              className="nav-dropdown-button"
            >
              Contact Us
            </Link>

            <div className="mega-menu">

              {/* Left Content */}
              <div className="mega-menu-intro">

                <h2>Contact Us</h2>

                <p>
                  Have a question or a project in mind?
                  Our team is ready when you are — reach out any time.
                </p>

                <Link
                  to="/contact"
                  className="mega-learn-more"
                >
                  Learn more <span>→</span>
                </Link>

              </div>


              {/* Contact Links */}
              <div className="mega-menu-links single-column">

                <Link to="/contact">
                  <span className="mega-arrow">›</span>
                  General Inquiry
                </Link>

                <Link to="/contact">
                  <span className="mega-arrow">›</span>
                  Support
                </Link>

                <Link to="/contact">
                  <span className="mega-arrow">›</span>
                  Sales
                </Link>

              </div>

            </div>

          </div>

        </nav>


        {/* =========================
            RIGHT ICONS
        ========================= */}
        <div className="header-icons">

          {/* Search */}
          <button
            className="header-icon"
            type="button"
            aria-label="Search"
            onClick={() => setIsSearchOpen(true)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
              />

              <line
                x1="16.5"
                y1="16.5"
                x2="22"
                y2="22"
              />
            </svg>
          </button>


          {/* Account */}
          {currentUser ? (
            <button
              className="header-icon"
              type="button"
              aria-label="Logout"
              onClick={handleLogout}
              title={`Logged in as ${currentUser.displayName || currentUser.email}. Click to logout.`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </button>
          ) : (
            <Link
              to="/login"
              className="header-icon"
              aria-label="Account"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
              </svg>
            </Link>
          )}

        </div>

      </div>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}

export default Header;