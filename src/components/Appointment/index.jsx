import React from "react";
import useVisualMode from "hooks/useVisualMode";

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";

import "components/Appointment/styles.scss";


// displays appointments and renders component based on current mode
const Appointment = (props) => {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={ props.time }/>
        {mode === EMPTY && <Empty onAdd={ () => transition(CREATE) } />}
        {mode === SHOW && (
          <Show
            student={ props.interview.student }
            interviewer={props.interview.interviewer.name}
          />
        )}
        {mode === CREATE && (
          <Form
            student={ "" }
            interviewer={ null }
            interviewers={ [] }
            onCancel={ back }
          />
        )}
    </article>
  );
  
};


export default Appointment;