let allButton = document.getElementsByTagName('button');

let copyAllButtons = [];

for(let i =0; i < allButton.length; i++){
    copyAllButtons.push(allButton[i].classList[1]);
}
console.log(copyAllButtons)


let buttonColorChange = (buttonThing) => {
    if(buttonThing.value === 'red'){
        buttonRed();
    }else if(buttonThing.value === 'green'){
        buttonGreen();
    }else if(buttonThing.value === 'reset'){
        buttonReset();
    }else if(buttonThing.value === 'random'){
        buttonRandom();
    }
}

let buttonRed = () => {
    for(let i=0 ; i< allButton.length;i++){
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add('btn-danger');
    }
}
let buttonGreen = () => {
    for(let i=0 ; i< allButton.length;i++){
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add('btn-success');
    }
}

let buttonReset = () => {
    for (let i=0; i<allButton.length; i++){
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add(copyAllButtons[i]);
    }
}

let buttonRandom = () => {
    let choices = ['btn-primary','btn-danger','btn-success','btn-warning']; 
    for(let i =0; i <allButton.length; i++){
        let randomNumber = Math.floor(Math.random()*4);
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add(choices[randomNumber]);

    }
}