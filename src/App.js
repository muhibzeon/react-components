//This is the App component where all the components are tied together and make the
//App harmonious

import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import Routes from "./components/Routes";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Routes path="/accordion">
          <AccordionPage />
        </Routes>

        <Routes path="/">
          <DropdownPage />
        </Routes>

        <Routes path="/buttons">
          <ButtonPage />
        </Routes>

        <Routes path="/modal">
          <ModalPage />
        </Routes>

        <Routes path="/table">
          <TablePage />
        </Routes>

        <Routes path="/counter">
          <CounterPage initialCounter={10} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
