import { useState } from "react";


// allows components to keep track of the mode they are in as a user interacts with them
const useVisualMode = (initial) => {
  const [history, setHistory] = useState([initial]);

  // if replace is true, replaces last mode in history with new mode. if replace is false, adds new mode to history.
  const transition = (newMode, replace = false) => {
    const newHistory = [...history];

    if (replace) {
      newHistory.pop();
    };

    setHistory([...newHistory, newMode]);
  };

  // moves back to previous mode
  const back = () => {
    if (history.length === 1) {
      return;
    }
    
    const newHistory = [...history];
    newHistory.pop(); 

    setHistory(newHistory); 
  };

  const mode = history[history.length - 1]; // sets latest mode
  return { mode, transition, back };
};


export default useVisualMode;