import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

// displays day and interview spots available
const DayListItem = (props) => {

  // updates class name based on whether prop is true or false
  const dayClass = classNames("day-list__item", {
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
    <li className={ dayClass } onClick={ () => props.setDay(props.name) } selected={ props.selected }>
      <h2 className="text--regular">{ props.name }</h2>
      <h3 className="text--light">{ spots }</h3>
    </li>
  );
  
};

export default DayListItem;