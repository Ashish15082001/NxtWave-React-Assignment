import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { CreateItem } from "./Pages/create item/CreateItem";
import { Home } from "./Pages/home/Home";
import { ResourceDetails } from "./Pages/resource details/ResourceDetails";
import RouterStyles from "./Router.module.css";

export function Router() {
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
