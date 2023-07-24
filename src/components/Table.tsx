import { Fragment } from "react";

export interface TableConfig {
  label: string;
  render: (dataItem: any) => any;
  header?: () => JSX.Element;
  sortValue?: (dataItem: any) => string | number;
}

export interface TableProps {
  data: any[];
  config: TableConfig[];
  keyFn: (rowData: any) => string;
}

const Table = ({ data, config, keyFn }: TableProps) => {
  const renderedHeaders = config.map((column) => {
    if (column.header)
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData: any) => {
    const renderedCells = config.map((column) => (
      <td key={column.label} className="p-2">
        {column.render(rowData)}
      </td>
    ));
    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
