import { useEffect, useState } from "react";
import { fetchResources } from "../../api/fetchResources";
import { Navigation } from "../../components/navigation/Navigation";
import { ResourceList } from "../../components/resource list/ResourceList";
import HomeStyles from "./Home.module.css";

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

export function Home() {
  const [resources, setResources] = useState(null);
  const [isResoureLoading, setIsResourceLoading] = useState(true);

  async function getResources() {
    try {
      setIsResourceLoading(true);
      const responseData = await fetchResources();
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
    <div className={HomeStyles[HOME_BODY]}>
      <Navigation navigationList={NAVIGATION_LIST} />
      {isResoureLoading && (
        <h1 style={{ textAlign: "center", marginTop: "5rem" }}>
          loading resources...
        </h1>
      )}
      {!isResoureLoading && <ResourceList resources={resources} />}
    </div>
  );
}
