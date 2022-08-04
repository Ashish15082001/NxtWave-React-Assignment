import { useEffect, useState } from "react";
import { fetchResources } from "../../api/fetchResources";
import { ResourceCard } from "../../components/cards/resource card/ResourceCard";
import { Navigation } from "../../components/navigation/Navigation";
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

  async function getResources() {
    try {
      setIsResourceLoading(true);
      const responseData = await fetchResources();
      console.log(responseData);
      setResources(responseData);
    } catch (error) {
    } finally {
      setIsResourceLoading(false);
    }
  }

  useEffect(() => {
    getResources();
  }, []);

  return (
    <div className={homeStyles[HOME_BODY]}>
      <Navigation navigationList={NAVIGATION_LIST} />
      <ul className={homeStyles[RESOURCE_LIST]}>
        {isResoureLoading && <h4>loading resources...</h4>}
        {!isResoureLoading &&
          resources.map((resoure) => (
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
