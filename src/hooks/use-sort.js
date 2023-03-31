import { useState } from "react";

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBY, setSortBy] = useState(null);

  const handleClick = (label) => {
    if (sortBY && label !== sortBY) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  //Only sort if the sortOrder and sortBy are null
  //Make a copy of the data prop
  //Find the correct sortValue function and use it for sorting
  let sortedData = data;
  if (sortOrder && sortBY) {
    const { sortValue } = config.find((column) => column.label === sortBY);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    handleClick,
    sortBY,
    sortOrder,
    sortedData,
  };
}

export default useSort;
