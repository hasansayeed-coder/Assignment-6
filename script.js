document.getElementById('error-message').style.display = 'none';
document.getElementById('search-result').innerHTML = ''
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value
    searchField.value = ''
    if (searchText == '') {
        document.getElementById('error-message').style.display = 'block'
    }

    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.data))
            ;
    }


}







const displaySearchResult = datas => {

    for (const data of datas) {
        const searchResult = document.getElementById('search-result');

        const div = document.createElement('div')
        div.innerHTML = `
    <div class="card h-100 w-75 mx-auto">
                 <img src="${data.image}" class="card-img-top" alt="...">
                 <div class="card-body">
                     <h5 class="card-title">${data.brand}</h5>
                     <p class="card-text">${data.phone_name}.</p>
                     <button onclick="loadPhoneDetails('${data.slug}')" class ="btn btn-primary mx-auto">see more</button>
                 </div>
            </div>
    `
        searchResult.appendChild(div)


    }

}
const loadPhoneDetails = phoneId => {

    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}
const displayPhoneDetails = phone => {
    console.log(phone)
    const PhoneDetails = document.getElementById('phone-details')
    const div = document.createElement('div')
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.name}</h5>
               
                    <p class="card-text">Release Data:${phone.releaseDate}</p>
               
               <h4>MainFeatures:</h4>
                <p>chip:${phone.mainFeatures.chipSet}</p>
                <p>Display:${phone.mainFeatures.displaySize}</p>
                <p>Memory;${phone.mainFeatures.memory}</p>
                <p>sensors:${phone.mainFeatures.sensors[0]}</p>
                <p>sensors:${phone.mainFeatures.sensors[1]}</p>
                <p>sensors:${phone.mainFeatures.sensors[2]}</p>
                <p>sensors:${phone.mainFeatures.sensors[3]}</p>
                <p>sensors:${phone.mainFeatures?.sensors[4]}</p>
                <p>sensors:${phone.mainFeatures.sensors[5]}</p>
                <p>sensors:${phone.mainFeatures.sensors[6]}</p>
                <p>Bluetooth:${phone.others.Bluetooth}</p>
                <p>GPS:${phone.others.GPS}</p>
                <p>NFC:${phone.others.NFC}</p>
                
                <p>USB:${phone.others.USB}</p>
                <p>WLAN:${phone.others.WLAN}</p>
            </div>
    `

    PhoneDetails.appendChild(div)

}