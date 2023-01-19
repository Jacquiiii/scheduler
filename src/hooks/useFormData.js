import { useState } from "react";

// Used in Form component for DayList props and to display appointments list
const useFormData = (props) => {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  // Resets form fields
  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  // Uses reset to update form fields and submits cancel
  const cancel = () => {
    reset();
    props.onCancel();
  }

  // Produces error message if student name or interviewer field is blank when pressing save. If fields are not empty, handles save event. 
  const validate = () => {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }

    if (interviewer === null) {
      setError("Please select an interviewer");
      return;
    }
    
    setError("");
    props.onSave(student, interviewer);
  };

  return { 
    error, 
    cancel, 
    validate, 
    student, 
    interviewer, 
    setInterviewer, 
    setStudent 
  };
  
};

export default useFormData;