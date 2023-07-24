import { useState } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import Table, { TableProps } from "../components/Table";

export interface SortableTableConfig {
  label: string;
  render: (dataItem: any) => any;
  sortValue?: (dataItem: any) => string | number;
}

const SortableTable = (props: TableProps) => {
  const { config, data } = props;
  const [sortOrder, setSortOrder] = useState<null | string>(null);
  const [sortBy, setSortBy] = useState<null | string>(null);

  const handleClick = (label: string) => {
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

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

const getIcons = (
  label: string,
  sortBy: string | null,
  sortOrder: string | null
) => {
  if (!sortOrder || sortBy !== label)
    return (
      <div>
        <GoArrowUp size={12} />
        <GoArrowDown size={12} />
      </div>
    );
  if (sortOrder === "asc")
    return (
      <div>
        <GoArrowUp size={12} />
      </div>
    );
  return (
    <div>
      <GoArrowDown size={12} />
    </div>
  );
};

export default SortableTable;
