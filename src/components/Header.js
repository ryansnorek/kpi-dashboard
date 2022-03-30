import { useState } from "react";
import { spe } from "../data";

const initialValues = {
  spe: "",
  tag: "",
};

function Header() {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <header>
      <div className="logo">
        <img src="../logo.png" alt="banner-logo" />
      </div>
      <div className="filters">
        <select name="spe" value={values.spe} onChange={handleChange}>
          <option value={0}>SPE</option>
          {spe.map((site) => {
            return <option value={site}>{site}</option>;
          })}
        </select>
        <select name="tag" value={values.tag} onChange={handleChange}>
          <option value={0}>Tag</option>
          {spe.map((site) => {
            return <option value={site}>{site}</option>;
          })}
        </select>
      </div>
    </header>
  );
}
export default Header;
