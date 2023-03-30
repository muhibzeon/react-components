//Drop down page, parent element of Dropdown component

import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [select, setSelect] = useState(null);

  const handleSelect = (option) => {
    setSelect(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return <Dropdown options={options} value={select} onChange={handleSelect} />;
}

export default DropdownPage;
