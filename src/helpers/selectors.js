// Returns an array of appointments for a specified day
const getAppointmentsForDay = (state, day) => {
  const filteredDayObject = state.days.find(d => d.name === day);

  if (!filteredDayObject) return [];

  const appointmentIdsArray = filteredDayObject.appointments;

  // Produces array where each appointmentId is replaced with it's corresponding appointment details
  const appointmentsList = appointmentIdsArray.map(id => state.appointments[id]);

  return appointmentsList;
};

// If interviewer id matches an interviewer in state, returns an interview object that contains a student (string) and an interviewer (object)
const getInterview = (state, interview) => {
  if (!interview) return null;

  const id = interview.interviewer;

  // Returns new object with interviewer details
  return {
    ...interview,
    interviewer: state.interviewers[id]
  };
};

// Returns an array of interviewers for a specified day
const getInterviewersForDay = (state, day) => {
  const filteredDayObject = state.days.find(d => d.name === day);

  if (!filteredDayObject) return [];

  const interviewerIdsArray = filteredDayObject.interviewers;

  // Produces array where each interviewerId is replaced with it's corresponding interviewer details
  const interviewersList = interviewerIdsArray.map(id => state.interviewers[id]);

  return interviewersList;
};

export { getAppointmentsForDay, getInterview, getInterviewersForDay };
