import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchResourceDetails } from "../../api/fetchResourceDetails";
import { Button } from "../../components/button/Button";
import { ResourceDetailsCard } from "../../components/cards/resource details card/ResourceDetailsCard";
import { ItemsTable } from "../../components/items table/ItemsTable";
import { TableCrown } from "../../components/items table/TableCrown";
import { PageNavigation } from "../../components/page navigation/PageNavigation";
import { BackIcon } from "../../icons/BackIcon";
import {
  BackNavigationContainer,
  ButtonContainer,
  ResourceDetailsBody,
  TableShoe,
} from "./styledComponents";

const RESOURCE_PAGE_LENGTH = 6;

export function ResourceDetails() {
  const navigate = useNavigate();
  const [resourceDetails, setResourceDetails] = useState(null);
  const [isResourceDetailsLoading, setIsResourceDetailsLoading] =
    useState(true);
  const params = useParams();
  const [startingIndex, setStartingIndex] = useState(0);
  const [selectedResoureItemsIds, setSelectedResourceItemsIds] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [resourceItems, setResourceItems] = useState([]);
  const [resourceItemsSlice, setResourceItemSlice] = useState([]);
  const [previousStartingIndex, setPreviousStartingindex] = useState(0);

  const getResourceDetails = useCallback(
    async function () {
      try {
        setIsResourceDetailsLoading(true);
        const resourceDetails = await fetchResourceDetails({
          resource_id: params.resource_id,
        });
        // console.log(resourceDetails);
        setResourceDetails(resourceDetails);
      } catch (error) {
      } finally {
        setIsResourceDetailsLoading(false);
      }
    },
    [params.resource_id]
  );

  function onResourceItemSeleted({ resource_item_id }) {
    if (
      selectedResoureItemsIds.findIndex((id) => id === resource_item_id) === -1
    )
      setSelectedResourceItemsIds((oldResourceItemsIds) => [
        ...oldResourceItemsIds,
        resource_item_id,
      ]);
    else
      setSelectedResourceItemsIds((oldResourceItemsIds) =>
        oldResourceItemsIds.filter(
          (oldResourceItemsId) => oldResourceItemsId !== resource_item_id
        )
      );
  }

  function onNextNavigation() {
    setStartingIndex((oldIndex) =>
      oldIndex + RESOURCE_PAGE_LENGTH >= resourceItems.length
        ? oldIndex
        : oldIndex + RESOURCE_PAGE_LENGTH
    );
  }

  function onBackNavigation() {
    setStartingIndex((oldIndex) =>
      oldIndex - RESOURCE_PAGE_LENGTH < 0
        ? oldIndex
        : oldIndex - RESOURCE_PAGE_LENGTH
    );
  }

  function onDeleteResourceItem() {
    if (selectedResoureItemsIds.length === 0) return;

    setResourceItems((oldResourceItems) =>
      oldResourceItems.filter(
        (resource_item) =>
          !selectedResoureItemsIds.some(
            (selectedResoureItemsId) =>
              selectedResoureItemsId === resource_item.id
          )
      )
    );
    setSelectedResourceItemsIds([]);
  }

  function onSearchInputChange(event) {
    setSearchInputValue(event.target.value.trimStart());
  }

  function sortInAscending() {
    setResourceItems((oldResourceItems) => [
      ...oldResourceItems.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      ),
    ]);
  }

  function sortInDescending() {
    setResourceItems((oldResourceItems) => [
      ...oldResourceItems.sort((a, b) =>
        a.title < b.title ? 1 : b.title < a.title ? -1 : 0
      ),
    ]);
    setStartingIndex(0);
  }

  function sortInAscending() {
    setResourceItems((oldResourceItems) => [
      ...oldResourceItems.sort((a, b) =>
        b.title < a.title ? 1 : a.title < b.title ? -1 : 0
      ),
    ]);
    setStartingIndex(0);
  }

  function sortByDate() {
    setResourceItems((oldResourceItems) => [
      ...oldResourceItems.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      ),
    ]);
    setStartingIndex(0);
  }

  useEffect(() => {
    getResourceDetails();
  }, [getResourceDetails]);

  useEffect(() => {
    if (resourceDetails) setResourceItems(resourceDetails.resource_items);
  }, [resourceDetails]);

  useEffect(() => {
    if (searchInputValue !== "") {
      // setPreviousStartingindex(startingIndex);
      // setStartingIndex(0);
    } else {
      // setStartingIndex(previousStartingIndex);
      // setPreviousStartingindex(0);
    }
  }, [searchInputValue, startingIndex, previousStartingIndex]);

  useEffect(() => {
    setResourceItemSlice(
      resourceItems.slice(startingIndex, startingIndex + RESOURCE_PAGE_LENGTH)
    );
  }, [resourceItems, startingIndex]);

  console.log(startingIndex);
  console.log(resourceItems);

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
          <Button text={"UPDATE"} type={"primary"} />
          <TableCrown
            onSearchInputChange={onSearchInputChange}
            searchInputValue={searchInputValue}
            sortInAscending={sortInAscending}
            sortInDescending={sortInDescending}
            sortByDate={sortByDate}
          />
          <ItemsTable
            resource_items={resourceItemsSlice}
            onResourceItemSeleted={onResourceItemSeleted}
          />
          <TableShoe>
            <ButtonContainer>
              <Button
                onClick={() =>
                  navigate("/create-item", {
                    state: { from: `/resource/${params.resource_id}` },
                  })
                }
                text="ADD ITEM"
                type="success"
                disabled={selectedResoureItemsIds.length > 0}
              />
              <Button
                text="DELETE ITEM"
                type="error"
                onClick={onDeleteResourceItem}
                disabled={selectedResoureItemsIds.length === 0}
              />
            </ButtonContainer>
            <PageNavigation
              onNextNavigation={onNextNavigation}
              onBackNavigation={onBackNavigation}
            />
          </TableShoe>
        </React.Fragment>
      )}
    </ResourceDetailsBody>
  );
}
