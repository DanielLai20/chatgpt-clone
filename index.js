const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-GYHfmZnwYoHfN6brTIiIGOST",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function callApi() {
    const response = await openai.createCompletion ({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
    })
    console.log(response.data.choices[0].text)
}

callApi()