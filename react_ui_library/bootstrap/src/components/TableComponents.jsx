import { Table } from "react-bootstrap";
const TableComponets = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>first Name</th>
          <th>Last Name</th>
          <th>age</th>
        </tr>

        <tr>
          <td>1</td>
          <td>chanuka</td>
          <td>Randitha</td>
          <td rowSpan={2}>23</td>
        </tr>

        <tr>
          <td>2</td>
          <td>kamal</td>
          <td>perera</td>
        </tr>

        <tr>
          <td>1</td>
          <td colSpan={2}>sunil</td>

          <td>25</td>
        </tr>
      </thead>
    </Table>
  );
};

export default TableComponets;
