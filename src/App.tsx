import { Routes, Route, Navigate } from "react-router-dom";
// import { About } from "./components/About";
// import { Cta } from "./components/Cta";
// import { FAQ } from "./components/FAQ";
// import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
// import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
// import { Newsletter } from "./components/Newsletter";
// import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
// import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
// import { Team } from "./components/Team";
// import { Testimonials } from "./components/Testimonials";
import ViacolLanding from "./components/Landing";
import Login from "./components/Login";
import Terms from "./components/Terms"; // ⬅️ nueva importación
import { useAuth } from "./lib/auth-context";

import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      {/* <About /> */}
      {/* <HowItWorks /> */}
      {/* <Features /> */}
      {/* <Services /> */}
      {/* <Cta /> */}
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      {/* <FAQ /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<ViacolLanding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/terms-and-conditions" element={<Terms />} /> //Despues del Login, determine esta ruta como la única ruta publica, esto debido a que el proyecto es meramente front con practicamente nada de seguridad.
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
