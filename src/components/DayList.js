import React from "react";
import DayListItem from "components/DayListItem";


// renders a list of DayListItem components
export default function DayList(props) {

  const dayListItems = props.days.map(day => {

    return (
      <DayListItem 
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.value}
      setDay={props.onChange} 
      />
    );

  });

  return (
    <ul>{dayListItems}</ul>
  );

};