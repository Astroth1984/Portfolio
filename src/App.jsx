import { useContext } from "react";
import About from "./components/about/about";
import Company from "./components/companies/Company";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/intro";
import Mp3Player from "./components/mp3player/Mp3Player";
import ProductList from "./components/productList/ProductList";
import Tech from "./components/tech-stack/Tech";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
      <div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
        <Toggle />
        <Intro />
        <About />
        <Tech />
        <Company />
        <ProductList />
        <Contact />
        <Footer />
        <Mp3Player />
      </div>
  );
};

export default App;