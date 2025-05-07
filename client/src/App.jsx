import Home from "./pages/Home";
import { CssBaseline, GlobalStyles } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "html, body, #root": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
            minHeight: "100vh",
            fontFamily: "'Roboto', sans-serif",
            backgroundColor: "#f9f9f9",
          },
        }}
      />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
