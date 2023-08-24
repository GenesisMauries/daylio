import axios from "axios";
function EmotionAnalizer() {
  const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";

  const prueba = async () => {
    try {
      const response = await axios.post(
        apiUrl,
        {
          prompt: "Que es monoku?", //prueba
          max_tokens: 50,
          temperature: 0.6,
          n: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  prueba();
  return <>OK</>;
}

export default EmotionAnalizer;
