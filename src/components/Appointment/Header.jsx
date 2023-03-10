import React from "react";

// Displays the time for the appointment
const Header = (props) => (
  <header className="appointment__time">
    <h4 className="text--semi-bold">{ props.time }</h4>
    <hr className="appointment__separator" />
  </header>
);

export default Header;