import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useState, useContext } from "react";
import { TaskesList } from "../context/Taskscontext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
export default function Btndelete({ deltask }) {
  const [newtask, setNewtask] = useContext(TaskesList);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const delopen = () => {
    setOpen(true);
  };
  function handeldel() {
    const taskdel = newtask.filter((t) => {
      return t.id !== deltask.id;
    });
    setNewtask(taskdel);
    localStorage.setItem("tasks", JSON.stringify(taskdel));
    setOpen(false);
  }
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        style={{ width: "90%!important", direction: "rtl" }}
      >
        <DialogTitle>حذف {deltask.title}</DialogTitle>
        <DialogContent>
          <Typography>انت الأن تقوم بحذف المهمة</Typography>
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handeldel}>
            حذف
          </Button>
          <Button onClick={handleClose}>ألغاء</Button>
        </DialogActions>
      </Dialog>
      <div
        style={{
          background: "#fff",
          borderRadius: "50%",
          border: "1px solid primary",
          marginLeft: "15px",
        }}
      >
        <IconButton color="primary" size="small" onClick={delopen}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </>
  );
}
