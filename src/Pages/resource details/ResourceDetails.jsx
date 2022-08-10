import React, { useCallback, useEffect, useMemo, useState } from "react";
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

const PAGE_LENGTH = 6;

export function ResourceDetails() {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [searchInputValue, setSearchInputValueChange] = useState("");
  const [selectedResourceItemsIds, setSelectedResourceItemsIds] = useState([]);
  const [deletedResourceItemsIds, setDeletedResourceItemsIds] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const resourceDetails = useSelector(
    (state) => state.resourcesDetails.entities[params.resource_id]
  );
  const isResourceDetailsLoading = useSelector(
    (state) => state.resourcesDetails.status === resourcesDetailsStatus.loading
  );
  const [resourceItems, setResourceItems] = useState(
    resourceDetails?.resource_items ? resourceDetails.resource_items : []
  );
  const [currentResourceItems, setCurrentResourceItems] =
    useState(resourceItems);

  const currentPageResourceItems = useMemo(() => {
    const startingIndex = (currentPageNumber - 1) * 6;
    return currentResourceItems.slice(
      startingIndex,
      startingIndex + PAGE_LENGTH
    );
  }, [currentPageNumber, currentResourceItems]);
  const numberOfPages = useMemo(
    () => Math.ceil(currentResourceItems.length / PAGE_LENGTH),
    [currentResourceItems]
  );

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
        setResourceItems(response.resource_items);
        setCurrentResourceItems(response.resource_items);
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
      selectedResourceItemsIds.findIndex((id) => id === resource_item_id) === -1
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
    if (currentPageNumber >= numberOfPages) return;
    setCurrentPageNumber((oldCurrentPageNumber) => oldCurrentPageNumber + 1);
  }

  function onBackNavigation() {
    if (currentPageNumber <= 1) return;
    setCurrentPageNumber((oldCurrentPageNumber) => oldCurrentPageNumber - 1);
  }

  function onNthNavigation(pageNumber) {
    setCurrentPageNumber(pageNumber);
  }

  function onSearchInputValueChange(event) {
    const searchValue = event.target.value.trimStart();
    const newResourceItems =
      searchValue === ""
        ? resourceItems
        : resourceItems.filter(
            (resourceItem) => resourceItem.title === searchValue
          );

    setCurrentResourceItems(newResourceItems);
    setSearchInputValueChange(searchValue);
    setCurrentPageNumber(1);
  }

  function onDeleteResourceItem() {
    if (selectedResourceItemsIds.length === 0) return;

    const updatedResourceItems = resourceItems.filter(
      (resourceItem) =>
        !selectedResourceItemsIds.some(
          (selectedResourceItemId) => selectedResourceItemId === resourceItem.id
        )
    );
    const updatedCurrentResourceItems = currentResourceItems.filter(
      (resourceItem) =>
        !selectedResourceItemsIds.some(
          (selectedResourceItemId) => selectedResourceItemId === resourceItem.id
        )
    );

    setDeletedResourceItemsIds((oldDeletedResourceItemsIds) => [
      ...oldDeletedResourceItemsIds,
      ...selectedResourceItemsIds,
    ]);
    setSelectedResourceItemsIds([]);
    setResourceItems(updatedResourceItems);
    setCurrentResourceItems(updatedCurrentResourceItems);
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
  }

  async function onUpdateResourceItems() {
    try {
      if (deletedResourceItemsIds.length === 0) return;
      await updateItem();
      dispatch(
        updateResourceDetails({
          id: resourceDetails.id,
          deletedResourceItemsIds,
        })
      );
      setDeletedResourceItemsIds([]);
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
  }

  useEffect(() => {
    if (!resourceDetails) getResourceDetails();
  }, [getResourceDetails, resourceDetails]);

  // useEffect(() => {
  //   console.log(deletedResourceItemsIds);
  // }, [deletedResourceItemsIds]);

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
            resource_items_length={currentResourceItems.length}
          />
          <Button
            text={"UPDATE"}
            type={"primary"}
            onClick={onUpdateResourceItems}
          />
          <TableCrown
            onSearchInputValueChange={onSearchInputValueChange}
            searchInputValue={searchInputValue}
            sortInAscending={sortInAscending}
            sortInDescending={sortInDescending}
            sortByDate={sortByDate}
          />
          <ItemsTable
            resource_items={currentPageResourceItems}
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
                disabled={selectedResourceItemsIds.length > 0}
              />
              <Button
                text="DELETE ITEM"
                type="error"
                onClick={onDeleteResourceItem}
                disabled={selectedResourceItemsIds.length === 0}
              />
            </ButtonContainer>
            <PageNavigation
              onNthNavigation={onNthNavigation}
              numberOfPages={numberOfPages}
              onNextNavigation={onNextNavigation}
              onBackNavigation={onBackNavigation}
              currentPageNumber={currentPageNumber}
            />
          </TableShoe>
        </React.Fragment>
      )}
    </ResourceDetailsBody>
  );
}
