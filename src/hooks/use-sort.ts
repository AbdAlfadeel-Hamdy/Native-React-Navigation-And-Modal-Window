import { useState } from "react";
import { TableConfig } from "../components/Table";

const useSort = (data: any[], config: TableConfig[]) => {
  const [sortOrder, setSortOrder] = useState<null | string>(null);
  const [sortBy, setSortBy] = useState<null | string>(null);

  const setSortColumn = (label: string) => {
    if (!sortOrder || label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy)!;
    if (sortValue) {
      sortedData = [...data].sort((a: any, b: any): number => {
        const valueA = sortValue(a);
        const valueB = sortValue(b);

        const reverseOrder = sortOrder === "asc" ? 1 : -1;
        if (typeof valueA === "string" && typeof valueB === "string") {
          return valueA.localeCompare(valueB) * reverseOrder;
        } else if (typeof valueA === "number" && typeof valueB === "number") {
          return (valueA - valueB) * reverseOrder;
        }
        return 1;
      });
    }
  }

  return {
    setSortColumn,
    sortBy,
    sortOrder,
    sortedData,
  };
};

export default useSort;
