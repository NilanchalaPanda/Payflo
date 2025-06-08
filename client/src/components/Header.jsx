import { AppBar, Toolbar, Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar
        sx={{
          width: "90vw",
          margin: "auto"
        }}
      >
        <img src={"/vite.png"} alt="logo" style={{ width: 40, marginRight: 10 }} />
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          PayFlo
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
