import React from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Footer from "../components/Footer";

const ServicesPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 bg-mesh-dark min-h-screen">
        <Services />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;

