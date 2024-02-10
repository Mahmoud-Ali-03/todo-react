import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./Btnscontrol.css";
import { useState } from "react";
import Typography from "@mui/material/Typography";
export default function Btnscontrol() {
  const [alignment, setAlignment] = useState("notdone");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        className="btns-action"
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
    </>
  );
}
