
// ELEMENTS AND VARIABLES
var $sharePerPerson = $('#sharePerPerson');
var n = 0;
var num = n.toFixed(2);
var $mileageInputs = $('#mileageRate, #numberOfRiders, #totalMiles');

// UPDATER
function updateInputs(){
  var mileageRate = parseFloat($('#mileageRate').val(), 10);
  var numberOfRiders = parseInt($('#numberOfRiders').val(), 10);
  var totalMiles = parseFloat($('#totalMiles').val(), 10);
  // Checking the rate values
  updateMilageRateError(mileageRate);
  updateNumberOfRideError(numberOfRiders);
  updateTotalMilesError(totalMiles);
  // Calculating total price per person
  num = (mileageRate * totalMiles / numberOfRiders).toFixed(2);
  expensiveCSS(num);
}

function updateMilageRateError(rate){
  if (rate >= 0.1 && rate <= 0.5){
      $('#rateError').html("");
  } else {
    $('#rateError').html("Try again. Your rate should be between 0.1 and 0.5");
  }
}

function updateNumberOfRideError(peeps){
  if (peeps >= 1 && peeps <= 5){
    $('#personError').html("");
  } else {
    $('#personError').html("Try again. Number of people should between 1 and 5");
  }
}

function updateTotalMilesError(distance){
  if (distance > 0 ){
    $('#milesError').html("");
  }else {
    $('#milesError').html("Try again. Distance should be a positive number");
  }
}

function expensiveCSS(price){
  if (price >= 50) {
    $('#sharePerPerson').css({"color":"red"});
  } else{
    $('#sharePerPerson').css({"color":"black"});
  }
}

//START
function printValue(){
  $sharePerPerson.html("$" + num);
}
printValue();

// EVENTS
$mileageInputs.on('input', function(){
  updateInputs();
  printValue();
});
