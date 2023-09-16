import React, { useEffect } from "react";
import Aos from "aos";
import "../App.css";

import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import Hero from "../MainPage/Hero";
import Services from "../MainPage/Services";
import Portfolio from "../MainPage/Portfolio";
import Contact from "../MainPage/Contact";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // You can adjust the duration as needed.
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

