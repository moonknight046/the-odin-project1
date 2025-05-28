
function getcomputerchoice(){
const random=Math.random();
if(random>=0&&random<0.33){
    return 'rock';
}
else if(random>=0.33&&random<0.66){
    return 'paper';
}
else if(random>=0.66&& random<0.99){
    return 'scissor';
}
}

function getHumanChoice(){
    let response =prompt("enter the input");
    return response;
}

function playRound(humanChoice,computerChoice){
humanChoice=humanChoice.toLowerCase();

if(humanChoice=='rock'&&(computerChoice=='scissor')){
    humanScore++;
    return 'You Win! Rock beats Scissor';
    
}
else if(humanChoice=='paper'&&(computerChoice=='rock')){
    humanScore++;
    return 'You Win! Paper beats Rock';
    
}
else if(humanChoice=='scissor'&&(computerChoice=='paper')){
    humanScore++;
    return 'You Win! Scissor beats Paper';
    
}
else if(humanChoice==computerChoice){
    humanScore=humanScore+0.5;
    computerScore=computerScore+0.5;
    return `its a draw! ${humanChoice} draws ${computerChoice}`;
    
}
else{
    computerScore++;
    return `You Lose! ${computerChoice} beats ${humanChoice}`;

}
}
function playgame(){
    let humanScore=0;
    let computerScore=0;
    for(let i=0;i<5;i++){
        console.log(playRound(getHumanChoice(),getcomputerchoice()));
    }
}
playgame();
console.log(`Your Score is ${humanScore} Computer Score is ${computerScore}`)