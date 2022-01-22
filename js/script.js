let buttonEl = document.querySelectorAll('#save-btn');
let textDescription = document.querySelectorAll('#text-box');

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
        console.log("current time is = " , currentTimeNumber);

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

//---------------------------------
let obj = [];

$(document).on('click', '#save-btn',function() {

    //let tasks = localStorage.getItem('text-box');
    

      for (let j = 0; j < textDescription.length; j++) {

        obj.push({
            'textTimeSlot': textDescription[j].name,
            'textDescription': textDescription[j].value
    })

    localStorage.setItem('tasks', JSON.stringify(obj));

    var tasks = JSON.parse(localStorage.getItem('tasks'));

 }
    
    

/*
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

*/

}
//localStorage.setItem("text-box", textDescription.values());

//let getStoredValue = localStorage.getItem("text-box");
//console.log(localStorage);
    )

//----------------------------------
//SAVING TASKS TO LOCALSTORAGE 

//setItem() --> localStorage.setItem()
//getItem() --> localStorage.getItem()

//-----------------------------------
  