//Task 1
let excerciseLogs = [
    {exType: "Arms", setPer: 3, repPer: 12, duration: 45},
    {exType: "Back", setPer: 3, repPer: 10, duration: 45},
    {exType: "Chest", setPer: 4, repPer:10, duration: 60},
    {exType: "Legs", setPer: 3, repPer: 8, duration: 35},
    {exType: "Cardio", setPer: 4, repPer: 10, duration: 40}
];

//stretch goal here

//Task 2: trying to add 
function calcTotalDuraton (excerciseLogs){
    let total = 0;
    for (const item of excerciseLogs){
        total += item.duration;
    }
    return total;
};

function calcTotalSets (excerciseLogs){
    let total = 0;
    for (const item of excerciseLogs){
        total += item.setPer;
    }
    return total;
};

function calcTotalreps (excerciseLogs){
    let total = 0;
    for (const item of excerciseLogs){
        total += item.repPer;
    }
    return total;
};
