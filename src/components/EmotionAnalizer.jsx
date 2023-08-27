import axios from "axios";
import apiKey from "../env";

function EmotionAnalyzer() {


  const chatWithAI = async () => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: "Hello!" }]
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
          }
        }
      );

      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  chatWithAI();

  return <>Emotion Analyzer</>;

}

export default EmotionAnalyzer;