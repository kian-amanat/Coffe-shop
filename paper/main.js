


const paper = document.querySelector(".second")
const rock = document.querySelector("first")
const scissors = document.querySelector(".third")
let title = document.querySelector(".title")
let playPoint = document.querySelector(".play-point")
let camPoint = document.querySelector(".com-point")
let contentPoint = playPoint.innerText
console.log(contentPoint)




class User{
   constructor( playPoint){
   this.playerPoint = playPoint
       }
       
   }
   let user = new User( 0 );
   console.log(user)
   
   
class Computer{
      constructor(camPoint){
   this.point = camPoint
      }
   }
   let computer = new Computer(camPoint.innerHTML)
   console.log(computer)

   function mainGame1(){

      const arr = ["paper","rock", "scissors"]
      const computerPick = (arr[(Math.floor(Math.random() * arr.length))]);
      console.log(computerPick)
       console.log("rock")
       
      
      if(computerPick === "rock"){
   console.log("draw")
   let title = document.querySelector(".title")
   title.innerText =" game is Draw"
   let playPoint = document.querySelector(".play-point")
    playPoint.innerText++
    let camPoint = document.querySelector(".com-point")
    camPoint.innerText++
   
      }else if(computerPick === "paper"){
   console.log("computer wins")
   title.innerText ="Computer Won"
   
   camPoint.innerText++
   camPoint.innerText++
      }else if(computerPick === "scissors"){
       console.log("player wins")
       title.innerText =" Player Won"
   playPoint.innerText++
   playPoint.innerText++
      }
   }
   
   /////////////////////
   
   function mainGame2(){
      const arr = ["paper","rock", "scissors"]
      const computerPick = (arr[(Math.floor(Math.random() * arr.length))]);
      console.log(computerPick)
      let title = document.querySelector(".title")
   
       console.log("paper")
       console.log(computerPick)
      if(computerPick === "rock"){
   console.log("player wins")
   title.innerText =" Player Won"
    playPoint.innerText++
    playPoint.innerText++
      }else if(computerPick === "paper"){
   console.log("draw")
   title.innerText =" game is Draw"
   let playPoint = document.querySelector(".play-point")
    playPoint.innerText++
    camPoint.innerText++
      }else if(computerPick === "scissors"){
   
       console.log("computer wins")
       let camPoint = document.querySelector(".com-point")
       title.innerText ="Computer Won"
       camPoint.innerText++
       camPoint.innerText++
      }
   }
   
   
   
   ////////////////////
   function mainGame3(){
      const arr = ["paper","rock", "scissors"]
      const computerPick = (arr[(Math.floor(Math.random() * arr.length))]);
      console.log(computerPick)
      let title = document.querySelector(".title")
   
       
       console.log("scissors")
       console.log(computerPick)
      if(computerPick === "rock"){
   console.log("computer wins")
   title.innerText ="Computer Won"
   let camPoint = document.querySelector(".com-point")
   camPoint.innerText++
   camPoint.innerText++
      }else if(computerPick === "paper"){
   console.log("player wins")
   title.innerText =" Player Won"
   let playPoint = document.querySelector(".play-point")
   playPoint.innerText++
   playPoint.innerText++
      }else if(computerPick === "scissors"){
       console.log("draw")
       title.innerText =" game is Draw"
       playPoint.innerText++
       camPoint.innerText++
       
      }
   
   }






