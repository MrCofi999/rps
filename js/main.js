let pscore=0;
let cscore=0;
let round=0;
let end=false;

function ComputerPlay(){
    let rps = ['rock', 'paper', 'scissors']
    let random_numb = Math.floor(Math.random() * 3);
    return rps[random_numb]
}
function PlayerPlay(){
 
    let check = false
    while(check==false){
      let player_select = prompt("Rock,Paper or Scissors")
      player_select = player_select.toLowerCase()
      switch(player_select){
          case "rock":
          case "paper":
          case "scissors":
          check=true;
          return player_select;
          break;
          default:
          alert("Error")
    }
  }
}

function playRound(pc, player){
    let result = ""
    let res = `Computer played ${pc},Player played ${player}`
    let pw = `Player Wins. ${res}`
    let cw = `Computer Wins. ${res}`
    let draw = `Its a draw. ${res}`
    switch(player){
        case 'rock':
        switch(pc){
            case 'rock':
            return draw;
            break;
            case 'paper':
            cscore+=1;
            return cw;
            break;
            case 'scissors':
            pscore+=1;
            return pw;
            break;
        } break;

        case 'paper':
        switch(pc){
            case 'rock':
            pscore+=1;
            return pw;
            break;
            case 'paper':
            return draw;
            break;
            case 'scissors':
            cscore+=1
            return cw;
            break;
        } break;
        case 'scissors':
        switch(pc){
            case 'rock':
            cw+=1
            return cw;
            break;
            case 'paper':
            pw+=1;
            return pw;
            break;
            case 'scissors':
            return draw;
            break;
        } break;
}
}
function game(){
    
    while(end==false){
      if(pscore!=10&&cscore!=10){
      console.log(playRound(ComputerPlay(), PlayerPlay()))
      round+=1
      }
      else{
          if(pscore>cscore){
             return console.log(`Player won by ${pscore-cscore} diffrence`)
          }
          else{
             return console.log(`Computer won by ${cscore-pscore} diffrence`)
          }
      }
    }
} /*add changing images adn selector for computer or like a slot machine for him*/
/*stavimo return score ili bude global variable pa samo dodajemo na to ++ i uvek ce se koristi u funkciji */

game();


/*
console.log(PlayerPlay())
for(let  i=1;i<20;i++)
console.log(ComputerPlay())
*/