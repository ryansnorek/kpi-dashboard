import useForm from "../hooks/useForm";

const initialValue = {
  username: "",
  password: "",
};

function Login({ setLoggedIn }) {
  const [values, handleChange] = useForm(initialValue);

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
            value={values.username}
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            required
            value={values.password}
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
