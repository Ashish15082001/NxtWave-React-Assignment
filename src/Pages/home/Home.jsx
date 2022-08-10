import { Navigation } from "../../components/navigation/Navigation";
import { ResourceList } from "../../components/resource list/ResourceList";
import { useSelector } from "react-redux";
import { resourcesStatus } from "../../store/slices/resourcesSlice";

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
// const HOME_BODY = "home-body";

export function Home() {
  const resources = useSelector((state) => state.resources.entities);
  const isResourceLoading = useSelector(
    (state) => state.resources.status === resourcesStatus.loading
  );

  return (
    <div>
      <Navigation navigationList={NAVIGATION_LIST} />
      {isResourceLoading && (
        <h1 style={{ textAlign: "center", marginTop: "5rem" }}>
          loading resources...
        </h1>
      )}
      {!isResourceLoading && resources.length === 0 && (
        <h1 style={{ textAlign: "center", marginTop: "5rem" }}>No items.</h1>
      )}
      {!isResourceLoading && <ResourceList resources={resources} />}
    </div>
  );
}
