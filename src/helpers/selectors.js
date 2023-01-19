// Returns an array of appointments for a specified day
const getAppointmentsForDay = (state, day) => {
  const filteredDayObj = state.days.find(d => d.name === day);

  if (!filteredDayObj) {
    return [];
  }

  const appointmentIdsArr = filteredDayObj.appointments;

  // Each appointmentId is replaced with corresponding appointment details
  return appointmentIdsArr.map(id => state.appointments[id]);
};

// If interviewer id matches an interviewer in state, returns an interview object that contains a student (string) and an interviewer (object)
const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  }

  const id = interview.interviewer;

  return {
    ...interview,
    interviewer: state.interviewers[id]
  };
};

// Returns array of interviewers for a specified day
const getInterviewersForDay = (state, day) => {
  const filteredDayObj = state.days.find(d => d.name === day);

  if (!filteredDayObj) {
    return [];
  }

  const interviewerIdsArr = filteredDayObj.interviewers;

  // Each interviewerId is replaced with corresponding interviewer details
  return interviewerIdsArr.map(id => state.interviewers[id]);
};

export { getAppointmentsForDay, getInterview, getInterviewersForDay };
