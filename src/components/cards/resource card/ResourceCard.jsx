import ResourceCardStyles from "./ResourceCard.module.css";

const CARD_BODY = "card-body";
const CARD_LOWER = "card-lower";
const CARD_UPPER = "card-upper";
const CARD_UPPER_LEFT = "card-uper-left";
const CARD_UPPER_RIGHT = "card-uper-right";
const CARD_LOWER_LINK = "card-lower-link";
const CARD_LOWER_DESCRIPTION = "card-lower-description";
const CARD_TITLE = "card-title";
const CARD_CATEGORY = "card-category";

export function ResourceCard({ category, description, icon_url, link, title }) {
  return (
    <div className={ResourceCardStyles[CARD_BODY]}>
      <div className={ResourceCardStyles[CARD_UPPER]}>
        <div className={ResourceCardStyles[CARD_UPPER_LEFT]}>
          <img src={icon_url} alt={title + " pic"}></img>
        </div>
        <div className={ResourceCardStyles[CARD_UPPER_RIGHT]}>
          <p className={ResourceCardStyles[CARD_TITLE]}>{title}</p>
          <p className={ResourceCardStyles[CARD_CATEGORY]}>{category}</p>
        </div>
      </div>
      <div className={ResourceCardStyles[CARD_LOWER]}>
        <a href={link} className={ResourceCardStyles[CARD_LOWER_LINK]}>
          {link}
        </a>
        <p className={ResourceCardStyles[CARD_LOWER_DESCRIPTION]}>
          {description}
        </p>
      </div>
    </div>
  );
}
