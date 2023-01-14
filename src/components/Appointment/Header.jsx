import React from "react";

// displays the time for the appointment
const Header = (props) => {
  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{ props.time }</h4>
      <hr className="appointment__separator" />
    </header>
  );
};

export default Header;