import React from "react";

// Informs the user that an operation is in progress
const Status = (props) => (
  <main className="appointment__card appointment__card--status">
    <img
      className="appointment__status-image"
      src="images/status.png"
      alt="Loading"
    />
    <h1 className="text--semi-bold">{ props.message }</h1>
  </main>
);

export default Status;