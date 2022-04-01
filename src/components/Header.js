import { useState } from "react";
import { spe, tags } from "../data";

const initialValues = {
  spe: "",
  tag: "",
};

function Header({ scrollBreakPoint }) {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    const other = e.target.name === "spe" ? "tag" : "spe";
    const { name, value } = e.target;
    setValues({ [name]: value, [other]: 0 });
  };

  return (
    <header className={`${scrollBreakPoint && "scrolled-header"}`}>
      <div className="logo">
        <img
          className={`main ${scrollBreakPoint && "scrolled-main"}`}
          src="../logo.png"
          alt="banner-logo"
        />
        <img
          className={`badge ${scrollBreakPoint && "scrolled-badge"}`}
          src="../badge.png"
          alt="badge-logo"
        />
      </div>
      <div className="filters">
        <select
          id="spe"
          name="spe"
          value={values.spe}
          onChange={handleChange}
          className={`spe ${scrollBreakPoint && "scrolled-input"}`}
        >
          <option value={0}>SPE</option>
          {spe.map((site) => {
            return <option value={site}>{site}</option>;
          })}
        </select>
        <select
          id="tag"
          name="tag"
          value={values.tag}
          onChange={handleChange}
          className={`tag ${scrollBreakPoint && "scrolled-input"}`}
        >
          <option value={0}>Tag</option>
          {tags.map((tag) => {
            return <option value={tag}>{tag}</option>;
          })}
        </select>
      </div>
    </header>
  );
}
export default Header;
