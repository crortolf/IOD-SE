import { TextField } from "@mui/material";

function LoginForm() {
  return (
    <form>
      {" "}
      <TextField
        required
        id="outlined-required"
        label="Email"
        sx={{
          "& .MuiInputLabel-root": { color: "white" },
          "& .MuiInputLabel-root.Mui-focused": { color: "white" },
          "& .MuiOutlinedInput-root": {
            color: "#white",
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "white" },
            "&.Mui-focused fieldset": { borderColor: "white" },
          },
        }}
      />
      <br />
      <br />
      <TextField
        required
        id="outlined-required"
        label="Password"
        sx={{
          "& .MuiInputLabel-root": { color: "white" },
          "& .MuiInputLabel-root.Mui-focused": { color: "white" },
          "& .MuiOutlinedInput-root": {
            color: "#white",
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "white" },
            "&.Mui-focused fieldset": { borderColor: "white" },
          },
        }}
      />
    </form>
  );
}

export default LoginForm;
