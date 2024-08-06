import React from "react";
import Header from "../components/Common/Header";
import LandingPageComponent from "../components/LandingPage/Intro";
import Footer from "../components/Common/Footer/footer";

function HomePage() {
  return (
    <div>
      <Header />
      <LandingPageComponent />
      <Footer />
    </div>
  );
}

export default HomePage;