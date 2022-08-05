import {
  DetailCard,
  DetailCardDescription,
  DetailCardImage,
  DetailCardItemsLength,
  DetailCardLink,
  DetailCardLower,
  DetailCardTitle,
  DetailCardUpper,
  DetailCardUpperLeft,
  DetailCardUpperRight,
} from "./styledComponents";

export function ResourceDetailsCard({
  description,
  icon_url,
  id,
  link,
  title,
  resource_items_length,
}) {
  return (
    <DetailCard>
      <DetailCardUpper>
        <DetailCardUpperLeft>
          <DetailCardImage
            src={icon_url}
            alt={title + " pic"}
          ></DetailCardImage>
        </DetailCardUpperLeft>
        <DetailCardUpperRight>
          <DetailCardTitle>{title}</DetailCardTitle>
          <DetailCardItemsLength>{resource_items_length}</DetailCardItemsLength>
          <DetailCardLink>{link}</DetailCardLink>
        </DetailCardUpperRight>
      </DetailCardUpper>
      <DetailCardLower>
        <DetailCardDescription>{description}</DetailCardDescription>
      </DetailCardLower>
    </DetailCard>
  );
}
