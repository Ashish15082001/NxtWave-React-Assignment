import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchResources } from "../../api/fetchResources";
import { ResourceCard } from "../../components/cards/resource card/ResourceCard";
import { Navigation } from "../../components/navigation/Navigation";
import { SearchBar } from "../../components/search bar/SearchBar";
import { RESOURSES_TAB_VALUE } from "../../constants";
import homeStyles from "./home.module.css";

const NAVIGATION_LIST = [
  {
    destinationUrl: "/home?tag_name=resources",
    destinationName: "Resources",
  },
  {
    destinationUrl: "/home?tag_name=request",
    destinationName: "Request",
  },
  {
    destinationUrl: "/home?tag_name=user",
    destinationName: "User",
  },
];
const HOME_BODY = "home-body";
const RESOURCE_LIST = "resource-list";
const RESOURCE_LIST_ITEM = "resource-list-item";

export function Home() {
  const [resources, setResources] = useState(null);
  const [isResoureLoading, setIsResourceLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation();

  const searchParams =
    location.search === "" ? "resources" : location.search.split("=")[1];

  function onSearchValueChange(event) {
    setSearchValue(event.target.value.trimStart());
  }

  async function getResources() {
    try {
      setIsResourceLoading(true);
      const responseData = await fetchResources();
      // console.log(responseData);
      setResources(responseData);
    } catch (error) {
    } finally {
      setIsResourceLoading(false);
    }
  }

  useEffect(() => {
    getResources();
  }, []);

  console.log(searchValue);

  return (
    <div className={homeStyles[HOME_BODY]}>
      <Navigation navigationList={NAVIGATION_LIST} />
      <ul className={homeStyles[RESOURCE_LIST]}>
        <SearchBar onChange={onSearchValueChange} value={searchValue} />
        {isResoureLoading && <h4>loading resources...</h4>}
        {!isResoureLoading &&
          resources
            .filter((resoure) => {
              if (searchValue !== "") {
                return resoure.title === searchValue;
              } else {
                return searchParams === RESOURSES_TAB_VALUE
                  ? true
                  : resoure.tag === searchParams;
              }
            })
            .map((resoure) => (
              <li key={resoure.id} className={homeStyles[RESOURCE_LIST_ITEM]}>
                <ResourceCard
                  category={resoure.category}
                  description={resoure.description}
                  icon_url={resoure.icon_url}
                  link={resoure.link}
                  title={resoure.title}
                />
              </li>
            ))}
      </ul>
    </div>
  );
}
