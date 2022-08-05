import { useLocation, useNavigate } from "react-router-dom";
import {
  NavigationBody,
  NavigationList,
  NavigationListItem,
} from "./styledComponents";

// {  navigationList : {destinationName, destinationUrl} }

export function Navigation({ navigationList }) {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams =
    location.search === "" ? "resources" : location.search.split("=")[1];

  return (
    <NavigationBody>
      <NavigationList>
        {navigationList.map(({ destinationUrl, destinationName }, index) => (
          <NavigationListItem
            key={index}
            data-active={searchParams === destinationName.toLowerCase()}
            onClick={() => navigate(destinationUrl)}
          >
            {destinationName}
          </NavigationListItem>
        ))}
      </NavigationList>
    </NavigationBody>
  );
}
