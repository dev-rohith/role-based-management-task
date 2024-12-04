import axios from "axios";
import { useEffect, useState } from "react";

import '../../styles/manageusers.css'

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const respose = await axios.get("https://role-based-management-task.onrender.com/api/users", {
          headers: { Authorization: localStorage.getItem("token") },
        });
        console.log(respose.data);
        setUsers(respose.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleCheckboxChange = async (id) => {
    const currenUser = users.find((user) => user._id === id);
    const toggleUser = currenUser.status === "active" ? "diactive" : "active";
    try {
      const response = await axios.put(
        `https://role-based-management-task.onrender.com/api/users/${id}/status`,
        { status: toggleUser },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      console.log(response.data);
      setUsers(
        users.map((user) => {
          if (user._id === id) {
            return { ...user, status: toggleUser };
          }
          return user;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <span>LOADING ....... </span>;
  return (
    <>
      <table className="user-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((ele) => (
            <tr key={ele._id} className="table-row">
              <td>
                <input
                  type="checkbox"
                  checked={ele.status === "active"}
                  disabled={ele.role === "admin"}
                  value={ele.status}
                  onChange={() => handleCheckboxChange(ele._id)}
                  className="status-checkbox"
                />
              </td>
              <td>{ele.email}</td>
              <td>{ele.role}</td>
              <td>{ele.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default ManageUsers;
