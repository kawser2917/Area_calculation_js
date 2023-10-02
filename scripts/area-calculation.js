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
// Resuable Function
function calculateParallelogramArea(){
    const base = getInputValue("Parallelogram-base")
    const height = getInputValue("Parallelogram-height")
    const area = base * height

    setElementInnerText('Parallelogram-result',area)
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