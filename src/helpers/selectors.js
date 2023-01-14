// returns an array of appointments for a specified day. if day is not found, return empty array.
const getAppointmentsForDay = (state, day) => {
  const filteredDayObject = state.days.find(d => d.name === day);

  if (!filteredDayObject) return [];

  const appointmentIdsArray = filteredDayObject.appointments;

  // produces array where each appointmentId is replaced with it's corresponding appointment details
  const appointmentsList = appointmentIdsArray.map(id => state.appointments[id]);

  return appointmentsList;
};

// if interviewer id matches an interviewer in state, returns an interview object that contains a student (string) and an interviewer (object). if interview is not found, return null.
const getInterview = (state, interview) => {
  if (!interview) return null;

  const id = interview.interviewer;

  // returns new object with interviewer details
  return {
    ...interview,
    interviewer: state.interviewers[id]
  };
};

// returns an array of interviewers for a specified day. if day is not found, return empty array.
const getInterviewersForDay = (state, day) => {
  const filteredDayObject = state.days.find(d => d.name === day);

  if (!filteredDayObject) return [];

  const interviewerIdsArray = filteredDayObject.interviewers;

  // produces array where each interviewerId is replaced with it's corresponding interviewer details
  const interviewersList = interviewerIdsArray.map(id => state.interviewers[id]);

  return interviewersList;
};

export { getAppointmentsForDay, getInterview, getInterviewersForDay };
