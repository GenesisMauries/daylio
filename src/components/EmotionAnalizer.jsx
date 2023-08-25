import axios from "axios";

function EmotionAnalyzer() {
  // const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const apiKey = "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";

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