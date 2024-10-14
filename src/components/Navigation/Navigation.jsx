import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
