function gameObject() {
   return {
    home: {
        teamName: "Brookyln Nets",
        colors: ["Black", "White"],
        players: {
            'Alan Anderson': {
               Number: 0,
               Shoe: 16,
               Points: 22,
               Rebounds: 12,
               Assists: 12,
               Steals: 3,
               Blocks: 1,
               SlamDunks: 1,
            },
            'Reggie Evans': {
               Number: 30,
               Shoe: 14,
               Points: 12,
               Rebounds: 12,
               Assists: 12,
               Steals: 12,
               Blocks: 12,
               SlamDunks: 7,
            },
            'Brook Lopez': {
               Number:  11,
               Shoe: 17,
               Points: 17,
               Rebounds: 19,
               Assists: 10,
               Steals: 3,
               Blocks: 1,
               SlamDunks: 15,
            },
            'Mason Plumlee': {
               Number: 1,
               Shoe: 19,
               Points: 26,
               Rebounds: 12,
               Assists: 6,
               Steals: 3,
               Blocks: 8,
               SlamDunks: 5,
            },
            'Jason Terry': {
               Number: 31, 
               Shoe: 15,
               Points: 19,
               Rebounds: 2,
               Assists: 2,
               Steals: 4,
               Blocks: 11,
               SlamDunks: 1,
            },
        
        }
    },
    away: {
        teamName: "Charlotte Hormets",
        colors: ["Turquoise", "Purple"],
        players: {
            'Jeff Adrien': {
               Number: 4,
               Shoe: 18,
               Points: 10,
               Rebounds: 1,
               Assists: 1,
               Steals: 2,
               Blocks: 7,
               SlamDunks: 2,
            },
            'Bismak Biyombo': {
               Number: 0,
               Shoe: 15,
               Points: 12,
               Rebounds: 4,
               Assists: 7,
               Steals: 7,
               Blocks: 15,
               SlamDunks: 10,
            },
            'Desagana Diop': {
               Number:  2,
               Shoe: 14,
               Points: 24,
               Rebounds: 12,
               Assists: 12,
               Steals: 4,
               Blocks: 5,
               SlamDunks: 5,
            },
            'Ben Gordon': {
               Number: 8,
               Shoe: 15,
               Points: 33,
               Rebounds: 3,
               Assists: 2,
               Steals: 1,
               Blocks: 1,
               SlamDunks: 0,
            },
            'Bendan Haywood': {
               Number: 33, 
               Shoe: 15,
               Points: 6,
               Rebounds: 12,
               Assists: 12,
               Steals: 22,
               Blocks: 5,
               SlamDunks: 12,
            },
        
        }

    }
   }

}


const playerSearchByName = (name) => {
   return allPlayersWithNames().find ( player => player.name === name)
}


function allPlayersWithNames () {
const {home, away} = gameObject()

const allPlayersWithNames = [
   ...Object.keys(home.players).map( name => ({name, ...home.players[name]})), 
   ...Object.keys(away.players).map( name => ({name, ...away.players[name]})), 

]
return allPlayersWithNames

}



/////////////////////////////////////////////////////



function numPointsScored (name) {
   return playerSearchByName(name).Points
}

console.log(numPointsScored("Alan Anderson"))


function shoeSize (name) {
   return playerSearchByName(name).Shoe
}


function teamColors (teamName) {
   const game = gameObject()

   const team = Object.values(game).find (team => team.teamName === teamName)

   return team ? team.colors : []
}



function teamNames () {
   const game  = gameObject()

   const names = Object.values(game).map(t => t.teamName)


    return names
}



function playerNumbers (teamName) {


   const game = gameObject()

   const team = Object.values(game).find(t => t.teamName === teamName)

   return team ? Object.values(team.players).map(p => p.Number) : []

   

}


function playerStats (name) {
   return playerSearchByName(name)
}


function bigShoeRebounds () {

   const sorted = allPlayersWithNames().sort((a, b) => b.Shoe - a.Shoe)

   return sorted[0].Rebounds 

}


function mostPointsScored () {
   const sorted = allPlayersWithNames().sort( (a, b) => b.Points - a.Points)

   return sorted[0].name
}




function playerWithLongestName () {
   const sorted = allPlayersWithNames().sort((a, b) => b.name.length - a.name.length)
   
   return sorted[0]
}

function doesLongNameStealATon () {
   const player = playerWithLongestName().name
   const sorted = allPlayersWithNames().sort ( (a, b) => b.Steals - a.Steals )
   
   return sorted[0].name === player
}


function winningTeam () {
   const {home, away} = gameObject()

   const homePoints = Object.values(home.players).reduce( (sum,player) => sum + player.Points, 0)

   const awayPoints = Object.values(away.players).reduce( (sum,player) => sum + player.Points, 0)

   
   return awayPoints > homePoints ? away.teamName : home.teamName
}

