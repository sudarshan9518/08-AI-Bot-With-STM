const  {GoogleGenAI}  = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateResponse(charHistory) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: charHistory,
    // config: {
    //   systemInstruction : `
    //    only give main points
    //    short and precise answer
    //    only give short response 
    //    response should be objective
    //    add one emoji in it`
    // }
       
  });
 
  return response.text;
}

module.exports = generateResponse;