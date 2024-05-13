//here i will explore about event driven architecture and create owm event.

//require events
const EventEmiter = require("events")
//create instane 
const myEmiter = new EventEmiter()

//create listener (we can create multiple listener and call it from one emiter)----its even driven architecture.

myEmiter.on("emitName", ()=>{
    console.log(`something 1`);
})


myEmiter.on("emitName", ()=>{
    console.log(`something 2`);
})


myEmiter.on("emitName", (param)=>{
    console.log(`something 3 ${param}`);
})

//emit or call //we can send also params
myEmiter.emit("emitName", "param1", "param2")