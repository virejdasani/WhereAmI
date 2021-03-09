window.onload = function () {
// Get Location from IP
    console.log('fetching')
    fetch('http://ip-api.com/json/')
        .then(function (response) {
            console.log(response.json)
            return response.json()
        })
        .then(function (data) {
            let status = data.status
            let country = data.country
            let city = data.city
            let ip = data.query

            if (status == "success") {
                document.getElementById("location").innerHTML = country + ", " + city
            }
            else {
                document.getElementById("location").innerHTML = "ERROR"
            }
        })
}   


