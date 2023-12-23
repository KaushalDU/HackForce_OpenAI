const express = require("express");
const OpenAI = require("openai");
const { Messages } = require("openai/resources/beta/threads/messages/messages");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors());

const openai = new OpenAI({
    apiKey:"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"
})
app.post("/getRes",async(req,res)=>{
    const prompt = req.body.prompt;
    const response = await openai.chat.completions.create({
        model:'gpt-3.5-turbo',
        messages:[{"role":"user","content":prompt}],
        max_tokens:100,
    })
    console.log(prompt,response.choices[0].message.content)
    res.send(response.choices[0].message.content)
})

app.listen(8080,()=>{
    console.log("server is runnig at port 8080");
});