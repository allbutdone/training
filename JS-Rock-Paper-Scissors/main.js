let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById('user-score');
const computerScore_span=document.getElementById('computer-score');
const scoreBoard_div=document.querySelector('.score-board');
const result_div=document.querySelector('.result');
const action_div=document.getElementById('action');
const rock_div=document.getElementById('r');
const papper_div=document.getElementById('p');
const scissors_div=document.getElementById('s');


//computer choice





function game(userChoice){
    let choiceArrey=["rock","paper","scissors"];
    let computerNumber=Math.floor(Math.random()*choiceArrey.length);
    let computerChoice=choiceArrey[computerNumber];
  
    if(userChoice==computerChoice){
        result_div.innerHTML=`${userChoice}  and ${computerChoice} = draw`;
    }
    else if((userChoice=="rock" && computerChoice=="scissors")||
    (userChoice=="paper" && computerChoice=="rock")||
    (userChoice=="scissors" && computerChoice=="paper")){
        userScore++;

        if(userScore>=10){
            userScore_span.innerHTML=userScore;
            result_div.innerHTML=`YOU WON THE GAME score ${userScore} : ${computerScore} `;
            document.querySelector('.choices').style.display="none";
          
        }
        else{
            userScore_span.innerHTML=userScore;
            result_div.innerHTML=`${userChoice} covers ${computerChoice} = user win`;
        }
    
      
        
    }
    else if((computerChoice=="rock"&&userChoice=="scissors")||(
        computerChoice=="paper"&&userChoice=="rock"
    )||(computerChoice=="scissors"&&userChoice=="paper")){
        computerScore++;
        if(computerScore>=10){
            computerScore_span.innerHTML=computerScore;
            result_div.innerHTML=`YOU LOST the GAME score ${userScore} : ${computerScore} `;
            document.querySelector('.choices').style.display="none";
           
                
        }
        else{
            computerScore_span.innerHTML=computerScore;
            result_div.innerHTML=`${userChoice} covers ${computerChoice} = computer win`;
        }
       
        
    }
}

//User choice
main();
function main(){
    rock_div.addEventListener('click',function(){
        game("rock");
    })
    papper_div.addEventListener('click',function(){
        game("paper");
    })
    scissors_div.addEventListener('click',function(){
       game("scissors");
    })

}


