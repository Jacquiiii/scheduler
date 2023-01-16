import React from "react";

import useVisualMode from "hooks/useVisualMode";

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";

import "components/Appointment/styles.scss";

// Displays appointment component based on current mode
const Appointment = (props) => {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVE = "SAVE";
  const CONFIRM = "CONFIRM";
  const DELETE = "DELETE";
  const EDIT = "EDIT";

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

  // Transitions to empty mode after user clicks and confirms cancel
  const cancel = () => {
    transition(DELETE);
  
    props.cancelInterview(props.id)
      .then(res => transition(EMPTY))
      .catch(err => console.log(err));
  };

  return (
    <article className="appointment">
      <Header time={ props.time }/>
        {mode === EMPTY && <Empty onAdd={ () => transition(CREATE) } />}
        {mode === SAVE && <Status message="Saving"/>}
        {mode === DELETE && <Status message="Deleting"/>}
        {mode === CONFIRM && (
          <Confirm 
            message="Are you sure you would like to delete?"
            onCancel={ back }
            onConfirm={ cancel }
          />
        )}
        {mode === SHOW && (
          <Show
            student={ props.interview.student }
            interviewer={ props.interview.interviewer.name }
            onDelete={ () => transition(CONFIRM) }
            onEdit={ () => transition(EDIT) }
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
        {mode === EDIT && (
          <Form
            student={ props.interview.student }
            interviewer={ props.interview.interviewer.id }
            interviewers={ props.interviewers }
            onCancel={ () => transition(SHOW) }
            onSave={ save }
          />
        )}
    </article>
  );
  
};

export default Appointment;