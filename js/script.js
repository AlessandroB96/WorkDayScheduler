//GLOBAL VARIABLES 

let buttonEl = document.querySelectorAll('#save-btn');
let textDescription = document.querySelectorAll('#text-box');

let textBox9am = document.getElementsByName('09');
let textBox10am = document.getElementsByName('10');
let textBox11am = document.getElementsByName('11');
let textBox12pm = document.getElementsByName('12');
let textBox1pm = document.getElementsByName('13');
let textBox2pm = document.getElementsByName('14');
let textBox3pm = document.getElementsByName('15');
let textBox4pm = document.getElementsByName('16');
let textBox5pm = document.getElementsByName('17');

//When page loads up, fetch local storage values 
$(document).ready(function() {

    var getTextValues09 = localStorage.getItem('09');
    localStorage.getItem('09');
    textBox9am[0].value = getTextValues09;

    var getTextValues10 = localStorage.getItem('10');
    localStorage.getItem('10');
    textBox10am[0].value = getTextValues10;
    
    var getTextValues11 = localStorage.getItem('11');
    localStorage.getItem('11');
    textBox11am[0].value = getTextValues11; 

    var getTextValues12 = localStorage.getItem('12');
    localStorage.getItem('12');
    textBox12pm[0].value = getTextValues12; 

    var getTextValues1 = localStorage.getItem('13');
    localStorage.getItem('13');
    textBox1pm[0].value = getTextValues1; 

    var getTextValues2 = localStorage.getItem('14');
    localStorage.getItem('14');
    textBox2pm[0].value = getTextValues2; 

    var getTextValues3 = localStorage.getItem('15');
    localStorage.getItem('15');
    textBox3pm[0].value = getTextValues3; 

    var getTextValues4 = localStorage.getItem('16');
    localStorage.getItem('16');
    textBox4pm[0].value = getTextValues4; 

    var getTextValues5 = localStorage.getItem('17');
    localStorage.getItem('17');
    textBox5pm[0].value = getTextValues5; 
});

//--------------------------------

//MOMENT.JS IMPLEMENTATION 

let timeDisplay = document.querySelector('#clock-display');
timeDisplay.textContent = moment().format('dddd MMMM Do YYYY');
//document.appendChild(timeDisplay)

 //Change Task  background color based on time
var checkTime = function () {

    //Get Current time
    var currentTime = moment().format('H');

    var currentTimeNumber = parseInt(currentTime, 10);

    //get all elements with class "taskarea"
    var timeBlockElements = textDescription;


    //loop through time blocks

    for (var i = 0 ; i < timeBlockElements.length ; i++) {
        //Get element's ID as a string
        var elementID = timeBlockElements[i].name;

        //parse string to numbers

        var stringToNumber = parseInt(elementID, 10);
       

        let timeValue = stringToNumber;
        
        //remove any old classes from element
        $(timeBlockElements[i].name).removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (stringToNumber < currentTimeNumber) {
            $(timeBlockElements[i]).addClass("past");
           
        } else if (stringToNumber > currentTimeNumber) {
            $(timeBlockElements[i]).addClass("future");
          
        } else {
            $(timeBlockElements[i]).addClass("present");
            
       }
    }
}
// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);

//--------------------------------

//lISTEN FOR SAVE BUTTON 

//addeventlistener only searches for 1 action. We need multiple actions from the same ID, so we loop the event listener for each button 

buttonEl.forEach(function(elem) {
    elem.addEventListener('click', function() {
       console.log('this button is clicked'); 
       
    });
});

//LISTEN FOR TEXT BOX INPUT

textDescription.forEach(function(elem) {
    elem.addEventListener('click', function() {
        console.log('input field clicked');
    });
})

//When button is clicked, store textarea value to local storage 

$("#save-btn1").on('click',function() {

    let textBox9am = document.getElementsByName('09');

    localStorage.setItem(textDescription[0].name, textDescription[0].value);
    
    var getTextValues = localStorage.getItem('09');

    textBox9am.value = getTextValues;

 })

 $("#save-btn2").on('click',function() {

    let textBox10am = document.getElementsByName('10');

    localStorage.setItem(textDescription[1].name, textDescription[1].value);

    var getTextValues = localStorage.getItem('10');

    textBox10am.value = getTextValues;

 })

 $("#save-btn3").on('click',function() {

    let textBox11am = document.getElementsByName('11');

    localStorage.setItem(textDescription[2].name, textDescription[2].value);

    var getTextValues = localStorage.getItem('11');

    textBox11am.value = getTextValues;
 
 })

 $("#save-btn4").on('click',function() {

    let textBox12pm = document.getElementsByName('12');

    localStorage.setItem(textDescription[3].name, textDescription[3].value);

    var getTextValues = localStorage.getItem('12');

    textBox12pm.value = getTextValues;

 })

 $("#save-btn5").on('click',function() {

    let textBox1pm = document.getElementsByName('13');

    localStorage.setItem(textDescription[4].name, textDescription[4].value);

    var getTextValues = localStorage.getItem('13');

    textBox1pm.value = getTextValues;
 
 })
    
 $("#save-btn6").on('click',function() {

    let textBox2pm = document.getElementsByName('14');

    localStorage.setItem(textDescription[5].name, textDescription[5].value);

    var getTextValues = localStorage.getItem('14');

    textBox2pm.value = getTextValues;

 })

 $("#save-btn7").on('click',function() {

    let textBox3pm = document.getElementsByName('15');

    localStorage.setItem(textDescription[6].name, textDescription[6].value);

    var getTextValues = localStorage.getItem('15');

    textBox3pm.value = getTextValues;

 })

 $("#save-btn8").on('click',function() {

    let textBox4pm = document.getElementsByName('16');

    localStorage.setItem(textDescription[7].name, textDescription[7].value);

    var getTextValues = localStorage.getItem('16');

    textBox4pm.value = getTextValues;
 })

 $("#save-btn9").on('click',function() {


    let textBox5pm = document.getElementsByName('17');

    localStorage.setItem(textDescription[8].name, textDescription[8].value);

    var getTextValues = localStorage.getItem('17');

    textBox5pm.value = getTextValues;

 })



//----------------------------------
//SAVING TASKS TO LOCALSTORAGE 

//setItem() --> localStorage.setItem()
//getItem() --> localStorage.getItem()

//-----------------------------------
