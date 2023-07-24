import SortableTable, { SortableTableConfig } from "./SortableTable";

export interface TableData {
  name: string;
  color: string;
  score: number;
}

const TablePage = () => {
  const data: TableData[] = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 7 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];
  const config: SortableTableConfig[] = [
    {
      label: "Name",
      render: (fruit: TableData) => fruit.name,
      sortValue: (fruit: TableData) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit: TableData) => (
        <div className={`p-3 m-2 ${fruit.color}`}></div>
      ),
    },
    {
      label: "Score",
      render: (fruit: TableData) => fruit.score,
      sortValue: (fruit: TableData) => fruit.score,
    },
  ];
  const keyFn = (fruit: TableData) => fruit.name;
  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};
export default TablePage;
