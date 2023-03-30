//Here is the tricky component
//We'll utilize the the Context to implement route

import classNames from "classnames";
//useNavigation  to get the context
import useNavigation from "../hooks/use-navigation";

//The props are provided by the parent Sidebar.js
function Link({ to, children, className, activeClassName }) {
  //We are importing the navigate and currentPath from the Context
  const { navigate, currentPath } = useNavigation();

  //Classes for styling
  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  //lets handle the click.
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    //Provide the path to the context method
    navigate(to);
  };

  //Anchor to the clicking action - Providing the routing
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
