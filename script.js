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
    var tasks = ["Drink water", "Learn JS"]
    var imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"

    function generateTask(taskName) {
        var containerElement = document.createElement("div")
        containerElement.style = "border: 1px solid grey; width: 200px; padding: 20px; margin-top: 10px;"

        var imageElement = new Image()
        imageElement.style = "width: 50px; height: 50px;"
        imageElement.src = imageUrl
        containerElement.appendChild(imageElement)

        var labelElement = document.createElement("label")
        labelElement.innerHTML = taskName
        containerElement.appendChild(labelElement)

        var bodyElement = document.getElementsByTagName("body")[0]
        bodyElement.appendChild(containerElement)
    }

    tasks.forEach(task => {
        generateTask(task)
    })
})