import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Btndelete({ deltask, handeldel }) {
  const delopen = () => {
    handeldel(deltask);
  };

  return (
    <>
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
