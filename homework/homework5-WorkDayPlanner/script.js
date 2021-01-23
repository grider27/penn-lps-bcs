//jquery to go here

$(document).ready(function () {

    var today = moment().format('dddd, MMMM Do');
    $('#currentDay').text(today);
    var hrToDisplay = ['9', '10', '11', '12', '13', '14', '15', '16', '17']
    currentHour = parseInt(moment().format('H'));

    // Time grid creation
    $.each(hrToDisplay, function (i, val) {
        var hourRow = $('<div>');
        hourRow.addClass('row time-block');
        hourRow.attr('hour-slot', val);

        // hour column
        var hourCol = $('<div>');
        hourCol.addClass('col-1 hour pt-3');
        if (val < 12) {
            hourVal = val + ' AM';
        }
        else if (val == 12) {
            hourVal = val + ' PM';
        }
        else {
            valNonMil = val - 12;
            hourVal = valNonMil + ' PM';
        }
        hourCol.text(hourVal);
        hourRow.append(hourCol);

        //input column for appointment/schedule
        var inputCol = $('<textarea>');
        inputCol.addClass('col-10 textarea description pt-3');
        if (val < currentHour) {
            inputCol.addClass('past');
        }
        else if (val > currentHour) {
            inputCol.addClass('future');
        }
        else {
            inputCol.addClass('present');
        }
        inputCol.attr('placeholder', 'Click here to enter')
        hourRow.append(inputCol);

        //save button column
        var saveBtn = $('<button>');
        saveBtn.addClass('col-1 saveBtn fa fa-save');
        hourRow.append(saveBtn);

        // append completed rows to the container
        hourRow.appendTo('.container');
    });

    // save button on click action
    $(".saveBtn").on("click", function () {
        var calHr = $(this).parent(".row").attr("hour-slot");
        var calItem = $(this).siblings('.textarea').val();
        var dateOf = moment().format('L');
        var savedPlanner = JSON.parse(localStorage.getItem('storedPlanner')) || [];
        savedPlanner.push({ dateOf: dateOf, hr: calHr, appt: calItem });
        localStorage.setItem('storedPlanner', JSON.stringify(savedPlanner));

    });



    // on load results from previously stored
    var prevPlanner = localStorage.getItem("storedPlanner");
    if (prevPlanner != null) {
        prevPlannerResults = JSON.parse(prevPlanner);
        $('.row').each(function () {
            var hrSlot = $(this).attr("hour-slot");
            var appt = $(this).children(".textarea");
            var dateRetrieved = moment().format('L'); // todays date on load
            for (var key in prevPlannerResults) {
                if (prevPlannerResults[key].hr === hrSlot &&
                    // Additional validation to only see todays appoints from storage
                    prevPlannerResults[key].dateOf === dateRetrieved) {
                    appt.text(prevPlannerResults[key].appt);
                };
            };
        });
    }

    // additional user features of clearing calendar

    var clearRow = $('<div>');
    clearRow.addClass('row');
    var clearBtn = $('<button>');
    clearBtn.addClass('clearBtn btn-danger fas fa-trash fa-2x');
    clearBtn.appendTo(clearRow);
    clearRow.appendTo('.container')

    $('.clearBtn').on("click", function () {
        localStorage.clear("storedPlanner");
        location.reload();
    });


});
