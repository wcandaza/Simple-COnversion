function ounces() {
    let x = document.getElementById("numCup").value;
    const y = 8;
    const product = x * y;

    document.getElementById("result").innerHTML = product
}
function milliliters() {
    let x = document.getElementById("numCup").value;
    const y = 236.588;
    const product = x * y;

    document.getElementById("result").innerHTML = product
}
function tablespoons() {
    let x = document.getElementById("numCup").value;
    const y = 16;
    const product = x * y;

    document.getElementById("result").innerHTML = product
}