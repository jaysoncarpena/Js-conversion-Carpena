
function convert() {
    let kilo = parseFloat(document.getElementById("kilo").value);
    let pounds = 2.20462 * kilo;
    let grams = 1000 * kilo;
    let ounces = 35.274 * kilo;
    let tons = 0.00110231 * kilo;

    document.getElementById("grams").innerHTML = grams;
    document.getElementById("pounds").innerHTML = pounds;
    document.getElementById("ounces").innerHTML = ounces;
    document.getElementById("tons").innerHTML = tons;
}

