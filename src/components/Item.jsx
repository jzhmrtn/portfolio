import { Paper } from "@mui/material";

function Item(prop) {
  return (
    <Paper className="z-1">
      <img src={prop.src} alt="" />
    </Paper>
  );
}

export default Item;
