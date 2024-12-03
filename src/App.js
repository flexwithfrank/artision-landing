import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "preline/preline";
import "./App.css";
import HeroVideo from "./HeroVideo";
import FooterV2 from "./FooterV2";
import NavBarV4 from "./nav/navbarV4";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBarV4
          bgColor="#000"
          color="#FFF"
          logo="https://ik.imagekit.io/dy6awnd3c/artesion-logo-website-V2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673416133437"
        />
        <HeroVideo />
        <FooterV2 />
      </header>
    </div>
  );
}

export default App;
