import { AppBar, Toolbar, Box, Typography } from "@mui/material";

const Header = () => {
  const logo = "https://dashboard.getinvoice.co/dboard/img/logo.png";

  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar
        sx={{
          width: "90vw",
          justifyContent: "space-between",
          margin: "auto"
        }}
      >
        <img src={logo} alt="logo" style={{ width: 120, marginRight: 10 }} />
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          Invoice Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
