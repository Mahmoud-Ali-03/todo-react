import { TaskesList } from "../context/Taskscontext";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useContext, useEffect, useState } from "react";
import Btndone from "./Btndone";
import Btnedite from "./Btnedite";
import Btndelete from "./Btndelete";
import Typography from "@mui/material/Typography";
export default function TasksList() {
  const [alignment, setAlignment] = useState("all");
  let [newtask, setNewtask] = useContext(TaskesList);

  const showcompleted = newtask.filter((t) => {
    return t.isComplete;
  });
  const shownotcompleted = newtask.filter((t) => {
    return !t.isComplete;
  });

  let tasktoshow = newtask;

  if (alignment == "done") {
    tasktoshow = showcompleted;
  } else if (alignment == "notdone") {
    tasktoshow = shownotcompleted;
  } else {
    tasktoshow = newtask;
  }

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  let listtasks = tasktoshow.map((task) => {
    return (
      <div
        key={task.id}
        style={{
          background: "#1F2544",
          padding: "5px",
          marginBottom: "15px",
          borderRadius: "5px",
          textAlign: "right",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        dir="rtl"
      >
        <div>
          <Typography
            variant="h5"
            style={{
              padding: "0px",
              margin: "0px",
              textDecoration: task.isComplete ? "line-through" : "none",
            }}
          >
            {task.title}
          </Typography>
          <Typography style={{ padding: "0px", margin: "0px" }}>
            {task.body}
          </Typography>
        </div>
        <div
          style={{
            marginRight: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Btndone isdonetask={task} />
          <Btnedite edittask={task} />
          <Btndelete deltask={task} />
        </div>
      </div>
    );
  });
  useEffect(() => {
    const getfromstorg = JSON.parse(localStorage.getItem("tasks"));
    setNewtask(getfromstorg);
  }, []);

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        className="btns-action"
        style={{ margin: "20px 0px" }}
      >
        <ToggleButton className="btn-action" value="notdone">
          <Typography>غير منجز</Typography>
        </ToggleButton>
        <ToggleButton className="btn-action" value="done">
          <Typography>منجز</Typography>
        </ToggleButton>
        <ToggleButton className="btn-action" value="all">
          <Typography>الكل</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
      {listtasks}
    </>
  );
}
