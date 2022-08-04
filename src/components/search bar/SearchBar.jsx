import { SearchIcon } from "../../icons/SearchIcon";
import SearchBarStles from "./SearchBar.module.css";

const INPUT_CONTAINER = "input-container";
const LOGO_CONTAINER = "logo-container";
const INPUT = "input";

export function SearchBar({ onChange, value }) {
  return (
    <div className={SearchBarStles[INPUT_CONTAINER]}>
      <span className={SearchBarStles[LOGO_CONTAINER]}>
        <SearchIcon />
      </span>
      <input
        className={SearchBarStles[INPUT]}
        placeholder="Search"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}
