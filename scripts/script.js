//Task 1
let excerciseLogs = [
    {exType: "Arms", setPer: 3, repPer: 12, duration: 45},
    {exType: "Back", setPer: 3, repPer: 10, duration: 45},
    {exType: "Chest", setPer: 4, repPer:10, duration: 60},
    {exType: "Legs", setPer: 3, repPer: 8, duration: 35},
    {exType: "Cardio", setPer: 4, repPer: 10, duration: 40}
];

//stretch goal here

//Task 2
function calcTotalDuraton (excerciseLogs){
    let total = 0;
    for (const item of excerciseLogs[duration]){
        total += item;
    }
    return total;
};
calcTotalDuraton();
function calcTotalSets (){

}