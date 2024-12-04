import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AuthContext from "../context/AuthContext";

import '../styles/Login.css'

export default function Login() {
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormadata] = useState({
    email: "",
    password: "",
  });
  const [clientErrors, setClientErros] = useState(null);
  const [serverErrors, setServerErrors] = useState(null);

  const clientValidationsErrors = {};

  const runClientValidations = () => {
    if (formData.password.trim().length === 0) {
      clientValidationsErrors.password = "password is required";
    }

    if (formData.email.trim().length === 0) {
      clientValidationsErrors.email = "email is required";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    runClientValidations();
    if (Object.keys(clientValidationsErrors).length === 0) {
      try {
        const response = await axios.post(
          "https://role-based-management-task.onrender.com/api/users/login",
          formData
        );
        localStorage.setItem("token", response.data.token);
        const userResponse = await axios.get(
          "https://role-based-management-task.onrender.com/api/users/account",
          { headers: { Authorization: localStorage.getItem("token") } }
        );
        handleLogin(userResponse.data);
        navigate("/dashboard");
      } catch (err) {
        setServerErrors(err.response.data.errors);
      }
      setClientErros({});
    } else {
      setClientErros(clientValidationsErrors);
    }
  };

  return (
    <>
      <div className="login-container">
        <p>Admin credentials - <br /> email: admin@gmail.com <br />password: Admin@123</p>
        <h2>Login page</h2>
        {serverErrors && (
          <div>
            <b>{serverErrors}</b>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormadata({ ...formData, email: e.target.value })
            }
            placeholder="Enter email"
          />
          <br />
          {clientErrors && <p className="clientErrors">{clientErrors.email}</p>}
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormadata({ ...formData, password: e.target.value })
            }
            placeholder="Enter password"
          />{" "}
          <br />
          {clientErrors && (
            <p className="clientErrors">{clientErrors.password}</p>
          )}
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
