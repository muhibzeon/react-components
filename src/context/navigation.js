//Implementation of the Context to share the currentPath and implement the route

import { createContext, useEffect, useState } from "react";

//create context
const NavigationContext = createContext();

function NavigationProvider({ children }) {
  //state to hold the currentPath with we get from window.location.pathname
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  //ALL about the user clicking forward and back
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    //The popstate event of the Window interface is fired when the active history entry changes while the user navigates the session history.
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  //A method to navigate to new url
  const navigate = (to) => {
    //The state object is a JavaScript object which is associated with the new history entry created by pushState().
    window.history.pushState({}, "", to);

    setCurrentPath(to);
  };

  return (
    //Use the context
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

//export NavigationProvider for index.js
export { NavigationProvider };
export default NavigationContext;
