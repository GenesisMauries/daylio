import { UserAuth } from "../context/AuthContext";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export function Home() {
  const { user, logOut } = UserAuth();
  const signOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <AppBar position="static" sx={{ backgroundColor: "#E0E0E0" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#1D1D1D" }}
          >
            Daylio
          </Typography>
          <Button sx={{ color: "#1D1D1D" }} onClick={signOut}>
            SALIR
          </Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Home;
