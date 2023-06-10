require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  // apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.GPT_ORG_ID,
  apiKey: process.env.GPT_API_KEY,
});

const openai = new OpenAIApi(configuration);

const startServer = async () => {
  try {
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: "Say this is a test",
      temperature: 0,
      max_tokens: 7,
    });
  } catch (err) {
    console.log({ err: err.response.data.error.message });
  }
};

startServer();
