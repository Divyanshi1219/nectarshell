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

      </Routes>

      {/* COMMON FOOTER */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;