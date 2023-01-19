import React from "react";

import useVisualMode from "hooks/useVisualMode";

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import Error from "components/Appointment/Error";

import "components/Appointment/styles.scss";

// Displays appointment component based on current mode
const Appointment = (props) => {

  // Modes
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";
  const DELETING = "DELETING";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // Transitions to show mode after user enters name, selects interviewer and clicks save. If error, transitions to error mode.
  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);
  
    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE, true));
  };

  // Transitions to empty mode after user clicks and confirms cancel. If error, transitions to error mode.
  const cancel = () => {
    transition(DELETING, true);
  
    props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true));
  };

  return (
    <article className="appointment" data-testid="appointment">
      <Header time={ props.time }/>
      {mode === EMPTY && <Empty onAdd={ () => transition(CREATE) } />}
      {mode === SAVING && <Status message="Saving"/>}
      {mode === DELETING && <Status message="Deleting"/>}
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
          onCancel={ back }
          onSave={ save }
        />
      )}
      {mode === ERROR_SAVE && (
        <Error 
          message="Could not confirm changes"
          onClose={ back }
        />
      )}
      {mode === ERROR_DELETE && (
        <Error 
          message="Could not cancel appointment"
          onClose={ back }
        />
      )}
    </article>
  );
  
};

export default Appointment;