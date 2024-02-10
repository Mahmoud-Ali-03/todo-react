import { TaskesList } from "../context/Taskscontext";
import { useContext } from "react";
import Btndone from "./Btndone";
import Btnedite from "./Btnedite";
import Btndelete from "./Btndelete";
import Typography from "@mui/material/Typography";
export default function TasksList() {
  let tasks = useContext(TaskesList);
  let listtasks = tasks.map((task) => {
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
          <Typography variant="h5" style={{ padding: "0px", margin: "0px" }}>
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
          <Btndone />
          <Btnedite />
          <Btndelete />
        </div>
      </div>
    );
  });
  return <>{listtasks}</>;
}
