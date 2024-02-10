import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
export default function Btndone() {
  return (
    <>
      <div
        style={{
          background: "#fff",
          borderRadius: "50%",
          border: "1px solid #65B741",
          marginLeft: "15px",
        }}
      >
        <IconButton color="btndonecolor" size="small">
          <CheckIcon fontSize="small" />
        </IconButton>
      </div>
    </>
  );
}
