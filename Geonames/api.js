const API_url = "http://api.geonames.org/";

async function postalCodeSearch(postalCode){
    var req = API_url + `postalCodeSearchJSON?postalcode=${postalCode}&country=AR&maxRows=10&username=sistemasdistribuidos`;
    const resp = await fetch(req);

    const respData = await resp.json();
    let datos = document.getElementById("datos");
    let innerHTML = "";
    respData.postalCodes.forEach(row => {

        innerHTML += `<div>
        <p>Country Code: ${row.countryCode}</p>
        <p>Admin Name: ${row.adminName1}</p>
        <p>Place Name: ${row.placeName}</p>
        </div>`
    });
    datos.innerHTML = innerHTML
    console.log(respData);   
}
async function nearbyPostalCodes(postalCode){
    var req = API_url + `findNearbyPostalCodesJSON?postalcode=${postalCode}&country=AR&username=sistemasdistribuidos`;
    const resp = await fetch(req);

    const respData = await resp.json();
    let datos = document.getElementById("datos2");
    let innerHTML = "";

    respData.postalCodes.forEach(row => {

        innerHTML += `<div>
        <p>Country Code: ${row.countryCode}</p>
        <p>Admin Name: ${row.adminName1}</p>
        <p>Place Name: ${row.placeName}</p>
        <p>Postal Code: ${row.postalCode}</p>
        </div>`
    });
    datos.innerHTML = innerHTML
    console.log(respData);   
}