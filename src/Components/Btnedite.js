import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import { TaskesList } from "../context/Taskscontext";
import { useContext } from "react";
export default function Btnedite({ edittask }) {
  const [newtask, setNewtask] = useContext(TaskesList);

  const [fieldsTask, setFieldsTask] = useState({ title: "", details: "" });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setFieldsTask({ title: edittask.title, details: edittask.body });
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
  function handeleditclick() {
    const taskuptodate = newtask.map((t) => {
      if (t.id == edittask.id) {
        return { ...t, title: fieldsTask.title, body: fieldsTask.details };
      } else {
        return t;
      }
    });
    setNewtask(taskuptodate);
    localStorage.setItem("tasks", JSON.stringify(taskuptodate));
    setOpen(false);
  }
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        style={{ width: "90%!important", direction: "rtl" }}
      >
        <DialogTitle>تعديل {edittask.title}</DialogTitle>
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
      <IconButton
        color="btneditcolor"
        size="small"
        style={{
          background: "#fff",
          borderRadius: "50%",
          border: "1px solid btneditcolor",
          marginLeft: "15px",
        }}
        onClick={handleClickOpen}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    </>
  );
}
