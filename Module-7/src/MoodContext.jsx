import React, { useState, useContext } from "react";

const MoodContext = React.createContext();

export const MoodProvider = (props) => {
  const [happy, setHappy] = useState(true);

  return (
    <MoodContext.Provider value={{ happy, setHappy }}>
      {props.children}{" "}
    </MoodContext.Provider>
  );
};

export const useMoodContext = () => {
  return useContext(MoodContext);
};
