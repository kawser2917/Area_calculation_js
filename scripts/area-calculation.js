function calculateTraingleArea(){
    const baseElement = document.getElementById('traingle-base')
    const baseString = baseElement.value
    const base = parseFloat(baseString)

    const heightElement = document.getElementById('traingle-height')
    const heightString = heightElement.value
    const height = parseFloat(baseString)

    const traingleArea = .5 * base * height

    const areaResult = document.getElementById('traingle-result')
    areaResult.innerText = traingleArea
}

function calculateRectangleArea(){
    const widthElement = document.getElementById("rectangle-width")
    const widthString = widthElement.value
    const width = parseFloat(widthString)

    const lengthElement = document.getElementById("rectangle-length")
    const lengthString = lengthElement.value
    const length = parseFloat(lengthString)

    const rectangleArea = width * length

    const rectangleResult = document.getElementById("rectangle-result")

    rectangleResult.innerText = rectangleArea
 
}
// Parallelogram reusable Function
function calculateParallelogramArea(){
    const base = getInputValue("Parallelogram-base")
    const height = getInputValue("Parallelogram-height")
    const area = base * height

    setElementInnerText('Parallelogram-result',area)
}
// Rhombus Calculation with reusable funtionc
function calculateRhombusArea(){
    const d1 = getInputValue("Rhombus-d1")
    const d2 = getInputValue('Rhombus-d2')
    const area = 0.5 * d1 * d2
    setElementInnerText("Rhombus-result",area)
}
// pentagon calculation with reusable js
function calculatePentagonArea(){
    const parameter = getInputValue("Pentagon-para")
    const d = getInputValue("Pentagon-d")

    const area = 0.5 * parameter * d

    setElementInnerText("Pentagon-result",area)
}
// Ellipse calculation with js
function calculateEllipseArea(){
    const a_axis = getInputValue("Ellipse-a-axis")
    const b_axis = getInputValue("Ellipse-b-axis")

    const area = 3.1416 * a_axis * b_axis
    setElementInnerText("Ellipse-result",area)
}



// reusable get input value function
function getInputValue(inputId){
    const inputField = document.getElementById(inputId)
    const inputString = inputField.value
    const inputValue = parseFloat(inputString)
    return inputValue
}

// reusable set value
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area

}