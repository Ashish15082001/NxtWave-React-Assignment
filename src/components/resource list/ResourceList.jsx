import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ResourceCard } from "../../components/cards/resource card/ResourceCard";
import { SearchBar } from "../../components/search bar/SearchBar";
import { RESOURSES_TAB_VALUE } from "../../constants";
import {
  ResourceListItem,
  ResourceItemList,
  SearchBarContainer,
  Message,
} from "./styledComponents";

export function ResourceList({ resources }) {
  const [searchValue, setSearchValue] = useState("");
  const [actualResources, setActualResources] = useState([]);
  const location = useLocation();

  const searchParams =
    location.search === "" ? "resources" : location.search.split("=")[1];

  function onSearchValueChange(event) {
    setSearchValue(event.target.value.trimStart());
  }

  useEffect(() => {
    setActualResources(
      resources.filter((resoure) => {
        if (searchValue !== "") {
          return resoure.title === searchValue;
        } else {
          return searchParams === RESOURSES_TAB_VALUE
            ? true
            : resoure.tag === searchParams;
        }
      })
    );
  }, [resources, searchParams, searchValue]);

  return (
    <ResourceItemList>
      <SearchBarContainer>
        <SearchBar onChange={onSearchValueChange} value={searchValue} />
      </SearchBarContainer>
      {actualResources.length === 0 && <Message>no items</Message>}
      {actualResources.length > 0 &&
        actualResources.map((resoure) => (
          <ResourceListItem key={resoure.id}>
            <ResourceCard
              category={resoure.category}
              description={resoure.description}
              icon_url={resoure.icon_url}
              link={resoure.link}
              title={resoure.title}
              id={resoure.id}
            />
          </ResourceListItem>
        ))}
    </ResourceItemList>
  );
}
