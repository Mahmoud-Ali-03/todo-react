import { TaskesList } from "../context/Taskscontext";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useContext, useEffect, useMemo, useState } from "react";
import Btndone from "./Btndone";
import Btnedite from "./Btnedite";
import Btndelete from "./Btndelete";
import Typography from "@mui/material/Typography";
import "./Taskslist.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import { useTost } from "../context/TostContext";
export default function TasksList() {
  const { showsnakhide } = useTost();
  const [alignment, setAlignment] = useState("all");
  let [newtask, setNewtask] = useContext(TaskesList);
  const [open, setOpen] = useState(false);
  const [openDel, setOpendel] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [fieldsTask, setFieldsTask] = useState({ title: "", details: "" });
  const handelopenedit = (task) => {
    setOpen(true);
    setFieldsTask({ title: task.title, details: task.body });
    setCurrentTask(task);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function handelfeldTitle(even) {
    setFieldsTask({ ...fieldsTask, title: even.target.value });
  }
  function handelfeldDetails(even) {
    setFieldsTask({ ...fieldsTask, details: even.target.value });
  }
  const delhandelopen = (e) => {
    setCurrentTask(e);
    setOpendel(true);
  };
  const delClose = () => {
    setOpendel(false);
  };

  function handeldel() {
    const taskdel = newtask.filter((t) => {
      return t.id !== currentTask.id;
    });
    setNewtask(taskdel);
    localStorage.setItem("tasks", JSON.stringify(taskdel));
    setOpendel(false);
    showsnakhide("task Deleted", "success");
  }

  function handeleditclick() {
    const taskuptodate = newtask.map((t) => {
      if (t.id == currentTask.id) {
        return { ...t, title: fieldsTask.title, body: fieldsTask.details };
      } else {
        return t;
      }
    });
    setNewtask(taskuptodate);
    localStorage.setItem("tasks", JSON.stringify(taskuptodate));
    setOpen(false);
    showsnakhide("Task edited successfly", "success");
  }
  const showcompleted = useMemo(() => {
    return newtask.filter((t) => {
      return t.isComplete;
    });
  }, [newtask]);
  const shownotcompleted = useMemo(() => {
    return newtask.filter((t) => {
      return !t.isComplete;
    });
  }, [newtask]);

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
          marginBottom: "15px",
          borderRadius: "5px",
          textAlign: "right",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        dir="rtl"
        className="block-task"
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
          <Btnedite edittask={task} handedit={handelopenedit} />
          <Btndelete deltask={task} handeldel={delhandelopen} />
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
      <Dialog
        open={openDel}
        onClose={delClose}
        style={{ width: "90%!important", direction: "rtl" }}
      >
        <DialogTitle>حذف المهمة</DialogTitle>
        <DialogContent>
          <Typography>انت الأن تقوم بحذف المهمة</Typography>
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handeldel}>
            حذف
          </Button>
          <Button onClick={delClose}>ألغاء</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open}
        onClose={handleClose}
        style={{ width: "90%!important", direction: "rtl" }}
      >
        <DialogTitle>تعديل </DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              id="titletask"
              label="العنوان"
              variant="outlined"
              style={{ width: "400px", marginTop: "10px" }}
              value={fieldsTask.title}
              onChange={handelfeldTitle}
            />
            <TextField
              id="disctask"
              label="التفاصيل"
              variant="outlined"
              multiline
              rows={4}
              style={{ width: "400px" }}
              value={fieldsTask.details}
              onChange={handelfeldDetails}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handeleditclick}>
            تعديل
          </Button>
          <Button onClick={handleClose}>ألغاء</Button>
        </DialogActions>
      </Dialog>
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
