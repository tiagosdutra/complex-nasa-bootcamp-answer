//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getDate)

// `https://api.nasa.gov/planetary/apod?api_key=r2o1xc86wWU3uZKCphX8NWzAB2xNhJB6xsD6cbEm`

function getDate(){
    // let userVal = document.querySelector('input').value
    // console.log(userVal)
    let url =   `https://data.nasa.gov/resource/gvk9-iz74.json`
    fetch(url)     
        .then(res => res.json()) 
    // parse response as JSON     
        .then(data => {       
            console.log(data)     
            for(let i=0;i<data.length; i++) {
                let nasaLocations = document.querySelector('.nasaLocations')
                let location = data[i].center
                let zipCode = data[i].zipcode
                let state = data[i].state
                let country = data[i].country
                let urlTwo =`http://api.weatherapi.com/v1/current.json?key=be4ecb46bb4442f0b62185247220305&q=${zipCode}&aqi=no`
                fetch(urlTwo)     
                    .then(res => res.json()) 
                // parse response as JSON     
                    .then(data => {       
                    console.log(data)     
                    let li = document.createElement('li')
                    li.innerText = `${location} is ${data.current.temp_f} degrees farenheit in ${state}, ${country}.`
                    nasaLocations.appendChild(li)
            })
        .catch(err => {         
        console.log(`error ${err}`)     
        });     
    }}
    )     

    .catch(err => {         
    console.log(`error ${err}`)     
    }); 
}