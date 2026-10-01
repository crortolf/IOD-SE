import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function MyAppBar() {
  const nav = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={() => nav("/")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => nav("/login")}>
          Login
        </Button>
        <Button color="inherit" onClick={() => nav("/rates")}>
          Bitcoin Rates
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
