import Table, { TableProps } from "../components/Table";
import useSort from "../hooks/use-sort";
import getIcons from "../lib/get-icons";

export interface SortableTableConfig {
  label: string;
  render: (dataItem: any) => any;
  sortValue?: (dataItem: any) => string | number;
}

const SortableTable = (props: TableProps) => {
  const { config, data } = props;
  const { setSortColumn, sortBy, sortOrder, sortedData } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
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

export default SortableTable;
