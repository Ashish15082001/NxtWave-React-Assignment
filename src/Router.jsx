import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./Pages/home/Home";
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
      </Routes>
    </div>
  );
}
