import React from 'react';

import useFormData from 'hooks/useFormData';

import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

// Allows user to create or edit an appointment and cancel or save the changes
const Form = (props) => {

  const {
    error,
    cancel, 
    validate, 
    student,
    setStudent,
    interviewer, 
    setInterviewer
  } = useFormData(props);

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={ event => event.preventDefault() }>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={ student }
            onChange={ event => setStudent(event.target.value) }
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{ error }</section>
        <InterviewerList
          interviewers={ props.interviewers }
          value={ interviewer }
          onChange={ setInterviewer }
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={ cancel }>Cancel</Button>
          <Button confirm onClick={ validate }>Save</Button>
        </section>
      </section>
    </main>
  );

};

export default Form;
