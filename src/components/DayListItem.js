import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

// renders day and interview spots available based on props
export default function DayListItem(props) {

  // updates <li> class name based on prop that returns true or default if both equal false
  const dayListItemClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": (props.spots === 0)
  })

  return (
    <li onClick={() => props.setDay(props.name)} className={dayListItemClass}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
}
