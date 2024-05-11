import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import { useTaskdispatch } from "../context/Taskscontext";
import { useTost } from "../context/TostContext";
export default function Btndone({ isdonetask }) {
  const { dispatch } = useTaskdispatch();
  const { showsnakhide } = useTost();
  function handeldone() {
    dispatch({
      type: "done",
      payload: { id: isdonetask.id },
    });
    if (!isdonetask.isComplete) {
      showsnakhide("the task is done", "success");
    } else {
      showsnakhide("the task reterned to not done", "error");
    }
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
