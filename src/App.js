import { useState } from "react";
import FirstSection from "./components/FirstSection";
import Hero from "./components/Hero";
import HeroDesign from "./components/HeroDesign";
import Navigation from "./components/Navigation";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

function App() {

  const [navBar, setNavBar] = useState(false);

  const toggle = () => {
    setNavBar(!navBar);
    console.log('navbar clicked');
  }


  return (
    <div className="App">
      <Navigation toggle = {toggle} navBar = {navBar} />
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      {/* <HeroDesign /> */}
    </div>
  );
}

export default App;
