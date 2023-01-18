import React from "react";
import classNames from "classnames";

import spots from "helpers/spots";

import "components/DayListItem.scss";

// Displays day and interview spots available
const DayListItem = (props) => {

  // Updates class name based on whether prop is true or false
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots
  });

  return (
    <li 
    className={ dayClass } 
    onClick={ () => props.setDay(props.name) } 
    selected={ props.selected } 
    data-testid="day"
    >
      <h2 className="text--regular">{ props.name }</h2>
      <h3 className="text--light">{ spots(props.spots) }</h3>
    </li>
  );
  
};

export default DayListItem;


// Code from prior to spots helper, don't delete yet ----------
// import React from "react";
// import classNames from "classnames";

// import "components/DayListItem.scss";

// // Displays day and interview spots available
// const DayListItem = (props) => {

//   // Updates class name based on whether prop is true or false
//   const dayClass = classNames("day-list__item", {
//     "day-list__item--selected": props.selected,
//     "day-list__item--full": !props.spots
//   });

//   // Returns string based on value of spots
//   const formatSpots = (spots) => {
//     if (spots === 0) {
//       return "no spots remaining"
//     }
//     if (spots === 1) {
//       return "1 spot remaining"
//     }
    
//     return `${spots} spots remaining`;
//   };

//   // Assigns result of the formatted value of props.spots
//   const spots = formatSpots(props.spots);

//   return (
//     <li className={ dayClass } onClick={ () => props.setDay(props.name) } selected={ props.selected }>
//       <h2 className="text--regular">{ props.name }</h2>
//       <h3 className="text--light">{ spots }</h3>
//     </li>
//   );
  
// };

// export default DayListItem;