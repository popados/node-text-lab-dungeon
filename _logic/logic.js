import { firstRoom, labratory} from '../_scenes/scene.js';
import {confirm, select, input} from '@inquirer/prompts';
import Character from '../_character/character.js';




async function asyncCall() {
    console.log('calling')
    const result = await resolveAfter2Seconds();
    console.log(result);
    console.log('~~~~~~~~~~~~~~~~~~~~~')
}
    // console.clear()
    // console.log(firstRoom.intro.IntroSentence)
    // Expected output: "resolved"
    // console.log(firstRoom.intro.IntroSecondSentence)

// async function startGame(){

//     const startGame = await confirm({ 
//         message: 'Would you like to start the game?' 
//     });
//     if (startGame === false) {
//         console.log('Goodbye');
//         process.exit();
//     } else {
//         const name = await input({
//             message: 'What is your name?'
//         })
//         // return name;
//         console.log(name)
//         console.log('--')
//     }
// }
    // console.clear();
    
function introRoom() {
    console.log(firstRoom.intro.IntroSentence)
    console.log(firstRoom.intro.IntroSecondSentence)
    console.log("--")
    console.log(firstRoom.intro.IntroThirdSentence)
    console.log("--")
    console.log(firstRoom.intro.IntroFourthSentence)
    console.log("--")
    console.log(firstRoom.intro.IntroFifthSentence)
    console.log("--")
    
}

function westRoom() {
    console.log("~~~~~~~~~~~~~~~~~~~~~")
    console.log(labratory.coldClinicalHorror.firstSentence)
    console.log("--")
    console.log(labratory.coldClinicalHorror.secondSentence)
    console.log("--")
    console.log(labratory.coldClinicalHorror.thirdSentence)
    console.log("--")
    console.log(labratory.coldClinicalHorror.fourthSentence)
    console.log("--")
    console.log(labratory.coldClinicalHorror.fifthSentence)
    console.log("--")
}

function eastRoom() {
    console.log("~~~~~~~~~~~~~~~~~~~~")
    console.log(labratory.macabreChaotic.firstSentence)
    console.log("--")
    console.log(labratory.macabreChaotic.secondSentence)
    console.log("--")
    console.log(labratory.macabreChaotic.thirdSentence)
    console.log("--")
    console.log(labratory.macabreChaotic.fourthSentence)
    console.log("--")
    console.log(labratory.macabreChaotic.fifthSentence)
    console.log("--")
    // console.log(labratory.macabreChaotic.sixthSentence)
}

export { introRoom, westRoom, eastRoom };