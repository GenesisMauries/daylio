import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography, Avatar, Grid } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

function Login() {
  const navigate = useNavigate();
  const { user, googleSignIn } = UserAuth();
  const signIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [navigate, user]);
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
      <Grid container columns={12} justifyContent="center" alignItems="center">
        <Grid item xs={10} sm={5} md={3}>
          <Typography variant="h1">Daylio</Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <Avatar
            src="https://github.com/GenesisMauries/lux/blob/master/src/images/icono-45-lux.png?raw=true"
            alt="Logo"
            variant="square"
            sx={{ width: 75, height: 75 }}
          ></Avatar>
        </Grid>
      </Grid>
      <Grid
        container
        columns={12}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 3 }}
      >
        <Grid item>
          <Button
            variant="contained"
            color="inherit"
            size="large"
            startIcon={<GoogleIcon />}
            onClick={signIn}
          >
            Entrar con Google
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
