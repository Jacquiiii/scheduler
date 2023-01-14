import React from "react";

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import useVisualMode from "hooks/useVisualMode";

import "components/Appointment/styles.scss";


// displays appointment - renders Show component if appointment exists and Empty component if it does not exist
const Appointment = (props) => {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={ props.time }/>
        {mode === EMPTY && <Empty onAdd={() => console.log("Clicked onAdd")} />}
        {mode === SHOW && (
          <Show
            student={ props.interview.student }
            interviewer={props.interview.interviewer.name}
          />
        )}
    </article>
  );
  
};


export default Appointment;