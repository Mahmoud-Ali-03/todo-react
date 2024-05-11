import { createContext, useReducer, useContext } from "react";
import Taskreducer from "../reducers/Taskreducer";

let TaskesList = createContext({});
const Tasksdispatch = createContext(null);
const Tasksprovider = ({ children }) => {
  const [curenttask, dispatchtask] = useReducer(Taskreducer, []);
  return (
    <Tasksdispatch.Provider value={{ dispatch: dispatchtask }}>
      <TaskesList.Provider value={{ newtask: curenttask }}>
        {children}
      </TaskesList.Provider>
    </Tasksdispatch.Provider>
  );
};

export const useTasks = () => {
  return useContext(TaskesList);
};

export const useTaskdispatch = () => {
  return useContext(Tasksdispatch);
};
export default Tasksprovider;
