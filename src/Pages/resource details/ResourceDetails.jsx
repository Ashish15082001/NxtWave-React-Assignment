import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchResourceDetails } from "../../api/fetchResourceDetails";
import { Button } from "../../components/button/Button";
import { ResourceDetailsCard } from "../../components/cards/resource details card/ResourceDetailsCard";
import { ItemsTable } from "../../components/items table/ItemsTable";
import { BackIcon } from "../../icons/BackIcon";
import {
  BackNavigationContainer,
  ResourceDetailsBody,
} from "./styledComponents";

export function ResourceDetails() {
  const navigate = useNavigate();
  const [resourceDetails, setResourceDetials] = useState(null);
  const [isResourceDetailsLoading, setIsResourceDetailsLoading] =
    useState(true);
  const params = useParams();

  const getResourceDetails = useCallback(async function () {
    try {
      setIsResourceDetailsLoading(true);
      const resourceDetails = await fetchResourceDetails({
        resource_id: params.resource_id,
      });
      // console.log(resourceDetails);
      setResourceDetials(resourceDetails);
    } catch (error) {
    } finally {
      setIsResourceDetailsLoading(false);
    }
  }, [params.resource_id]);

  useEffect(() => {
    getResourceDetails();
  }, [getResourceDetails]);

  return (
    <ResourceDetailsBody>
      {isResourceDetailsLoading && <h1>Loading...</h1>}
      {!isResourceDetailsLoading && (
        <React.Fragment>
          <BackNavigationContainer>
            <span onClick={() => navigate("/home")}>
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
          <ItemsTable resource_items={resourceDetails.resource_items} />
        </React.Fragment>
      )}
    </ResourceDetailsBody>
  );
}
