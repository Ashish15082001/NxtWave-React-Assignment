import { BackIcon } from "../../icons/BackIcon";
import { NextIcon } from "../../icons/NextIcon";
import {
  NavigationContainer,
  NavigationIconContainer,
} from "./styledComponents";

export function PageNavigation({ onBackNavigation, onNextNavigation }) {
  return (
    <NavigationContainer>
      <NavigationIconContainer onClick={onBackNavigation}>
        <BackIcon />
      </NavigationIconContainer>
      <ul></ul>
      <NavigationIconContainer onClick={onNextNavigation}>
        <NextIcon />
      </NavigationIconContainer>
    </NavigationContainer>
  );
}
