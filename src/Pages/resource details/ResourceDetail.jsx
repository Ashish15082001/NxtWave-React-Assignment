import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchResourceDetails } from "../../api/fetchResourceDetails";
import { Button } from "../../components/button/Button";
import { ResourceDetailsCard } from "../../components/cards/resource details card/ResourceDetailsCard";
import { BackIcon } from "../../icons/BackIcon";
import {
  BackNavigationContainer,
  ResourceDetailsBody,
} from "./styledComponents";

export function ResourceDetail() {
  const [resourceDetails, setResourceDetials] = useState(null);
  const [isResourceDetailsLoading, setIsResourceDetailsLoading] =
    useState(true);
  const params = useParams();

  async function getResourceDetails() {
    try {
      setIsResourceDetailsLoading(true);
      const resourceDetails = await fetchResourceDetails({
        resource_id: params.resource_id,
      });
      console.log(resourceDetails);
      setResourceDetials(resourceDetails);
    } catch (error) {
    } finally {
      setIsResourceDetailsLoading(false);
    }
  }

  useEffect(() => {
    getResourceDetails();
  }, [params.resource_id]);

  if (isResourceDetailsLoading) return <h1>Loading...</h1>;

  return (
    <ResourceDetailsBody>
      <BackNavigationContainer>
        <span>
          <BackIcon />
        </span>
        <p>Resources</p>
      </BackNavigationContainer>
      <ResourceDetailsCard
        description={resourceDetails.description}
        icon_url={resourceDetails.icon_url}
        id={resourceDetails.id}
        link={resourceDetails.link}
        title={resourceDetails.title}
        resource_items_length={resourceDetails.resource_items.length}
      />
      <Button text={"UPDATE"} type={"primary"} disabled={false} />
    </ResourceDetailsBody>
  );
}
