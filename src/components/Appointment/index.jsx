import React from "react";

import useVisualMode from "hooks/useVisualMode";

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Status from "components/Appointment/Status";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";

import "components/Appointment/styles.scss";

// Displays appointment component based on current mode
const Appointment = (props) => {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVE = "SAVE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // Transitions to show mode after user enters name/selects interviewer and clicks save
  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVE);
  
    props.bookInterview(props.id, interview)
      .then(res => transition(SHOW))
      .catch(err => console.log(err));
  };

  return (
    <article className="appointment">
      <Header time={ props.time }/>
        {mode === EMPTY && <Empty onAdd={ () => transition(CREATE) } />}
        {mode === SAVE && <Status message="Saving"/>}
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
            interviewers={ props.interviewers }
            onCancel={ back }
            onSave={ save }
          />
        )}
    </article>
  );
  
};

export default Appointment;