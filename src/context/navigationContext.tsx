import React, { SetStateAction, useState } from "react";

const NavigationContext = React.createContext({
  href: "",
  handleNavigation: (url: string) => {},
});

export const NavigationContextProvider = ({ children }: { children: any }) => {
  const [href, setHref] = useState("");

  const handleNavigation = (url: SetStateAction<string>) => {
    setHref(url);
  };

  return (
    <NavigationContext.Provider value={{ href, handleNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
