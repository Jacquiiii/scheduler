// returns an array of appointments for a specified day
const getAppointmentsForDay = (state, day) => {

  // returns object matching day
  const filteredDay = state.days.find(d => d.name === day);

  // if day is not found, return empty object
  if (!filteredDay) {
    return [];
  }

  // returns array of appointment ids for day
  const appointmentIds = filteredDay.appointments;

  // returns a new array where each appointmentId is replaced with it's corresponding appointment details
  const appointmentsList = appointmentIds.map(id => state.appointments[id]);
  return appointmentsList;

};


// returns an interview containing interviewer details
const getInterview = (state, interview) => {

  // if interview is not found, return null
  if (!interview) {
    return null;
  }

  const id = interview.interviewer;

  // if id is a match returns interview object with interviewer details
  if (state.interviewers[id]) {
    return {
      student: interview.student,
      interviewer: state.interviewers[id]
    };
  }

};


export { getAppointmentsForDay, getInterview };
