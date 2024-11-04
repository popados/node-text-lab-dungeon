


const laboratoryPuzzles = {
    NumberComboPuzzle: {
        Premise: "The player finds a safe in the corner of the laboratory. This is clearly a three digit combination.", 
        Objective: "Need to find the papers that have the numbers on it, there are three with numbers. Two, Five, and Seven.", 
        Hint: "There are papers all over the floor aside from the normal text they are all written in red,five blue,seven, and green,two. a fourth paper says RGB holds the key", 
        Solution: "The user needs to examine the safe and enter the combination 527"
    }
};


const labPuzzles = {
    PuzzleButtons: {Red: "R", Blue: "B", Green: "G"},
    PuzzleObjectives: { 
        NumberComboPuzzle: "Need to find the papers that have the numbers on it, there are three with numbers. Two, Five, and Seven.",
        ButtonSequenceMemory: "The player must press the buttons in the order specified by the note.",
        LightActivationPuzzle: "The player must activate all three switches to create the “full light."
    },
    PuzzleCombos: {
        NumberComboPuzzle: "527",
        ButtonSequenceMemory: "RGB",
        LightActivationPuzzle: "RGB"
    }, PuzzleFails: {}, PuzzleNumbers: {}
}

console.log(labPuzzles.PuzzleObjectives.NumberComboPuzzle);
console.log(labPuzzles.PuzzleCombos.NumberComboPuzzle);


const buttonPuzzle = {
    puzzle: "the cold light",
    combo: "RGB",
    buttonPrompt: "Which button do you press first?"
};

export { laboratoryPuzzles, labPuzzles, buttonPuzzle };