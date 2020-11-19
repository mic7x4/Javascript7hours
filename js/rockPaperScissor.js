const rpsGame = (yourChoice) => {
    console.log(yourChoice);
    let humanChoice,botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomToRpsInt());
    console.log('Computer Choice',botChoice);
    results = decideWinner(humanChoice,botChoice); //[0,1] human lost | bot win
    console.log(results);
    message = finalMessage(results); // {'message':'you won','color':'green'}
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);


    
}
let randomToRpsInt = ()=>{
    return Math.floor(Math.random() * 3);
}

let numberToChoice = (number)=>{
    return ['rock','paper','scissor'][number];
}

let decideWinner = (yourChoice,computerChoice) => {
    let rpsDatabase = {
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'papper':1,'scissor':0.5,'rock':0},
    };

    let yourScole = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScole, computerScore]
}
// Final Message
let finalMessage = ([yourScole,computerScore]) => {
    if(yourScole === 0) {
        return {'message':'You lost!','color':'red'};
    }else if(yourScole === 0.5){
        return {'message':'You Tied!','color':'yellow'};
    }else{
        return {'message':'You Won!','color':'green'};

    }
}

let rpsFrontEnd = (humanImageChoice, botImageChoice , finalMessage) => {
    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    // Remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    // Create divs on fly 
    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    // humanDiv.innerHTML = "<img src='"+ imagesDatabase[humanImageChoice] + "'>";
    humanDiv.innerHTML = `<img src=${imagesDatabase[humanImageChoice]} height="150px" width="150px" style="box-shadow: 1px 6px 22px -3px rgba(61,116,255,1);">`;
    messageDiv.innerHTML = `<h2 style="color: ${finalMessage['color']};  font-size:3rem;padding-top:4rem; ">${finalMessage['message']} </h2>`;
    botDiv.innerHTML = `<img src=${imagesDatabase[botImageChoice]} height="150px" width="150px" style="box-shadow: 1px 6px 22px -3px rgba(243,38,24,1);">`;

    document.getElementById('result').appendChild(humanDiv);
    document.getElementById('result').appendChild(messageDiv);
    document.getElementById('result').appendChild(botDiv);
};