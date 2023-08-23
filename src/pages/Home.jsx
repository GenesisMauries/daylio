import { Container } from "@mui/material";
import Header from "../components/Header";
import EmotionForm from "./../components/EmotionForm";

export function Home() {
  return (
    <Container>
      <Header />
      <EmotionForm />
    </Container>
  );
}

export default Home;
