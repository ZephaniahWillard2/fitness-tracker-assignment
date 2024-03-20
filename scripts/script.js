//Task 1
let excerciseLogs = [
    {exType: "Arms", setPer: 3, repPer: 12, duration: 45},
    {exType: "Back", setPer: 3, repPer: 10, duration: 45},
    {exType: "Chest", setPer: 4, repPer:10, duration: 60},
    {exType: "Legs", setPer: 3, repPer: 8, duration: 35},
    {exType: "Cardio", setPer: 4, repPer: 10, duration: 40}
];

//stretch goal here

//Task 2: adding in functions to calculate total duration (in minutes), total sets, total reps.
            //Not sure how to display yet.
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

//task 3: adding a class. 
            //Not sure how to display yet.
class Workout {
    constructor(type, sets, reps, duration, intensity){
        this.type = type;
        this.sets = sets;
        this.reps = reps;
        this.duration = duration;
        this.intensity = intensity
    }

    displaySummery(){
        return `Exercise Type: ${type}
        Number of Sets: ${sets}
        Number of Reps: ${reps}
        Total Durations: ${this.duration}
        Degree of Intensity: ${this.intensity}`
    };
}