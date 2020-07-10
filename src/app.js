//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) 
{
  Array0 = [managerName, managerAge, currentTeam, trophiesWon];
  return Array0;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

// //Progression 2 - create a formation object and return it
 var formation = [4, 4, 3];

//write your function here
function createFormation(array1)
{
  if(array1.length==0)
  {
    return null;
  }
  let objectFormation =
  {
    "defender" : array1[0],
    "midfield" : array1[1],
    "forward" : array1[2]
  };
  return objectFormation;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

 //Progression 3 - Filter players that debuted in ___ year/  
 function filterByDebut(year)
{
  let array0 = players.filter((player) => player.debut === year);
  return array0;
}

//  //Progression 4 - Filter players that play at the position _______
 function filterByPosition(position) 
 {
  let array0 = players.filter((player) => player.position === position);
  return array0;
 }

//  //Progression 5 - Filter players that have won ______ award
function filterByAward(awardName)
{
  var playerList = [];
  for (var i=0 ; i < players.length; i++)
    for (var j=0 ; j < players[i].awards.length; j++)
      if(players[i].awards[j].name == awardName)
        if(!playerList.includes(players[i])) playerList.push(players[i]);
  return playerList;
}

// //Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName,noOfTimes) 
 {
   var playerList = [];
   for (var i=0 ; i < players.length; i++)
   {
    var count = 0;  
    for (var j=0 ; j < players[i].awards.length; j++)
       if (players[i].awards[j].name == awardName) 
        count ++;
       if (count == noOfTimes)
         playerList.push(players[i]);
   }
 return playerList;
}
// //Progression 7 - Filter players that won ______ award and belong to ______ country
  function filterByAwardxCountry(awardName, country) {
    var playerList = [];
   for (var i=0 ; i < players.length; i++)
      for(var j=0;j< players[i].awards.length;j++)
        if(
          players[i].awards[j].name == awardName && players[i].country == country
        )
          if (!playerList.includes(players[i])) playerList.push(players[i]);
   return playerList;
  } 
 
// //Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) 
{ 
  
  let playerList = [];
  let c = 0;
    for (let i = 0; i < players.length; i++) {
      if (players[i].awards.length >= noOfAwards &&players[i].team == team &&players[i].age <= age) {
        playerList[c++] =  players[i];     
      }
    }
    console.log(playerList);
  return playerList;
}
// //Progression 9 - Sort players in descending order of their age
 function SortByAge()
 {
   var playerList = [];

   playerList = Object.age(players).sort()
   return playerList.reverse();
  }


// //Progression 10 - Sort players beloging to _____ team in descending order of awards won
 function FilterByTeamxSortByNoOfAwards(team) 
 {
   var playerList = [];
   var sortPlayers = [];
   var x = 0;
   for (let y of players)
   {
     if (y.team == team) 
     {
       playerList[x++] = y;

     }
   }
   sortPlayers = playerList.awards.length.sort()
   return sortPlayers.reverse();
 }
// //Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

// //Challenge 2 - Sort players that are older than _____ years in alphabetical order
// //Sort the awards won by them in reverse chronological order
