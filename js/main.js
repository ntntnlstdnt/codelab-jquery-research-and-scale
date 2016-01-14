
$(document).ready(function (){

    var $mileageRateInputs = $('#mileageRate, #totalMiles,#numberOfRiders');
    var $sharePerPerson = $('#sharePerPerson');
    var $resetValues = $('#reset-values-button');
    var n = 0;
    var num = n.toFixed(2);
    $sharePerPerson.html("$" + num);

    $mileageRateInputs.on('input',function(){
      var mileageRate = parseFloat($('#mileageRate').val(), 10);
      var totalMiles = parseFloat($('#totalMiles').val(), 10);
      var numberOfRiders = parseInt($('#numberOfRiders').val(), 10);
      num = (mileageRate * totalMiles / numberOfRiders).toFixed(2);
      $sharePerPerson.html("$" + num);
    });

});
