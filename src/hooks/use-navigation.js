//Helper component for the components that use context.
//We do not have to import these repeatedly. Just import useNavigation

import { useContext } from "react";
import NavigationContext from "../context/navigation";

function useNavigation() {
  return useContext(NavigationContext);
}

export default useNavigation;
