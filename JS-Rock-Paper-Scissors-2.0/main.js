let userScore=0;
let computerScore=0;
let scoreArr=[];

const userScore_span=document.getElementById('user-score');
const computerScore_span=document.getElementById('computer-score');
const scoreBoard_div=document.querySelector('.score-board');
const result_div=document.querySelector('.result');
const action_div=document.getElementById('action');
const rock_div=document.getElementById('rock');
const papper_div=document.getElementById('paper');
const scissors_div=document.getElementById('scissors');


//computer choice
function playAgain(start){
   
if(start==1){
    var action=document.getElementById('action');
    action.innerHTML='<button id="play">Play again</button>';

    document.getElementById('play').addEventListener('click',function(){
        let finalscore;
        if(userScore>computerScore){
            finalscore=[`<p class="green">${userScore} : ${computerScore}`];
        }
        else{
            finalscore=[`<p class="red">${userScore} : ${computerScore}`];
        }
        
        scoreArr.push(finalscore);
        let text="<ul>";
        for(i=0;i<scoreArr.length;i++){
            text +="<li>"+scoreArr[i]+"</li>";
        }
        text +="</ul>";

        document.getElementById('summary').innerHTML=text;
        document.getElementById('table').style.border=' 1px solid orange';
        
        userScore=0;
        computerScore=0;
        userScore_span.innerHTML=0;
        computerScore_span.innerHTML=0;
        result_div.innerHTML="Choose rock paper or scissors";
        document.querySelector('.choices').style.display="";
        document.getElementById('action').innerHTML=null;
    })

}
else{
    
    return null;
}
}



function game(userChoice){
    playAgain(stop);
    let choiceArrey=["rock","paper","scissors"];
    let computerNumber=Math.floor(Math.random()*choiceArrey.length);
    let computerChoice=choiceArrey[computerNumber];
    const userChoice_div=document.getElementById(userChoice);
  
    if(userChoice==computerChoice){
        result_div.innerHTML=`${userChoice}  and ${computerChoice} = draw`;
        userChoice_div.classList.add('gray-glow');
        setTimeout(function(){
            userChoice_div.classList.remove('gray-glow');
        },300);
    }
    else if((userChoice=="rock" && computerChoice=="scissors")||
    (userChoice=="paper" && computerChoice=="rock")||
    (userChoice=="scissors" && computerChoice=="paper")){
        userChoice_div.classList.add('green-glow');
    setTimeout(function(){
        userChoice_div.classList.remove('green-glow');
    },300);
        userScore++;

        if(userScore>=10){
            userScore_span.innerHTML=userScore;
            result_div.innerHTML=`YOU WON THE GAME score ${userScore} : ${computerScore} `;
            document.querySelector('.choices').style.display="none";
            playAgain(1);
          
        }
        else{
            userScore_span.innerHTML=userScore;
            result_div.innerHTML=`${userChoice} covers ${computerChoice} = user win`;
        }
    
      
        
    }
    else if((computerChoice=="rock"&&userChoice=="scissors")||(
        computerChoice=="paper"&&userChoice=="rock"
    )||(computerChoice=="scissors"&&userChoice=="paper")){

        userChoice_div.classList.add('red-glow');
        setTimeout(function(){
            userChoice_div.classList.remove('red-glow');
        },300);

        computerScore++;
        if(computerScore>=10){
            computerScore_span.innerHTML=computerScore;
            result_div.innerHTML=`YOU LOST the GAME score ${userScore} : ${computerScore} `;
            document.querySelector('.choices').style.display="none";
            playAgain(1);
           
                
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


