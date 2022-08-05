import { SortIcon } from "../../icons/SortIcon";
import { SearchBar } from "../search bar/SearchBar";
import {
  TableTop,
  TableTopLeft,
  TableTopRight,
  TableTopRightSortContainer,
  TableTopTitle,
} from "./styledComponent";

export function ItemsTable({ resource_items }) {
  console.log(resource_items);
  return (
    <TableTop>
      <TableTopLeft>
        <TableTopTitle>Items</TableTopTitle>
      </TableTopLeft>
      <TableTopRight>
        <SearchBar />
        <TableTopRightSortContainer>
                  <SortIcon />
                  <p>SORT</p>
        </TableTopRightSortContainer>
      </TableTopRight>
    </TableTop>
  );
}
