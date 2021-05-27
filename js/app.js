'use strict';

let userName = prompt('Hello what is your name?');

alert(' Hello ' + userName + 'have a nice day');
//console.log(userName)

// Question 1
function askAge() {
    let age = prompt('Do i look young?');

    switch (age.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('Thank you, I am in my twenties');
            //console.log('Thank you, I am in my twenties')
            break;

        case 'NO':
        case 'N':
            alert('I hate you already');
            //console.log('I hate you already')
            break;

        default:
            alert('Please answer with yes or no');
            break;
    }
}

askAge();

// Question two
function askFood() {

    let food = prompt('Is Dwali my favourite meal? ');

    switch (food.toLowerCase()) {
        case 'yes':
        case 'y':
            alert('That is true, isnt it deleicios?');
            //console.log('That is true, isnt it deleicios?')
            break;

        case 'no':
        case 'n':
            alert('That is not correct, everybody loves Dwali');
        //console.log('That is not correct, everybody loves Dwali')
        break;
        default:
            break;
    }
}


askFood();

// Question three
function askWork() {

    let work = prompt('Do you feel like I am professional?');
    work = work.toLowerCase();

    if (work === 'yes' || work === 'y') {
        alert('Thank you, I am really happy that you think that');
        //console.log('Thank you, I am really happy that you think that')
    }

    else if (work === 'no' || work === 'n') {
        alert('I will try to improve');
        //console.log('I will try to improve')
    }
}

askWork();

// question four
function askSleep() {
    let sleep = prompt('Do you think I am a morning person? ');

    switch (sleep.toLowerCase()) {
        case 'yes':
        case 'y':
            alert('No, I am a night owl');
            //console.log('No, I am a night owl')
            break;

        case 'no':
        case 'n':
            alert('you are correct, I am a night owl');
        //console.log('you are correct, I am a night owl')
        break;
        default:
            break;
    }
}

askSleep();

// question five
function askAnimal() {
    let animal = prompt('Do you think I like dogs? ');

    switch (animal.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('No ,actually I am more into cats');
            //console.log('No ,actually I am more into cats')
            break;

        case 'NO':
        case 'N':
            alert('That is correct, cats are way better');
        // console.log('That is correct, cats are way better')
        break;
        default:
            break;
    }
}

askAnimal();



// question 6

function askIQ(){
let iq=135;
let guessed='';
for(let i=0 ; i<4; i++){

let guessed=prompt('What is my IQ?');

if (guessed===iq){
    alert('correct, good job');
    break;}
    else if (guessed>iq){
        alert('Too high');
    }
    else if(guessed<iq){
        alert ('too low');
    }
    else {
        alert('next time enter a number');
    }
    if (i===3){
        alert('My IQ is actully 135');
    }
}
}
askIQ();

//Question7
function askFoods(){
let guessAnswer='';
let answers=['pasta', 'pizza', 'dwali', 'msakhan'];
let attempts=6;

hasAttempts:while (attempts){
    guessAnswer=prompt('What is my favourite food?');

    attempts-=1;
    for (let i=0; i<answers.length ;i++){
        console.log(answers[i]);
        if(guessAnswer===answers[i]){
            alert('That is right, here are the rest of the answers ' +answers);
break hasAttempts;
        }
    }
    if(attempts<6){
    alert('That is wrong');
}
}
}
askFoods();



alert(' Thank you ' + userName + ' for you time ');

