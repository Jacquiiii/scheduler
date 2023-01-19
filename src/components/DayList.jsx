import React from "react";

import DayListItem from "components/DayListItem";

// Displays a list of DayListItem components
const DayList = (props) => {

  const dayListItems = props.days.map((day) => (
    <DayListItem 
    key={ day.id }
    name={ day.name }
    spots={ day.spots }
    selected={ day.name === props.value }
    setDay={ props.onChange } 
    />
  ));

  return (
    <ul>{ dayListItems }</ul>
  );

};

export default DayList;