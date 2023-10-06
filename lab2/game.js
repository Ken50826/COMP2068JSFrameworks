const prompt = require("prompt");

prompt.start();//starting the prompt

prompt.get(['GO!'],function(err,response){
    var computerMove = Math.floor(Math.random()*2);
    if(computerMove==0){//ROCK
        console.log("Computer Plays ROCK");
        if(response.move=="ROCK"){
            console.log("Its a Tie")
        }else if(response.move=="PAPER"){
            console.log("User Wins")
        }else if(response.move=="SCISSORS"){
            console.log("Computer Wins")
        }else{
            console.log("Invalid Input\nValid Inputs ROCK-PAPER-SCISSORS")
        }
    }else if(computerMove==1){//PAPER
        console.log("Computer Plays PAPER");
        if(response.move=="ROCK"){
            console.log("Computer Winds")
        }else if(response.move=="PAPER"){
            console.log("Its a Tie")
        }else if(response.move=="SCISSORS"){
            console.log("User Wins")
        }else{
            console.log("Invalid Input\nValid Inputs ROCK-PAPER-SCISSORS")
        }
    }else if(computerMove == 2){//SCISSORS
        console.log("Computer Plays SCISSORS");
        if(response.move=="ROCK"){
            console.log("User Wins")
        }else if(response.move=="PAPER"){
            console.log("Computer Winds")
        }else if(response.move=="SCISSORS"){
            console.log("Its a Tie")
        }else{
            console.log("Invalid Input\nValid Inputs ROCK-PAPER-SCISSORS")
        }
    }
    console.log("-----Game Ends------")
});