const { type } = require("express/lib/response");

const tab = ["fraise", "pomme", "haricots"];
const tabJSON = JSON.stringify(tab);

const newTaskStruct = {

    title: "Nuit",
    description: "Livre",
    status: false
};

console.log(newTaskStruct);
console.log(typeof newTaskStruct);

const structJSON = JSON.stringify(newTaskStruct);
console.log(structJSON);
console.log(typeof structJSON);

console.log(tab);
console.log(typeof tab);

console.log(tabJSON);
console.log(typeof tabJSON);