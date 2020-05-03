//Clicking either "SHOOT" button
//let first_shot= Math.floor(Math.random()*10)+1;
let TeamoneshootButton = document.querySelector("#teamone-shoot-button"); 
let TeamtwoshootButton = document.querySelector("#teamtwo-shoot-button");

document.querySelector('button').addEventListener('click', (event) =>{
    event.target.textcontent = 'SHOOT'
let first_shot = Math.floor(Math.random() *10)+1;
})
console.log('SHOOT');
console.log(TeamoneshootButton);
console.log(TeamtwoshootButton);
console.log(Math.floor(Math.random()*10)+1);
// number of shots taken
let teamonenumshots = document.querySelector("#teamone-numshots");
let teamtwonumshots = document.querySelector("#teamtwo-numshots");
console.log(teamonenumshots);
console.log(teamtwonumshots);
// number of goals 
let teamonenumgoals = document.querySelector("#teamone-numgoals");
let teamtwonumgoals = document.querySelector("#teamtwo-numgoals");
console.log(teamonenumgoals);
console.log(teamtwonumgoals);
//Clicking the "RESET" button
//number of resets
let reset = document.querySelector("#reset-button");
let numberofresets = document.querySelector("#num-resets");

document.querySelector('button').addEventListener('click', (event) =>{
    event.target.textcontent = 'RESET'
})

console.log('RESET');
console.log(reset);
console.log(numberofresets);

