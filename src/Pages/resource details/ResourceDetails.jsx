import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchResourceDetails } from "../../api/fetchResourceDetails";
import { Button } from "../../components/button/Button";
import { ResourceDetailsCard } from "../../components/cards/resource details card/ResourceDetailsCard";
import { ItemsTable } from "../../components/items table/ItemsTable";
import { TableCrown } from "../../components/items table/TableCrown";
import { PageNavigation } from "../../components/page navigation/PageNavigation";
import { BackIcon } from "../../icons/BackIcon";
import {
  changeResourcesDetailsStatus,
  resourcesDetailsStatus,
  setResourcesDetails,
  updateResourceDetails,
} from "../../store/slices/resourcesDetailsSlice";
import {
  BackNavigationContainer,
  ButtonContainer,
  ResourceDetailsBody,
  TableShoe,
} from "./styledComponents";
import { ToastContainer, toast } from "react-toastify";
import { updateItem } from "../../api/updateItem";

const RESOURCE_PAGE_LENGTH = 6;

export function ResourceDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const resourceDetails = useSelector(
    (state) => state.resourcesDetails.entities[params.resource_id]
  );
  const isResourceDetailsLoading = useSelector(
    (state) => state.resourcesDetails.status === resourcesDetailsStatus.loading
  );

  const [startingIndex, setStartingIndex] = useState(0);
  const [selectedResoureItemsIds, setSelectedResourceItemsIds] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [resourceItems, setResourceItems] = useState([]);
  const [resourceItemsSlice, setResourceItemSlice] = useState([]);

  const getResourceDetails = useCallback(
    async function () {
      try {
        dispatch(
          changeResourcesDetailsStatus({
            status: resourcesDetailsStatus.loading,
          })
        );
        const response = await fetchResourceDetails({
          resource_id: params.resource_id,
        });
        // console.log(response);
        dispatch(setResourcesDetails({ entity: response }));
      } catch (error) {
      } finally {
        dispatch(
          changeResourcesDetailsStatus({
            status: resourcesDetailsStatus.idle,
          })
        );
      }
    },
    [params.resource_id, dispatch]
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
      ...[...oldResourceItems].sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      ),
    ]);
  }

  function sortInDescending() {
    setResourceItems((oldResourceItems) => [
      ...[...oldResourceItems].sort((a, b) =>
        a.title < b.title ? 1 : b.title < a.title ? -1 : 0
      ),
    ]);
    setStartingIndex(0);
  }

  async function onUpdateResourceItems() {
    try {
      if (searchInputValue !== "") return;
      await updateItem();
      dispatch(
        updateResourceDetails({
          id: resourceDetails.id,
          resourceItems,
        })
      );
      showSuccess("Succesfully updated resource items.");
    } catch (error) {
      showError(error.message);
    }
  }

  function showSuccess(message) {
    toast.success(message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function showError(message) {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function sortByDate() {
    setResourceItems((oldResourceItems) => [
      ...[...oldResourceItems].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      ),
    ]);
    setStartingIndex(0);
  }

  useEffect(() => {
    if (!resourceDetails) getResourceDetails();
  }, [getResourceDetails, resourceDetails]);

  useEffect(() => {
    if (resourceDetails) setResourceItems(resourceDetails.resource_items);
  }, [resourceDetails]);

  useEffect(() => {
    setResourceItemSlice(
      resourceItems.slice(startingIndex, startingIndex + RESOURCE_PAGE_LENGTH)
    );
  }, [resourceItems, startingIndex]);

  useEffect(() => {
    if (resourceDetails) {
      if (searchInputValue !== "") {
        setResourceItems(
          resourceDetails.resource_items.filter(
            (oldResourceItem) => oldResourceItem.title === searchInputValue
          )
        );
        setStartingIndex(0);
      }
      if (searchInputValue === "") {
        setStartingIndex(0);
        setResourceItems(resourceDetails.resource_items);
      }
    }
  }, [searchInputValue, resourceDetails]);

  // console.log(resourceDetails);

  return (
    <ResourceDetailsBody>
      <ToastContainer />
      {isResourceDetailsLoading && <h1>Loading...</h1>}
      {!isResourceDetailsLoading && resourceDetails && (
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
            resource_items_length={resourceItems.length}
          />
          <Button
            text={"UPDATE"}
            type={"primary"}
            onClick={onUpdateResourceItems}
          />
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
