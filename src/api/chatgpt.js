import axios from "axios";
import apiKey from "../env";

const chatgpt = async (emotion, text) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Soy una persona que busca egistrar sus emociones, hoy específicamente esta es la emoción que siento: ${emotion} y estos son mis comentarios adicionales:${text}. por favor haz que el resumen que describa las tendencias observadas generando una síntesis coherente, importante que sean solo las tendencias observadas sin tu opinión, sugerencias o recomendaciones,  en primera persona y de 20 líneas`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(error);
  }
};

export default chatgpt;
