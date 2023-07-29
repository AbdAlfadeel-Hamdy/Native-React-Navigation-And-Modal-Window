import { useContext } from "react";
import Nav from "./pages/nav";
import NavigationContext from "./context/navigationContext";
import About from "./pages/about";
import HomePage from "./pages/home";
import Portals from "./pages/portals";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

const App = () => {
  const { href } = useContext(NavigationContext);

  return (
    <div className="p-4">
      <Nav />
      <div>
        {href === "/" && <HomePage />}
        {href === "/about" && <About />}
        {href === "/portals" && <Portals />}
        {href === "/table" && <TablePage />}
        {href === "/counter" && <CounterPage initialCounter={6} />}
      </div>
    </div>
  );
};

export default App;
