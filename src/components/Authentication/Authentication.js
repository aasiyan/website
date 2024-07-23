import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Authentication.css";
function Authentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const defaultUsername = "admin@aasiyan";
  const defaultPassword = "adminaasiyan@123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === defaultUsername && password === defaultPassword) {
      navigate("/certificateGenerator");
    } else {
      alert("Incorrect username or password");
    }
  };

  // alert("only admin can access the certificate page!!");

  return (
    <>
      <h1 className="auth-note">
        Only admin can able to access the certificate
      </h1>
      <form onSubmit={handleLogin}>
        <div className="auth-card">
          <h2 className="auth-head">Login</h2>

          <div>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
}

export default Authentication;
