import React, { Fragment } from 'react';
import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";


// displays appointment - renders Show component if appointment exists and Empty component if it does not exist
const Appointment = (props) => {

  // if appointment exists, sets variables used as props in the Show component
  let student;
  let interviewer;
  if (props.interview) {
    student = props.interview.student;
    interviewer = props.interview.interviewer.name;
  }

  return (
    <article className="appointment">
      <Header time={ props.time }/>
      <Fragment>
        { props.interview ? 
          <>
            <Show student={ student } interviewer={ interviewer }/>
          </> 
          : 
          <>
            <Empty />
          </> 
        }
      </Fragment>
    </article>
  );
  
};


export default Appointment;