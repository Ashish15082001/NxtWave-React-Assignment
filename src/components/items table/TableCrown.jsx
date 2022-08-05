import { useState } from "react";
import { SortIcon } from "../../icons/SortIcon";
import { SearchBar } from "../search bar/SearchBar";
import {
  FilterMenu,
  FilterMenuList,
  FilterMenuListItem,
  TableTop,
  TableTopLeft,
  TableTopRight,
  TableTopRightSortContainer,
  TableTopTitle,
} from "./styledComponent";

export function TableCrown({
  onSearchInputChange,
  searchInputValue,
  onFilterSelected,
}) {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <TableTop>
      <TableTopLeft>
        <TableTopTitle>Items</TableTopTitle>
      </TableTopLeft>
      <TableTopRight>
        <SearchBar onChange={onSearchInputChange} value={searchInputValue} />
        <TableTopRightSortContainer
          onClick={() => setShowFilter((oldState) => !oldState)}
        >
          <SortIcon />
          <p>SORT</p>
          {showFilter && (
            <FilterMenu>
              <FilterMenuList>
                <FilterMenuListItem>
                  <p>Recently Added</p>
                </FilterMenuListItem>
                <FilterMenuListItem>
                  <p>Ascending</p>
                </FilterMenuListItem>
                <FilterMenuListItem>
                  <p>Descending</p>
                </FilterMenuListItem>
              </FilterMenuList>
            </FilterMenu>
          )}
        </TableTopRightSortContainer>
      </TableTopRight>
    </TableTop>
  );
}
