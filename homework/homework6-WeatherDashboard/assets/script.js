$( document ).ready(function() {
    // hide the results section on load
    $('#results').toggleClass('d-none'); 

    var appID = "d0b9142c750e110a89c37e7297e98e02";
    var today = moment().format('L');

    // load any previous cities searched
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

    // initiate search by clicking on any previous searched cities
    $('.list-group-item').on('click', function () {
        var cityOf = $(this).text();
        console.log(cityOf);
        if (cityOf != ""){
        getWeather(cityOf);
        }
        else {
            alert("Please enter a city name first for the search");
        }
    });

    // initiate search with a new city name
    $('#search-city').on('click', function () {
        var cityOf = $('#enter-city').val();
        if (cityOf != ""){
        $('#enter-city').val("");
        var liItem = $('<li>');
        liItem.attr('id','historicalSearches');
        liItem.addClass('list-group-item');
        liItem.text(cityOf);
        $('#prev-searches').append(liItem);
        var savedSearhes = JSON.parse(localStorage.getItem('storedCities')) || [];
        savedSearhes.push({ cityOf: cityOf });
        localStorage.setItem('storedCities', JSON.stringify(savedSearhes));
        getWeather(cityOf);
        }
        else {
            alert("Please enter a city name first for the search");
        }
    });

function getWeather(city){
    var requestURl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + appID;
    //console.log(requestURl);
}


});