console.log("Hello, JavaScript!")

var name = "Kan"
console.log("Name:", name)

var age = 20
console.log("Age:", age)

var hasComputer = true
console.log("hasComputer:", hasComputer)

console.log(`My name is ${name} and I'm ${age} years old`)

function add(a, b) {
    return a + b
}

var result = add(3, 10)
console.log("Result:", result)

function calculate(a, b, operator) {
    if (operator == "+") {
        return a + b
    } else if (operator == "-") {
        return a - b
    } else if (operator == "*") {
        return a * b
    } else {
        return a / b
    }
}

console.log(calculate(5, 10, "+"))
console.log(calculate(5, 10, "-"))
console.log(calculate(5, 10, "*"))
console.log(calculate(5, 10, "/"))

document.addEventListener("DOMContentLoaded", function() {
    var imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"
    var smileyImageElement = document.getElementById("smiley")
    smileyImageElement.src = imageUrl
})