//Clicking either "SHOOT" button
//let first_shot= Math.floor(Math.random()*10)+1;
let TeamoneshootButton = document.querySelector("#teamone-shoot-button"); 
let TeamtwoshootButton = document.querySelector("#teamtwo-shoot-button");
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

TeamoneshootButton.addEventListener('click', function() {
    let newshotstaken = Number(teamonenumshots.innerHTML) + 1;
    teamonenumshots.innerHTML = newshotstaken

    let randNum = Math.random();
    let shotissuccessful = randNum > 0.5
    if(shotissuccessful) { 
        let newteamonenumgoals = Number(teamonenumgoals.innerHTML) + 1;
        teamonenumgoals.innerHTML = newteamonenumgoals
    }

})

TeamtwoshootButton.addEventListener('click', function() {
    let newshotstaken = Number(teamtwonumshots.innerHTML) + 1;
    teamtwonumshots.innerHTML = newshotstaken

    let randNum = Math.random();
    let shotissuccessful = randNum > 0.5
    if(shotissuccessful) { 
        let newteamtwonumgoals = Number(teamtwonumgoals.innerHTML) + 1;
        teamtwonumgoals.innerHTML = newteamtwonumgoals
    }
      

})

reset.addEventListener('click', function() {
    let newresetcounter = Number(numberofresets.innerHTML) + 1;
        numberofresets.innerHTML = newresetcounter
        teamonenumshots.innerHTML = 0;
        teamtwonumshots.innerHTML = 0
        teamonenumgoals.innerHTML = 0
        teamtwonumgoals.innerHTML = 0

})





console.log(TeamoneshootButton);
console.log(TeamtwoshootButton);


