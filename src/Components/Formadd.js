import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { TaskesList } from "../context/Taskscontext";
import { useContext } from "react";
export default function Formadd() {
  const [titlefield, setTitlefield] = useState("");
  let handeltitle = (event) => {
    setTitlefield(event.target.value);
  };
  let listcornt = useContext(TaskesList);
  let tasks = listcornt.map((task) => {
    return task;
  });
  let handeladd = () => {
    console.log(tasks);
  };
  return (
    <>
      <div
        dir="rtl"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextField
          id="outlined-basic"
          label="عنوان المهمة"
          variant="outlined"
          sx={{ m: 1, width: "75%" }}
          value={titlefield}
          onChange={handeltitle}
        />
        <Button
          variant="contained"
          className="addbtn"
          onClick={handeladd}
          style={{ padding: "12px 5px", fontSize: "18px" }}
        >
          إضافة
        </Button>
      </div>
    </>
  );
}
