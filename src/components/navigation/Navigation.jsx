import { useLocation, useNavigate } from "react-router-dom";
import NavigationStyles from "./Navigation.module.css";

const NAVIGATION_BODY = "navigation-body";
const NAVIGATION_LIST = "navigation-list";
const NAVIGATION_LIST_ITEM = "navigation-list-item";

// {  navigationList : {destinationName, destinationUrl} }

export function Navigation({ navigationList }) {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams =
    location.search === "" ? "resources" : location.search.split("=")[1];

  return (
    <nav className={NavigationStyles[NAVIGATION_BODY]}>
      <ul className={NavigationStyles[NAVIGATION_LIST]}>
        {navigationList.map(({ destinationUrl, destinationName }, index) => (
          <li
            key={index}
            className={NavigationStyles[NAVIGATION_LIST_ITEM]}
            data-active={searchParams === destinationName.toLowerCase()}
            onClick={() => navigate(destinationUrl)}
          >
            {destinationName}
          </li>
        ))}
      </ul>
    </nav>
  );
}
