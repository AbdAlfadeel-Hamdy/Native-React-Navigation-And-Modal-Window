import Table from "../components/Table";

export interface DataProps {
  name: string;
  color: string;
  score: number;
}

const TablePage = () => {
  const data: DataProps[] = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 7 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];
  return (
    <div>
      <Table data={data} />
    </div>
  );
};
export default TablePage;
