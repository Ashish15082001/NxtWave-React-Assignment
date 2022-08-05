import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ResourceCard } from "../../components/cards/resource card/ResourceCard";
import { SearchBar } from "../../components/search bar/SearchBar";
import { RESOURSES_TAB_VALUE } from "../../constants";
import { ResourceListItem, ResourceItemList } from "./styledComponents";

export function ResourceList({ resources }) {
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation();

  const searchParams =
    location.search === "" ? "resources" : location.search.split("=")[1];

  function onSearchValueChange(event) {
    setSearchValue(event.target.value.trimStart());
  }

  resources = resources.filter((resoure) => {
    if (searchValue !== "") {
      return resoure.title === searchValue;
    } else {
      return searchParams === RESOURSES_TAB_VALUE
        ? true
        : resoure.tag === searchParams;
    }
  });

  return (
    <ResourceItemList>
      <SearchBar onChange={onSearchValueChange} value={searchValue} />
      {resources.map((resoure) => (
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
