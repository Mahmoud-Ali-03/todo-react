import { v4 as uuidv4 } from "uuid";
export default function Taskreducer(curentTask, action) {
  switch (action.type) {
    case "added": {
      const addtask = {
        id: uuidv4(),
        title: action.payload.titletask,
        body: "",
        isComplete: false,
      };
      const updateadd = [...curentTask, addtask];
      localStorage.setItem("tasks", JSON.stringify(updateadd));
      return updateadd;
    }
    case "edit": {
      const taskuptodate = curentTask.map((t) => {
        if (t.id === action.payload.idtask) {
          return {
            ...t,
            title: action.payload.titletask,
            body: action.payload.detailstask,
          };
        } else {
          return t;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(taskuptodate));
      return taskuptodate;
    }
    case "done": {
      const istaskdone = curentTask.map((t) => {
        if (t.id == action.payload.id) {
          return { ...t, isComplete: !t.isComplete };
        } else {
          return t;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(istaskdone));
      return istaskdone;
    }
    case "delet": {
      const taskdel = curentTask.filter((t) => {
        return t.id !== action.payload.idtask;
      });
      localStorage.setItem("tasks", JSON.stringify(taskdel));
      return taskdel;
    }
    case "get": {
      const getfromstorg = JSON.parse(localStorage.getItem("tasks")) ?? [];
      return getfromstorg;
    }
    default: {
      throw Error("Unkone Action" + action.type);
    }
  }
}
