import gameObject from "./data.js"

// const gameObject = require("./data.js")

const data = gameObject()

const players = [
    ...Object.entries(data.home.players).map (([name, stats]) => ({Name: name, Team: "Home", ...stats})), 
    ...Object.entries(data.away.players).map (([name, stats]) => ({Name: name, Team: "Away", ...stats})), 
]

const HEADERS = ["Name", "Team", "Shoe", "Points", "Rebounds", "Assists", "Steals", "Blocks", "SlamDunks"]



if (typeof document !== "undefined"){
    const table = document.getElementById("table")
    if (table){
    
    table.innerHTML = ''
    
    const tableHead = document.createElement("thead")
    const headerRow = document.createElement("tr")

    const fragment = document.createDocumentFragment() //creating a DocumentFragment(A "vDOM" node that exists in memory) prevents lag as each input will cause layout recalculation 

    const tableBody = document.createElement("tbody")

    HEADERS.forEach( h => {     //Use for each instead of map to avoid unnecessary memory load 
        const th = document.createElement("th")
        th.textContent = h
        headerRow.appendChild(th)
    })

    players.forEach (p => {
        const tr = document.createElement("tr")

        
        HEADERS.forEach( h => {
            const td = document.createElement("td")
            td.textContent = p[h] ?? "0"  //using the Nullish Coalescing Operator
            tr.appendChild(td)
        })     

    
        
        fragment.appendChild(tr)
    })
    



    tableBody.appendChild(fragment)
    tableHead.appendChild(headerRow)
    table.appendChild(tableHead)
    table.appendChild(tableBody)
    }else{
        console.log("Couldn't find root")
    }





}else {
    console.log("Skipping this, will be rendered on the web")
}






