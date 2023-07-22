export interface TableConfig {
  label: string;
  render: (dataItem: any) => any;
}

interface Props {
  data: any[];
  config: TableConfig[];
  keyFn: (rowData: any) => string;
}

const Table = ({ data, config, keyFn }: Props) => {
  const renderedHeaders = config.map((column) => (
    <th key={column.label}>{column.label}</th>
  ));

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
