import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

import AboutUs from "./pages/AboutUs";
import ServicesPage from "./pages/Services";
import Industries from "./pages/Industries";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import WebDevelopment from "./pages/WebDevelopment";
import Login from "./pages/Login";

// New Services Pages
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import CloudSolutions from "./pages/CloudSolutions";
import BusinessIntelligence from "./pages/BusinessIntelligence";
import PayrollServices from "./pages/PayrollServices";
import FinancialReporting from "./pages/FinancialReporting";
import BusinessAdvisory from "./pages/BusinessAdvisory";
import CashFlowManagement from "./pages/CashFlowManagement";

function App() {
  return (
    <BrowserRouter>

      {/* COMMON HEADER */}
      <Header />

      <Routes>

        {/* =========================
            HOME
        ========================= */}

        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <GetStarted />
            </>
          }
        />

        {/* =========================
            ABOUT US
        ========================= */}

        <Route
          path="/about-us"
          element={<AboutUs />}
        />

        {/* =========================
            SERVICES
        ========================= */}

        <Route
          path="/services"
          element={<ServicesPage />}
        />

        {/* =========================
            WEB DEVELOPMENT
        ========================= */}

        <Route
          path="/web-development"
          element={<WebDevelopment />}
        />

        <Route
          path="/mobile-app-development"
          element={<MobileAppDevelopment />}
        />

        <Route
          path="/cloud-solutions"
          element={<CloudSolutions />}
        />

        <Route
          path="/business-intelligence"
          element={<BusinessIntelligence />}
        />

        <Route
          path="/payroll-services"
          element={<PayrollServices />}
        />

        <Route
          path="/financial-reporting"
          element={<FinancialReporting />}
        />

        <Route
          path="/business-advisory"
          element={<BusinessAdvisory />}
        />

        <Route
          path="/cash-flow-management"
          element={<CashFlowManagement />}
        />

        {/* =========================
            INDUSTRIES
        ========================= */}

        <Route
          path="/industries"
          element={<Industries />}
        />

        {/* =========================
            CAREERS
        ========================= */}

        <Route
          path="/careers"
          element={<Careers />}
        />

        {/* =========================
            CONTACT
        ========================= */}

        <Route
          path="/contact"
          element={<Contact />}
        />
        
        <Route path="/login"
         element={<Login />} />

      </Routes>

      {/* COMMON FOOTER */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;