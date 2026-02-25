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

 function allPlayersWithNames () {
    const {home, away} = gameObject()

    const allPlayersWithNames = [
        ...Object.keys(home.players).map( name => ({name, ...home.players[name]})) ,
        ...Object.keys(away.players).map( name => ({name, ...away.players[name]})) 
    ]

    return allPlayersWithNames
 }


 const playerLookUp = Object.fromEntries(allPlayersWithNames().map ( p => ([p.name, p])))

 const getPlayer = (name) => playerLookUp[name]

const getTopPlayerBy = (stat) => allPlayersWithNames().reduce ((prev, curr) => (curr[stat] > prev[stat] ? curr : prev))

const playerWithLongestName = () => allPlayersWithNames().reduce((a, b) => (b.name.length > a.name.length) ? b : a)


console.log(playerWithLongestName())