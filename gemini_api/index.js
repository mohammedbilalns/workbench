import { GoogleGenAI } from "@google/genai"

class AIService {
  static async generateText(prompt) {
    
    const response = await gemini.models.generateContent({
      //model:  "gemini-3.1-flash-lite",
      model: "gemma-4-26b-a4b-it",
      contents: prompt
    })

    return response.text
  }

  static async listModels(){
    const models = await gemini.models.list()
    for await (const model of models) {
      console.log(model.name)
    }
  }
}

if(!process.env.GEMINI_API_KEY){
  throw new Error('GEMINI_API_KEY is not set')
}

export const gemini = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
})

async function  fetchResponse(){
  try {
    const result = await AIService.generateText("What is javascript ")
    console.log("result:  ", result )

  }catch(err){
    console.error("error: ", err)
  }
}
fetchResponse()
//AIService.listModels()
