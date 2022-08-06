import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { fetchResources } from "./api/fetchResources";
import { Header } from "./components/header/Header";
import { CreateItem } from "./Pages/create item/CreateItem";
import { Home } from "./Pages/home/Home";
import { ResourceDetails } from "./Pages/resource details/ResourceDetails";
import RouterStyles from "./Router.module.css";
import {
  changeResourceState,
  resourcesStatus,
  setResources,
} from "./store/slices/resources";

export function Router() {
  const dispatch = useDispatch();

  async function getResources() {
    try {
      dispatch(changeResourceState({ state: resourcesStatus.loading }));
      const responseData = await fetchResources();
      dispatch(setResources({ resources: responseData }));
    } catch (error) {
    } finally {
      dispatch(changeResourceState({ state: resourcesStatus.idle }));
    }
  }

  useEffect(() => {
    getResources();
  }, []);

  return (
    <div className={RouterStyles["page-body"]}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home?tag_name=resources" />}
        ></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/resource/:resource_id"
          element={<ResourceDetails />}
        ></Route>
        <Route path="/create-item" element={<CreateItem />}></Route>
      </Routes>
    </div>
  );
}
