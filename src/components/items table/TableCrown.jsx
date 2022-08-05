import { SortIcon } from "../../icons/SortIcon";
import { SearchBar } from "../search bar/SearchBar";
import {
  TableTop,
  TableTopLeft,
  TableTopRight,
  TableTopRightSortContainer,
  TableTopTitle,
} from "./styledComponent";

export function TableCrown({ onInputChange, value, onFilterChange }) {
  return (
    <TableTop>
      <TableTopLeft>
        <TableTopTitle>Items</TableTopTitle>
      </TableTopLeft>
      <TableTopRight>
        <SearchBar onChange={onInputChange} value={value} />
        <TableTopRightSortContainer>
          <SortIcon />
          <p>SORT</p>
        </TableTopRightSortContainer>
      </TableTopRight>
    </TableTop>
  );
}
