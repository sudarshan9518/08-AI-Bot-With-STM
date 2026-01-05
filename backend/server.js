require("dotenv").config()
const app  = require("./src/app")
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse = require("./src/service/ai.service");

const { text } = require('stream/consumers');


const httpServer = createServer(app);
const io = new Server(httpServer, { 
   cors: {
        origin: "http://localhost:5173", // Adjust 
    } });

const charHistory = [
  

]


io.on("connection", (socket) => { // build - in
 console.log("A User Connected");


 socket.on("disconnect", ()=>{  // build - in
    console.log("user disconnected");
    
 })
  socket.on("ai-message", async (data)=>{//custome ai-message event name  / event name
   console.log(data.prompt);

   charHistory.push({
    role : "user",
    parts :[{text : data}]
   })
   const response = await generateResponse(charHistory)

   charHistory.push({
    role : "model",
    parts :[{
      text : response
    }]
   })

   console.log("AI-Response:", response );
   socket.emit("ai-message-response", response)



   
   
    
    
    
 })
 
});


httpServer.listen(3000, ()=>{
    console.log("port is running on 3000");
    
})
