import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useTaskdispatch } from "../context/Taskscontext";
import { useTost } from "../context/TostContext";
export default function Formadd() {
  const [titlefield, setTitlefield] = useState("");
  let handeltitle = (event) => {
    setTitlefield(event.target.value);
  };
  let { dispatch } = useTaskdispatch();
  const { showsnakhide } = useTost();
  let handeladd = () => {
    dispatch({ type: "added", payload: { titletask: titlefield } });
    setTitlefield("");
    showsnakhide("The Task added sucsses", "success");
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
          disabled={titlefield.length === 0}
        >
          إضافة
        </Button>
      </div>
    </>
  );
}
