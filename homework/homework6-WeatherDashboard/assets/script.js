$(document).ready(function () {
    // hide the results section on load
    $('#results').addClass('d-none');

    var appID = "d0b9142c750e110a89c37e7297e98e02";
    var today = moment().format('L');

    // load any previous cities searched
    var prevSearches = localStorage.getItem('storedCities');
    if (prevSearches != null) {
        prevSearchesResults = JSON.parse(prevSearches);
        $.each(prevSearchesResults, function (i, val) {
            var liItem = $('<li>');
            liItem.attr('id', 'historicalSearches');
            liItem.addClass('list-group-item');
            liItem.text(val.cityOf);
            $('#prev-searches').append(liItem);
        });
    };

    // initiate search by clicking on any previous searched cities
    $('.list-group-item').on('click', function () {
        var cityOf = $(this).text();
        if (cityOf != "") {

            getWeather(cityOf);
        }
        else { // validation checks and prompts
            alert("Please enter a city name first for the search");
        }
    });

    // initiate search with a new city name
    $('#search-city').on('click', function () {
        var cityOf = $('#enter-city').val();
        if (cityOf != "") {
            $('#enter-city').val("");
            var liItem = $('<li>');
            liItem.attr('id', 'historicalSearches');
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

    function getWeather(city) {
        var requestUrlMain = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + appID;
        fetch(requestUrlMain)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                //console.log(data);
                var cityLat = data.coord.lat;
                var cityLon = data.coord.lon;
                var cityName = data.name;
                var cityTemp = data.main.temp;
                var cityHumidity = data.main.humidity;
                var cityWind = data.wind.speed;
                var cityIcon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                var iconImg = new Image();
                iconImg.src = cityIcon;
                $('#city-title').text(cityName + " (" + today + ") ");
                $('#city-title').append(iconImg);
                $('#city-temp').text("Temperature: " + cityTemp + " °F");
                $('#city-humidity').text("Humidity: " + cityHumidity + " \%");
                $('#city-wind').text("Wind Speed: " + cityWind + " MPH");

                var requestUrlDtl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&units=imperial" + "&APPID=" + appID;
                fetch(requestUrlDtl)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (detail) {
                        //console.log(detail);
                        var cityUvi = detail.current.uvi;
                        var cityfuture = detail.daily;
                        //console.log(cityfuture);
                        /* 
                        Per https://www.epa.gov/sites/production/files/documents/uviguide.pdf
                        1-2 = low #3EA72D
                        3-5 = moderate #FFF300
                        6-7 = high #F18B00 
                        8-10 = very high #E53210
                        11+ = extreme #B567A4
                        */
                        $('#city-uvi').text('UV Index: ');
                        $('#city-uvi').append('<span id=\'uv-index\'>' + cityUvi);
                        $('#uv-index').addClass('px-2 py-2 rounded');
                        if (cityUvi < 3) {
                            $('#uv-index').css('background-color', '#3EA72D').css('color', 'white');
                        } else if (cityUvi < 6) {
                            $('#uv-index').css('background-color', '#FFF300').css('color', 'black');
                        } else if (cityUvi < 8) {
                            $('#uv-index').css('background-color', '#F18B00').css('color', 'white');
                        } else if (cityUvi < 11) {
                            $('#uv-index').css('background-color', '#E53210').css('color', 'white');
                        } else {
                            $('#uv-index').css('background-color', '#B567A4').css('color', 'white');
                        }

                        $.each(cityfuture, function (i, val) { 
                            if (i === 0 || i > 5) return;
                            console.log(this);
                            var futureDate = moment.unix(this.dt).format("MM/DD/YYYY");
                            var futureTemp = this.temp.day;
                            var cityHumidity = this.humidity;
                            console.log(futureDate);
                            var uvIcon = "http://openweathermap.org/img/w/" + this.weather[0].icon + ".png";
                            var uvImg = new Image();
                            //iconImg.src = cityIcon;

                        });

                    });






                $('#results').removeClass('d-none');


            });
    }


});