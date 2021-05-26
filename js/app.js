'use strict';

let userName = prompt('Hello what is your name?');

alert(' Hello ' + userName + 'have a nice day')
//console.log(userName)

function age () {
    let age = prompt('Do i look young?')

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
} }

 age ();

function food (){

let food = prompt('Is Dwali my favourite meal? ');

switch (food.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('That is true, isnt it deleicios?');
        //console.log('That is true, isnt it deleicios?')
        break;

    case 'no':
    case 'n':
        alert('That is not correct, everybody loves Dwali')
        //console.log('That is not correct, everybody loves Dwali')
    default:
        break;
}}


 food ();

function work (){

let work=prompt('Do you feel like I am professional?');
work= work.toLowerCase();

if (work == 'yes' || work == 'y') {
    alert('Thank you, I am really happy that you think that');
    //console.log('Thank you, I am really happy that you think that')
}

    else if (work == 'no' || work == 'n') {
        alert('I will try to improve');
        //console.log('I will try to improve')
    } }
  work ();
 function sleep () {
    let sleep= prompt('Do you think I am a morning person? ');

    switch (sleep.toLowerCase()) {
        case 'yes':
        case 'y':
            alert('No, I am a night owl');
            //console.log('No, I am a night owl')
            break;
    
        case 'no':
        case 'n':
            alert('you are correct, I am a night owl')
            //console.log('you are correct, I am a night owl')
        default:
            break;
    } }

     sleep ();

     function animal () {

    let animal= prompt('Do you think I like dogs? ');

    switch (animal.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('No ,actually I am more into cats');
            //console.log('No ,actually I am more into cats')
            break;
    
        case 'NO':
        case 'N':
            alert('That is correct, cats are way better')
           // console.log('That is correct, cats are way better')
        default:
            break;
    } }

     animal ()
alert(' Thank you ' + userName + ' for you time ');


