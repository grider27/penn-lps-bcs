$( document ).ready(function() {
    // hide the results section on load
    $('#results').toggleClass('d-none'); 

    var appID = "d0b9142c750e110a89c37e7297e98e02";
    var today = moment().format('L');
    console.log(today);

    // load any previous cities

    var prevSearches = localStorage.getItem('storedCities');
    if (prevSearches != null) {
        prevSearchesResults = JSON.parse(prevSearches);
        console.log(prevSearchesResults);
        $.each(prevSearchesResults, function (i, val) {
            var liItem = $('<li>');
            liItem.attr('id','historicalSearches');
            liItem.addClass('list-group-item');
            liItem.text(val.cityOf);
            $('#prev-searches').append(liItem);
        });
    };

    $('#search-city').on('click', function () {
        // need to add pointer to search ****
        var cityOf = $('#enter-city').val();
        console.log(cityOf);

        var savedSearhes = JSON.parse(localStorage.getItem('storedCities')) || [];
        savedSearhes.push({ cityOf: cityOf });
        localStorage.setItem('storedCities', JSON.stringify(savedSearhes));
    });


});