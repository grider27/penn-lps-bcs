//jquery to go here

$(document).ready(function () {

var today = moment().format('dddd, MMMM Do');
$('#currentDay').text(today);
var hrToDisplay = ['9','10','11','12','13','14','15','16','17']
currentHour = parseInt(moment().format('H'));

$.each(hrToDisplay,function(i, val){
    var hourRow = $('<div>');
    hourRow.addClass('row time-block');
    hourRow.attr('hour-slot',val);

    // hour column
    var hourCol = $('<div>');
    hourCol.addClass('col-1 hour pt-3');
    if(val < 12){
    hourVal = val+' AM';
    } 
    else if(val == 12){
        hourVal = val+' PM';
        } 
    else {
        valNonMil = val-12;
        hourVal = valNonMil+' PM';
    }
    hourCol.text(hourVal);
    hourRow.append(hourCol);

    //input column
    var inputCol = $('<textarea>');
    inputCol.addClass('col-10 textarea description pt-3');
    if(val < currentHour){
        inputCol.addClass('past');
        } 
        else if(val > currentHour) {
            inputCol.addClass('future');
        } 
        else {
            inputCol.addClass('present');
        }

    inputCol.attr('placeholder','Click here to enter')
    hourRow.append(inputCol);

    //save button column
    var saveBtn = $('<button>');
    saveBtn.addClass('col-1 saveBtn fa fa-save');
    hourRow.append(saveBtn);

    // append completed rows to the container
    hourRow.appendTo('.container');
});


});