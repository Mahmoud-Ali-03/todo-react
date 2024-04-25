import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import { useContext } from "react";
import { TaskesList } from "../context/Taskscontext";
export default function Btndone({ isdonetask }) {
  const [newtask, setNewtask] = useContext(TaskesList);
  function handeldone() {
    const istaskdone = newtask.map((t) => {
      if (t.id == isdonetask.id) {
        return { ...t, isComplete: !isdonetask.isComplete };
      } else {
        return t;
      }
    });
    setNewtask(istaskdone);
    localStorage.setItem("tasks", JSON.stringify(istaskdone));
  }
  return (
    <>
      <div
        style={{
          background: isdonetask.isComplete ? "#65B741" : "#fff",
          borderRadius: "50%",
          border: "1px solid #65B741",
          marginLeft: "15px",
        }}
      >
        <IconButton
          color={isdonetask.isComplete ? "btnisdonecolor" : "btndonecolor"}
          size="small"
          onClick={handeldone}
        >
          <CheckIcon fontSize="small" />
        </IconButton>
      </div>
    </>
  );
}
