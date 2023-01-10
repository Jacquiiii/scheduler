import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

// renders day and interview spots available based on props
export default function DayListItem(props) {

  // updates <li> class name based on prop that returns true or default if both equal false
  const dayListItemClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots
  });

  // returns string based on value of spots
  const formatSpots = (spots) => {

    if (spots === 0) {
      return "no spots remaining"
    }
    if (spots === 1) {
      return "1 spot remaining"
    }

    return `${spots} spots remaining`;
  };

  // assigns result of the formatted value of props.spots
  const spots = formatSpots(props.spots);

  return (
    <li onClick={() => props.setDay(props.name)} className={dayListItemClass}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{spots}</h3>
    </li>
  );
  
}