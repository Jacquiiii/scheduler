// returns an array of appointments for a specified day
const getAppointmentsForDay = (state, day) => {
  // returns object matching day
  const filteredDay = state.days.find(d => d.name === day);

  // if day is not found, return empty object
  if (!filteredDay) {
    return [];
  };

  // returns array of appointment ids for day
  const appointmentIds = filteredDay.appointments;

  // returns a new array where each appointmentId is replaced with it's corresponding appointment details
  const appointmentsList = appointmentIds.map(id => state.appointments[id]);
  return appointmentsList;
};


// if interviewer id matches an interviewer in state, returns an interview object that contains a student (string) and an interviewer (object)
const getInterview = (state, interview) => {
  // if interview is not found, return null
  if (!interview) {
    return null;
  };

  // returns id matching interviewer
  const id = interview.interviewer;

  // returns new object with interviewer details
  return {
    ...interview,
    interviewer: state.interviewers[id]
  };
};


export { getAppointmentsForDay, getInterview };
