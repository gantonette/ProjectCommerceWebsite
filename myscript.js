function showAlert() {
    alert("Thank you for registering");
}

function validateForm() {
    alert("Thank you for registering!");

}

function checkout() {
    alert("Order confirmed! Check your email.")
}

function checkEmail() {
    var x = document.forms["confirm"]["code"].value;
    if(x.length > 11) {
        alert("Check your email for a discount code!");
    }
    if(x.length < 10)
        alert("Please provide an appropriate email!")
}

function carbonEmissionsCalc() {
    var x = document.forms["emission"]["entered"].value;
    var changedX = x * 0.299;
    
    if(changedX < 1) {
        alert("Your total carbon emission per kg is " + changedX + "kg CO2-e. Well done in reducing your carbon footprint and saving the planet!");
    } else if (changedX > 1) {
        alert("Your total carbon emission per kg is " + changedX + "kg CO2-e. Thank you!");
    }else{
        alert("Please enter an appropriate value. E.g 2.")
    }
 
}

/*login code obtained from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_login_form_modal*/
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


