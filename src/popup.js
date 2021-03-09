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
            let zip = data.zip
            let isp = data.isp
            let timezone = data.timezone
            let lat = data.lat
            let lon = data.lon

            if (status == "success") {
                document.getElementById("location").innerHTML = country + ", " + city
                document.getElementById('ip').innerHTML = ip
            } else {
                document.getElementById("location").innerHTML = "ERROR"
            }
            // More button onClick listener
            document.getElementById("moreButton").addEventListener('click', function () {
                // Show more data
                document.getElementById("more").innerHTML = `
                <h4>This data below may not be exact</h4>
                <h2>Zip Code:</h2>
                <h2 class="data">${zip}</h2>
                <h2>ISP:</h2>
                <h2 class="data">${isp}</h2>
                <h2>Timezone:</h2>
                <h2 class="data">${timezone}</h2>
                <h2>Lat/Lon:</h2>
                <h2 class="data">${lat}/${lon}</h2>
                `
                document.getElementById("moreButton").innerHTML = "Show less"
                document.getElementById("moreButton").id = "hideButton"
                
                document.getElementById('hideButton').addEventListener('click', function () {
                    document.getElementById('more').innerHTML = ""
                    document.getElementById("hideButton").innerHTML = "Show more"
                    document.getElementById("hideButton").id = "moreButton"
                })
            })
        })
}