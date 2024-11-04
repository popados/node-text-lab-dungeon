import chalk from "chalk";

const firstRoom = {
    intro: {
        IntroSentence: "The door creaks open, \n revealing" + chalk.green(" a room ") + "lost to time.",
        IntroSecondSentence: `Shelves line the walls, \n\r filled with` + chalk.yellow(` books `) + `and ` + chalk.blue(`oddities`) + `\n\r covered in a thick layer of dust.`,
        IntroThirdSentence: "" + chalk.yellow("Strange markings ") + "are etched into the floor, \n\r leading toward an " + chalk.magenta("ancient-looking puzzle") + "\n\r on a pedestal" + " in the center.",
        IntroFourthSentence:"As you enter, \n\r a soft whisper seems to echo from the walls, \n\r urging you to" + chalk.red(" solve ") + "what lies ahead.",
        IntroFifthSentence: "You can almost feel the room watching, \n\r waiting for you to" + chalk.yellow(" unlock its secrets.")
    },
    puzzleSolution: {
        solution: 'RGB'
    }
}

const labratory = {
    coldClinicalHorror: {
        firstSentence: "You push open the heavy door to the left and you are \n\r greeted by the stark brightness of a " + chalk.green("laboratory ") + "\n\r filled with" + chalk.yellow(" cold metal ") + "and " + chalk.yellow("gleaming glass."),
        secondSentence: "A sickly, antiseptic odor lingers in the air, \n\r mixing with something else—something metallic and dark.",
        thirdSentence: "Tables are cluttered with " + chalk.yellow("strange instruments") + ", \n\r their cruel designs hinting at purposes \n\r best left unknown.",
        fourthSentence: "Against one wall, " + chalk.yellow("rusty chains") + " dangle ominously, \n\r as if waiting for the next unwilling occupant.",
        fifthSentence: "A "+ chalk.magenta("puzzle box ") +" lies on one of the tables,\n\r surrounded by syringes and vials with faded labels.",
    },

    macabreChaotic : {
        firstSentence: "The door creaks open to reveal a chaotic \n\r scene of" + chalk.green(" abandoned experiments") + "\n\r and " + chalk.red("long-forgotten horrors."),
        secondSentence: chalk.yellow("Broken vials") + " and " + chalk.yellow("shattered glass") + " litter the floor,\n\r while dark stains splatter the walls, hinting\n\r at a past soaked in" + chalk.red(" suffering."),
        thirdSentence: "The flickering light casts strange shadows\n\r on the walls, where " + chalk.green("strange diagrams") + " are\n\r scrawled in frantic, looping script.",
        fourthSentence: "Near the far wall, a" + chalk.yellow(" sinister-looking\n\r apparatus") + " sits half-assembled,\n\r its purpose unclear yet\n\r unnervingly malevolent.",
        fifthSentence: "In the center of it all, a "+ chalk.magenta("puzzle device")+ "\n\r sits—part of the machinery or a test for\n\r those who dare enter this chamber.",
        sixthSentence: "null"
    },
    shadowsOfSuffering : {
        firstSentence: "You enter the room, and an overwhelming sense of dread washes over you.",
        secondSentence: "The air is thick with the stench of chemicals, stale and almost suffocating.",
        thirdSentence: "Shadows cling to the dark stone walls, casting twisted shapes over worn leather straps and metal restraints bolted to a table in the center.",
        fourthSentence: "Strange devices are scattered on shelves, their jagged edges gleaming faintly.",
        fifthSentence: "A puzzle box lies on one of the tables, surrounded by syringes and vials with faded labels.",
        sixthSentence: "Every object here feels touched by the suffering of those who came before you—and perhaps waits for the next unfortunate visitor.",
    },
}




export {firstRoom, labratory}