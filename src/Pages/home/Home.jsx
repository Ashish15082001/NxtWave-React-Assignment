import { useEffect, useState } from "react";
import { fetchResources } from "../../api/fetchResources";
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

export function Home() {
  const [homeData, setHomeData] = useState(null);
  const [ishomeDataLoading, setIsHomeDataLoading] = useState(true);

  async function getResources() {
    try {
      setIsHomeDataLoading(true);
      const response = await fetchResources();
      setHomeData(response);
    } catch (error) {
    } finally {
      setIsHomeDataLoading(false);
    }
  }

  useEffect(() => {
    getResources();
  }, []);

  return (
    <div className={homeStyles[HOME_BODY]}>
      <Navigation navigationList={NAVIGATION_LIST} />
      <h1>inside home</h1>
    </div>
  );
}
