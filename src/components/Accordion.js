import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

//This will be an Accordion Component
function Accordion({ items }) {
  //Here we keep track of what item is being clicked(index)
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = function (nextIndex) {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });

    // if (expandedIndex === nextIndex) {
    //   setExpandedIndex(-1);
    // } else {
    //   setExpandedIndex(nextIndex);
    // }
  };

  //Now when we loop over the array we check which index is matched with
  //our state and expand it
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {/**Lets check if it matches the condition, then we expand otherwise this
        div won't get printed*/}
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}

export default Accordion;
