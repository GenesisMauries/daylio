import { useState } from "react";
import { db, auth } from "../firebase/firebase.config";
import { getDocs, collection, addDoc, Timestamp } from "firebase/firestore";
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
  const [emotion, setEmotion] = useState("");

  const handleChange = (event) => {
    setEmotion(event.target.value);
  };
  const [postList, setPostList] = useState([]);
  console.log(postList);

  const [newPost, setNewPost] = useState("");

  const postCollectionRef = collection(db, "daylioPost");

  const getpostList = async () => {
    try {
      const data = await getDocs(postCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPostList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  const onSubmitPost = async () => {
    try {
      await addDoc(postCollectionRef, {
        emotion,
        title: newPost,
        userId: auth?.currentUser?.uid,
        dateCreate: Timestamp.now(),
      });
      getpostList();
    } catch (err) {
      console.error(err);
    }
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
            onChange={handleChange}
          >
            {/* Generar dinámicamente las opciones del menú */}
            {menuOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <TextField
            id="standard-multiline-static"
            label="Descripción"
            multiline
            rows={5}
            fullWidth
            placeholder="Breve descripción de tu día o tus pensamientos actuales"
            variant="standard"
            onChange={(e) => setNewPost(e.target.value)}
          />
        </FormControl>
      </Grid>

      <Grid container columns={12} justifyContent="center" alignItems="center">
        <Button
          variant="contained"
          color="inherit"
          size="medium"
          onClick={onSubmitPost}
        >
          Registro
        </Button>
      </Grid>
    </Container>
  );
}

export default EmotionForm;
