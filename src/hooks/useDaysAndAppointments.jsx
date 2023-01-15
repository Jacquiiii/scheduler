import React, { useState, useEffect } from "react";
import axios from 'axios';

import Appointment from "components/Appointment";

import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";

// Used in Application component for DayList props and to display appointments list
const useDaysAndAppointments = () => {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  // Updates state with a new day
  const setDay = day => setState({ ...state, day });

  // Gets days and appointments data from API and updates state with new days array and appointments object
  useEffect(() => {

    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ])
      .then((all) => {
        setState(prev => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        }));
      });

  }, [])

  // Produces list of Appointment components
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const appointments = dailyAppointments.map(appointment => {

    const interview = getInterview(state, appointment.interview);
    const interviewers = getInterviewersForDay(state, state.day);

    return (
      <Appointment
        key={ appointment.id }
        { ...appointment }
        interview={ interview }
        interviewers={ interviewers }
      />
    );

  });

  return { state, setDay, appointments};

};

export default useDaysAndAppointments;