import { NxtWaveIcon } from "../../icons/NxtWaveIcon";
import { Avatar, HeaderBody } from "./styledComponents";

export function Header() {
  return (
    <HeaderBody>
      <div>
        <span>
          <NxtWaveIcon />
        </span>
      </div>
      <Avatar></Avatar>
    </HeaderBody>
  );
}
