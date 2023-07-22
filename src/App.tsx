import { useContext } from "react";
import Nav from "./pages/nav";
import NavigationContext from "./context/navigationContext";
import About from "./pages/about";
import HomePage from "./pages/home";
import Portals from "./pages/portals";
import TablePage from "./pages/TablePage";

const App = () => {
  const { href } = useContext(NavigationContext);

  return (
    <div>
      <Nav />
      <div>
        {href === "/" && <HomePage />}
        {href === "/about" && <About />}
        {href === "/portals" && <Portals />}
        {href === "/table" && <TablePage />}
      </div>
    </div>
  );
};

export default App;
