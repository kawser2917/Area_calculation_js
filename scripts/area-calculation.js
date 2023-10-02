function calculateTraingleArea(){
    const baseElement = document.getElementById('traingle-base')
    const baseString = baseElement.value
    const base = parseFloat(baseString)

    const heightElement = document.getElementById('traingle-height')
    const heightString = heightElement.value
    const height = parseFloat(baseString)

    const area = .5 * base * height

    const areaResult = document.getElementById('result')
    areaResult.innerText = area
}