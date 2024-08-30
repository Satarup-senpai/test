// http://api.wea""therapi.com/v1/current.json?key=769a1e69225b470084051513242908&q=Assam&aqi=no
const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandtimeField = document.querySelector(" .time_location span");
const conditionField = document.querySelector( ".condition p");
const searchField = document.querySelector (".search_area");
const form = document.querySelector("form")

form.addEventListener("submit" , searchForLocation)

let target = " lucknow "


const fetchResult = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=769a1e69225b470084051513242908&q=${targetLocation}&aqi=no`

    const res = await fetch(url)

    const data = await res.json( )


    console.log(data)

    let locationName = data.location.name
    let time = data.location.localtime

    let temp = data.current.temp_c

    let condition = data.current.condition.text 

    updateDetails(temp , locationName , time , condition)
}

function updateDetails(temp , locationName , time , condition ){

    let splitDate = time.split("")[0]

    let splitTime = time.split("")[1]

    let currentDay = getDayName(new Date(splitDate).getDate())



    temperatureField.innerText = temp
    locationField.innerText = locationName
    dateandtimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`
    conditionField.innerText = condition


}



function searchForLocation(e){
    e.preventDefault()

    target = searchField.value

    fetchResult(target)
}

fetchResult(target)



function getDayName( number){ 
    switch(number){
        case 0:
            return "sunday"
        case 1:
            return " Monday"
        case 2: 
            return " tuesdaY"
        case 3: 
            return " WEDNESDAY"
        case 4: 
            return " THURSday"
        case 5: 
            return "friday"
        case 6:
            return "saturday"
        
    }
}