import "./App.css";
import Navbar from "./Navbar";
import HeroVideo from "./HeroVideo";
import FooterV2 from "./FooterV2";
import NavBarDarkV2 from "./NavBarDarkV2";

function App() {
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
