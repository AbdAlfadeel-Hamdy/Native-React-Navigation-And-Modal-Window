import { DataProps } from "../pages/TablePage";

interface Props {
  data: DataProps[];
}

const Table = ({ data }: Props) => {
  return <div>{data.length} </div>;
};

export default Table;
