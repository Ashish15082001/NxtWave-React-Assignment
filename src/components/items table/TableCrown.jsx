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

// const DATE_FILTER = "Date";
// const ASCENDING_FILTER = "Ascending";
// const DESCENDING_FILTER = "Descending";

export function TableCrown({
  onSearchInputChange,
  searchInputValue,
  sortInAscending,
  sortInDescending,
  sortByDate,
}) {
  const [showFilter, setShowFilter] = useState(false);
  // const [activeFilter, setActiveFilter] = useState("");
  // console.log(activeFilter);

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
                <FilterMenuListItem
                  onClick={() => {
                    // setActiveFilter(DATE_FILTER);
                    sortByDate();
                  }}
                >
                  <p>Recently Added</p>
                </FilterMenuListItem>
                <FilterMenuListItem
                  onClick={() => {
                    sortInAscending();
                  }}
                >
                  <p>Ascending</p>
                </FilterMenuListItem>
                <FilterMenuListItem onClick={sortInDescending}>
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
