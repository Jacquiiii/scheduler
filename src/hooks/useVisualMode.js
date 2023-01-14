import { useState } from "react";

// Allows components to keep track of the mode they are in as a user interacts with them
const useVisualMode = (initial) => {

  const [history, setHistory] = useState([initial]);

  // If replace is true, replaces last mode in history with new mode. If replace is false, adds new mode to history.
  const transition = (newMode, replace = false) => {
    const newHistory = [...history];
    if (replace) newHistory.pop();
    setHistory([...newHistory, newMode]);
  };

  // Updates current mode back to previous mode unless history only has one mode
  const back = () => {
    if (history.length === 1) return;
    const newHistory = [...history];
    newHistory.pop(); 
    setHistory(newHistory); 
  };

  // Returns last mode from history state
  const mode = history[history.length - 1];

  return { mode, transition, back };
  
};

export default useVisualMode;