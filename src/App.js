import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import "preline/preline";
import "./App.css";
import HeroVideo from "./HeroVideo";
import FooterV2 from "./FooterV2";
import NavBarDarkV2 from "./NavBarDarkV2";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBarDarkV2 navBgColor="#000" />
        <HeroVideo />
        <FooterV2 />
      </header>
    </div>
  );
}

export default App;