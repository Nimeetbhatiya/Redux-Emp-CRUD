import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee } from '../redux/actions';
import { Link } from 'react-router-dom';
import { Table, Container, Button } from 'react-bootstrap';

function ViewEmp() {
  let emp = useSelector((state) => state.empData.employee);
  let dispatch = useDispatch();

  let deleteEmp = (e, id) => {
    e.preventDefault();
    dispatch(deleteEmployee(id));
  }

  return (
    <div className="bg-dark min-vh-100 py-5"> {/* Full dark background */}
      <Container className="text-light">
        <h1 className="text-center mb-4">Employee Data</h1>
        <Table variant="dark" bordered hover responsive className="rounded">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Hobby</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {emp.length > 0 ? (
              emp.map((v, i) => (
                <tr key={v.empid}>
                  <td>{v.empid}</td>
                  <td>{v.name}</td>
                  <td>{v.email}</td>
                  <td>{v.age}</td>
                  <td>{v.password}</td>
                  <td>{v.gender}</td>
                  <td>{v.hobby.join(", ")}</td>
                  <td className="d-flex gap-2">
                    <Link to={`/updateEmp/${v.empid}`}>
                      <Button variant="info" size="sm">Edit</Button>
                    </Link>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={(e) => deleteEmp(e, v.empid)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center text-muted">
                  No Employees Found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ViewEmp;
