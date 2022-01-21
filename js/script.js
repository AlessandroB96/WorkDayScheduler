let buttonEl = document.querySelectorAll('#save-btn');
let textDescription = document.querySelectorAll('#text-box')

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




  