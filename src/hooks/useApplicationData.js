import { useState, useEffect } from "react";
import axios from 'axios';

// Used in Application component for DayList props and to display appointments list
const useApplicationData = () => {

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
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ])
      .then(all => {
        setState(prev => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        }));
      })
      .catch(err => console.log(err));

  }, []);

  // Returns a new days array where spots are increased or decreased based on whether addDay is true (appointment deleted) or false (appointment added)
  const updateSpots = function(state, appointments, id, addDay = false) {
    const updatedDays = [];
  
    for (const day of state.days) {
      if (day.appointments.includes(id)) {
        let updatedSpots = day.spots;
        addDay ? (updatedSpots += 1) : (updatedSpots -= 1);
  
        const updatedDay = {
          ...day,
          spots: updatedSpots
        };
  
        updatedDays.push(updatedDay);

      } else {
        updatedDays.push(day);
      }
    } 
    return updatedDays;
  };

  // Changes local state when interview is booked and updates API
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = updateSpots(state, appointments, id);

    return new Promise((resolve, reject) => {
      axios.put(`/api/appointments/${id}`, { interview })
      .then(res => {
        setState(prev => ({
          ...prev,
          days,
          appointments
        }));
        resolve(res);
      })
      .catch(err => reject(err));
    });
  };

  // Changes local state when interview is cancelled and updates API
  const cancelInterview = (id) => {
    const interview = null;

    const appointment = {
      ...state.appointments[id],
      interview
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = updateSpots(state, appointments, id, true);

    return new Promise((resolve, reject) => {
      axios.delete(`/api/appointments/${id}`, { interview })
      .then(res => {
        setState(prev => ({
          ...prev,
          days,
          appointments
        }));
        resolve(res);
      })
      .catch(err => reject(err));
    });
  };

  return { state, setDay, bookInterview, cancelInterview };
};

export default useApplicationData;