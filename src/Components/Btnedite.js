import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
export default function Btnedite() {
  return (
    <>
      <IconButton
        color="btneditcolor"
        size="small"
        style={{
          background: "#fff",
          borderRadius: "50%",
          border: "1px solid btneditcolor",
          marginLeft: "15px",
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    </>
  );
}
