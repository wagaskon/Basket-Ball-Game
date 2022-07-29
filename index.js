

function play(){
    let x=Math.floor(Math.random()*2)+1;
if(x==1)
{
    //team 1 score
    x=Math.floor(Math.random()*5)+1;
    document.getElementById("scre").innerText="Team 1 and score:" + x;

}
else{
    //team 2 score
    x=Math.floor(Math.random()*5)+1;
    document.getElementById("scre").innerText="Team 2 and score:" + x;
}

}
let score=0;

function plusone(name){
    
    if(name=='D1'){
        score= Number(document.getElementById("D1").innerText);   //previous score stored  
                
        score+=1;   // increment of +1
        document.getElementById("D1").innerText=score; //displayed on screen
        if(score>=50){
            wins();
            document.getElementById("D1").innerText="win";
        }
    }

    
    else{
        score= Number(document.getElementById("K2").innerText);   //previous score stored  
        score+=1;   // increment of +1
        document.getElementById("K2").innerText=score;
        if(score>=50){
            wins();
            document.getElementById("K2").innerText="win";
        }
    }
}


function plustwo(name){
    if(name=='D1'){
        score= Number(document.getElementById("D1").innerText);   //previous score stored  
        score+=2;   // increment of +2
        document.getElementById("D1").innerText=score; //displayed on screen
        if(score>=50){
            wins();
            document.getElementById("D1").innerText="win";
        }
    }
    else{
        score= Number(document.getElementById("K2").innerText);   //previous score stored  
        score+=2;   // increment of +2
        document.getElementById("K2").innerText=score;
        if(score>=50){
            wins();
            document.getElementById("K2").innerText="win";
        }
    }

}
function plusthree(name){
    if(name=='D1'){
        score= Number(document.getElementById("D1").innerText);   //previous score stored  
        score+=3;   // increment of +2
        document.getElementById("D1").innerText=score; //displayed on screen
        if(score>=50){
            wins();
            document.getElementById("D1").innerText="win";
        }
    }
    else{
        score= Number(document.getElementById("K2").innerText);   //previous score stored  
        score+=3;   // increment of +3
        document.getElementById("K2").innerText=score;
        if(score>=50){
            wins();
            document.getElementById("K2").innerText="win";
        }
    }
}



function other(name){
    if(name=='D1'){
        score= Number(document.getElementById("D1").innerText); //previous score stored
        score+= Number(document.getElementById("goal").value);   //increment or decrement of enter number.
    
        if(score>=0){
            document.getElementById("D1").innerText=score; //displayed on screen
            if(score>=50){
                wins();
                document.getElementById("D1").innerText="win";
            }
        }
        else
        {
            document.getElementById("D1").innerText=0;

        }

    }
    else{
        score= Number(document.getElementById("K2").innerText); //previous score stored
        score+= Number(document.getElementById("gal").value);   //increment or decrement of enter number.
    
        if(score>=0){
            document.getElementById("K2").innerText=score; //displayed on screen
            if(score>=50){
                wins();
                document.getElementById("K2").innerText="win";
            }
        }
        else
        {
            document.getElementById("K2").innerText=0;

        }
    }
  
    
}
function wins(){
    let team1=Number(document.getElementById("D1").innerText); //previous score stored
    let team2= Number(document.getElementById("K2").innerText); 
    if(team1>=50 || team2>=50){
        if(team1>=50){
        document.getElementById("scre").innerText="Team 1 wins";
                }
        else{
        document.getElementById("scre").innerText="Team 2 wins";

        }
        }

}
function Restart(){
    
    document.getElementById("D1").innerText=0;

    document.getElementById("K2").innerText=0;
    document.getElementById("scre").innerText="Score";


}

