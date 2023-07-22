import { useContext } from "react";
import NavigationContext from "../context/navigationContext";

const Link = ({ children, href }: { children: string; href: string }) => {
  const { handleNavigation } = useContext(NavigationContext);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    window.history.pushState({}, "", href);
    handleNavigation(href);
  };
  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
