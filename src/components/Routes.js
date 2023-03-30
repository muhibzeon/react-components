//Routes is responsible for rendering the Component
import useNavigation from "../hooks/use-navigation";

//App.js provides the props
//Whatever we pass as the value will be the children
function Routes({ path, children }) {
  const { currentPath } = useNavigation();

  //This is the main trick. With Link and Sidebar component we handle the changing of
  //the path. So whichever path matches in the Routes, it renders that Component
  //SO we always look for the value of the currentPath
  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Routes;
