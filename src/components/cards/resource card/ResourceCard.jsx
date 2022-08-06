import { useLocation, useNavigate } from "react-router-dom";
import {
  CardBody,
  CardCategory,
  CardLower,
  CardLowerDescription,
  CardLowerLink,
  CardTitle,
  CardUpper,
  CardUpperLeft,
  CardUpperRight,
} from "./styledComponents";
import { Link } from "react-router-dom";

export function ResourceCard({
  category,
  description,
  icon_url,
  link,
  title,
  id,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <CardBody
      onClick={() => {
        navigate(`/resource/${id}`, { state: { from: location.pathname } });
      }}
    >
      <CardUpper>
        <CardUpperLeft>
          <img src={icon_url} alt={title + " pic"}></img>
        </CardUpperLeft>
        <CardUpperRight>
          <CardTitle>{title}</CardTitle>
          <CardCategory>{category}</CardCategory>
        </CardUpperRight>
      </CardUpper>
      <CardLower>
        <Link
          target="_blank"
          to={link}
          rel="noopener noreferrer"
          style={{ color: "var(--color-blue)", textDecoration: "none" }}
        >
          {link}
        </Link>
        <CardLowerDescription>{description}</CardLowerDescription>
      </CardLower>
    </CardBody>
  );
}
