 let clickMe = document.getElementsByName('btn-primary');
 const ageIndays = ()=>{
    let birthYear = prompt('What year where you born??.');
    let ageInDays = (new Date().getFullYear() - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode(`You are ${ageInDays} days old`);
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
 }
 const reset = ()=>{
     document.getElementById('result').remove();
 }