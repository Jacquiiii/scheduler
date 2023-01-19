import React from "react";

import Button from "components/Button";

// Allows a user to confirm a destructive action
const Confirm = (props) => (
  <main className="appointment__card appointment__card--confirm">
    <h1 className="text--semi-bold">{ props.message }</h1>
    <section className="appointment__actions">
      <Button danger onClick={ props.onCancel }>Cancel</Button>
      <Button danger onClick={ props.onConfirm }>Confirm</Button>
    </section>
  </main>
);

export default Confirm;