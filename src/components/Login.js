import useForm from "../hooks/useForm";

const initialValue = {
  username: "",
  password: "",
};

function Login({ setLoggedIn }) {
  const [value, handleChange] = useForm(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };
  return (
    <section id="login">
      <div className="form-wrapper">
        <img className="badge" src="../badge.png" alt="badge-logo" />
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
