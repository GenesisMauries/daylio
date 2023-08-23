import { Container } from "@mui/material";
import Header from "../components/Header";
function Login() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Establece la altura mínima de la ventana para centrar verticalmente
      }}
    >
      <Header />
    </Container>
  );
}

export default Login;
