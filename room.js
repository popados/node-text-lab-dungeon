import { first } from "rxjs"

let firstRoom = true

while (firstRoom === true) {
    //logic
    console.log('room is true')
    firstRoom = false
}


let room = (Math.floor(Math.random() * 3) + 1)

if (room == 1) {
} if (room == 2) {

 } 
if (room == 3) {

 }
else {
    console.log(`room selected ${room}`)
}