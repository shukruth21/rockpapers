function getComputerChoice(){
    const list=['rock','paper','scissors'];
    return list[Math.floor(Math.random()*list.length)];
}

//console.log(getComputerChoice());
function result(playerSelection,choice){
     if(playerSelection.toUpperCase()== choice.toUpperCase()){
        return "nobody wins play again";
     }
     else if((playerSelection.toUpperCase()=='ROCK' && choice.toUpperCase()=='PAPER')
      || (playerSelection.toUpperCase()=='PAPER' && choice.toUpperCase()=='SCISSORS')||
        (playerSelection.toUpperCase()=='SCISSORS' && choice.toUpperCase()=='ROCK')
     ){
        return "you lose ";
     }
     else if((playerSelection.toUpperCase()=='PAPER' && choice.toUpperCase()=='ROCK')
     || (playerSelection.toUpperCase()=='SCISSORS' && choice.toUpperCase()=='PAPER')||
       (playerSelection.toUpperCase()=='ROCK' && choice.toUpperCase()=='SCISSORS')){
        return "you win ";
       }

    }
let user=0,pc=0;
       function game(){
        let gameLength=5;
        
        for(let i=1;i<=gameLength;i++){
            let playerSelection= prompt("what is your selection");
            let choice=getComputerChoice();
            let ans= result(playerSelection,choice);
            console.log(ans);
            if(ans=="nobody wins play again"){
                gameLength++;

            }
            else if(ans=="you win"){
                user++;
            }
            else{
                pc++;
            }
        }
       }
       game();
       if(user>pc){
        console.log("you win the best of 5 round");
       }
       else{
        console.log("the pc wins the best of 5 round");
       }
