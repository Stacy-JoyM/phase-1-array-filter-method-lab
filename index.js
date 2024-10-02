// Code your solution here
let drivers= ["Stacy", "Tatianna", "Chelsea", "Manchester","Duolingo", "Duostand"];

function findMatching(drivers,name){
    return drivers.filter(driver=> driver.toLowerCase() === name.toLowerCase());
}



function fuzzyMatch(drivers, name){
    return drivers.filter(driver => driver.startsWith(name))
}

let driverObj = [
    {
        name:"Cassidy",
        hometown:"States"
    }, 
    {
        name:"Paul",
        hometown:"Georgia"
    },
    {
        name:"Cassidy",
        hometown:"Atlanta"
    },
    {
        name:"Nafula", 
        hometown:"Kisumu"
    }
]
function matchName(driverObj, name){
    //return each element whose name property matches the string
    return driverObj.filter(driver=> driver.name === name )

}
