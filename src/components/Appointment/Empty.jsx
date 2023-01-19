import React from "react";

// Displays when appointment does not exist and allows user to select appointment slot to start booking
const Empty = (props) => (
  <main className="appointment__add">
    <img
      className="appointment__add-button"
      src="images/add.png"
      alt="Add"
      onClick={ props.onAdd }
    />
  </main>
);


export default Empty;