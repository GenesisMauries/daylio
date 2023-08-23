import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        La pagina que buscas no existe
      </Typography>
      <Button variant="contained" color="inherit" onClick={handleClick}>
        Volver al inicio
      </Button>
    </Box>
  );
}
export default NotFound;

// const primary = purple[500]; // #f44336

// export default function NotFound() {
//   return (

//   );
// }
