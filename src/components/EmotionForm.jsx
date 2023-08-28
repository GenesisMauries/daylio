import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPost } from "../firebase/firebase.post";
import chatgpt from "../api/chatgpt";
import {
  Button,
  Container,
  TextField,
  Grid,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
function EmotionForm() {
  const navigate = useNavigate();
  const [emotion, setEmotion] = useState("");
  const [newPost, setNewPost] = useState("");
  const onHandleSelect = (event) => {
    setEmotion(event.target.value);
  };
  const onHandleInput = (event) => {
    setNewPost(event.target.value);
  };

  const onSubmitPost = async () => {
    try {
      const chatResponse = await chatgpt(emotion, newPost);
      await addPost(emotion, newPost, chatResponse);
      setEmotion("");
      setNewPost("");
      navigate("/analizer");
    } catch {}
  };
  const menuOptions = [
    {
      value: "felicidad",
      label: "Felicidad: Sentimientos de alegría, placer y satisfacción.",
    },
    {
      value: "tristeza",
      label: "Tristeza: Sentimientos de pesar, melancolía y desánimo.",
    },
    { value: "ira", label: "Ira: Implica enojo, frustración y resentimiento." },
    {
      value: "miedo",
      label: "Miedo: Se manifiesta como ansiedad, preocupación y temor.",
    },
    {
      value: "sorpresa",
      label:
        "Sorpresa: Puede estar relacionada con el asombro o la admiración.",
    },
    {
      value: "disgusto",
      label: "Disgusto: Surge en respuesta a algo desagradable o repulsivo.",
    },
    {
      value: "calma",
      label: "Calma: Representa un estado de tranquilidad y relajación.",
    },
    { value: "estres", label: "Estres: Indica tensión y preocupación." },
    {
      value: "ansiedad",
      label: "Ansiedad: Acompañado de inquietud y nerviosismo.",
    },
    {
      value: "confucion",
      label:
        "Confucion: Caracterizado por la falta de claridad o entendimiento.",
    },
  ];
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        maxWidth: "60vw",
        minHeight: "60vh",
        borderRadius: "5px",
      }}
    >
      <Grid container columns={12} justifyContent="center" alignItems="center">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"> Estado</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={emotion}
            label="Emotion"
            onChange={onHandleSelect}
          >
            {/* Generar dinámicamente las opciones del menú */}
            {menuOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <TextField
            id="outlined-basic"
            label="Descripción"
            variant="outlined"
            multiline
            rows={5}
            fullWidth
            placeholder="Breve descripción de tu día o tus pensamientos actuales"
            sx={{ marginTop: "30px" }}
            onChange={onHandleInput}
          />
        </FormControl>
      </Grid>

      <Grid container columns={12} justifyContent="center" alignItems="center">
        <Button
          fullWidth
          variant="contained"
          color="inherit"
          size="large"
          onClick={onSubmitPost}
          sx={{ marginTop: "30px" }}
        >
          Registro
        </Button>
      </Grid>
    </Container>
  );
}

export default EmotionForm;
