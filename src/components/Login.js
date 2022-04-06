import { useState } from "react";

const initialValue = {
  username: "",
  password: "",
};

function Login({ setLoggedIn }) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...value, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setLoggedIn(true);
  }
  return (
    <section id="login">
      <div className="form-wrapper">
      <img
          className="badge"
          src="../badge.png"
          alt="badge-logo"
        />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            required
            value={value.username}
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            required
            value={value.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}
export default Login;
