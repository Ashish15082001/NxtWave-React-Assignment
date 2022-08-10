import { BackIcon } from "../../icons/BackIcon";
import { NextIcon } from "../../icons/NextIcon";
import {
  NavigationContainer,
  NavigationIconContainer,
  PageNumberNavigationList,
  PageNumberNavigationListItem,
} from "./styledComponents";

export function PageNavigation({
  onBackNavigation,
  onNextNavigation,
  onNthNavigation,
  numberOfPages,
  currentPageNumber,
}) {
  let instantNavigation = [];
  for (let i = 1; i <= numberOfPages; i++) instantNavigation.push(i);

  return (
    <NavigationContainer>
      <NavigationIconContainer onClick={onBackNavigation}>
        <BackIcon />
      </NavigationIconContainer>
      <PageNumberNavigationList>
        {instantNavigation.map((pageNumber) => (
          <PageNumberNavigationListItem
            key={pageNumber}
            onClick={onNthNavigation.bind(this, pageNumber)}
            data-isactive={pageNumber === currentPageNumber}
          >
            {pageNumber}
          </PageNumberNavigationListItem>
        ))}
      </PageNumberNavigationList>
      <NavigationIconContainer onClick={onNextNavigation}>
        <NextIcon />
      </NavigationIconContainer>
    </NavigationContainer>
  );
}
