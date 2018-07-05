$(function check(){
    // Get the value of the selected radio button
    // Asuming a question ID and answer that is provided from the DB
    var questionID = "32133";
    var userAnswer = $('input[name='+questionID+']:checked').val();
    var alternative = $('label[for=32133-'+userAnswer+']');
    var trueAnswer = "3";
    var trueAlternative = $('label[for=32133-'+trueAnswer+']');
  
    trueAlternative.addClass("correct");
    if (trueAnswer !== userAnswer){
      alternative.addClass("incorrect");
    }
  })