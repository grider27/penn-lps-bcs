//jquery to go here

$(document).ready(function () {

var today = moment().format('dddd, MMMM Do');
$('#currentDay').text(today);
var hrToDisplay = ['9','10','11','12','13','14','15','16','17']
currentHour = moment().format('H');

//var textBlock = $('<div>');
//textBlock.addClass("row time-block");
//textBlock.text("text");
//textBlock.appendTo('.container');

$.each(hrToDisplay,function(i, val){
    var hourRow = $('<div>');
    hourRow.addClass('row time-block');
    hourRow.attr('hour-slot',val);

    var hourCol = $('<div>');
    hourCol.addClass('col-1 hour pt-3');
    if(val < 12){
    hourVal = val+' AM';
    } else {
        hourVal = val+' PM';
    }
    hourCol.text(hourVal);
    hourRow.append(hourCol);

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

    var saveBtn = $('<button>');
    saveBtn.addClass('col-1 saveBtn');
    saveBtn.text(val);
    hourRow.append(saveBtn);

    hourRow.appendTo('.container');
});

currentHour = moment().format('H');
console.log(currentHour);


});