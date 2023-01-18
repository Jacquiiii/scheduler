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
    interviewer, 
    setInterviewer,
    setStudent
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
        <section className="appointment__validation">{error}</section>
        <InterviewerList
          interviewers={ props.interviewers }
          value={ interviewer }
          onChange={ setInterviewer }
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={ cancel }>Cancel</Button>
          <Button confirm onClick={ () => validate() }>Save</Button>
        </section>
      </section>
    </main>
  );

};

export default Form;


// import React, { useState } from 'react';

// import Button from "components/Button";
// import InterviewerList from "components/InterviewerList";

// // Allows user to create or edit an appointment and cancel or save the changes
// const Form = (props) => {
  
//   const [student, setStudent] = useState(props.student || "");
//   const [interviewer, setInterviewer] = useState(props.interviewer || null);
//   const [error, setError] = useState("");

//   // Resets form fields
//   const reset = () => {
//     setStudent("");
//     setInterviewer(null);
//   };

//   // Uses reset to reset form fields and submits cancel
//   const cancel = () => {
//     reset();
//     props.onCancel();
//   }

//   // Produces error message if student name or interviewer field is blank when pressing save. If fields are not empty, handles save event. 
//   const validate = () => {
//     if (student === "") {
//       setError("Student name cannot be blank");
//       return;
//     }

//     if (interviewer === null) {
//       setError("Please select an interviewer");
//       return;
//     }
    
//     setError("");
//     props.onSave(student, interviewer);
//   };

//   return (
//     <main className="appointment__card appointment__card--create">
//       <section className="appointment__card-left">
//         <form autoComplete="off" onSubmit={ event => event.preventDefault() }>
//           <input
//             className="appointment__create-input text--semi-bold"
//             name="name"
//             type="text"
//             placeholder="Enter Student Name"
//             value={ student }
//             onChange={ event => setStudent(event.target.value) }
//             data-testid="student-name-input"
//           />
//         </form>
//         <section className="appointment__validation">{error}</section>
//         <InterviewerList
//           interviewers={ props.interviewers }
//           value={ interviewer }
//           onChange={ setInterviewer }
//         />
//       </section>
//       <section className="appointment__card-right">
//         <section className="appointment__actions">
//           <Button danger onClick={ cancel }>Cancel</Button>
//           <Button confirm onClick={ () => validate() }>Save</Button>
//         </section>
//       </section>
//     </main>
//   );

// };

// export default Form;