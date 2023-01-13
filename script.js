myCanvas = document.getElementById("my-canvas")
let context = myCanvas.getContext("2d")
    yCod = window.innerHeight,
    xCod = window.innerHeight,
    myCanvas.width = yCod
    myCanvas.height = xCod
    mouseOnX = 0,
    mouseOnY = 0;

addEventListener("mousemove", function (e) {
    mouseOnX = e.clientX
    mouseOnY = e.clientY
})

let rgbValue = Math.round(Math.random() * 250) + 50

console.log(randomnColor())
function randomnColor() {
    return (
        `rgba( ${Math.round(Math.random() * 250) + 50} ,${Math.round(Math.random() * 250) + 50} , ${Math.round(Math.random() * 250) + 50} , ${Math.ceil(Math.random() * 10) + 1 / 10})`

    )
}
function randomnBall() {
    let radius = Math.round(Math.random() * 15 + 5)
    let randomX = Math.random() * (canvasWidth - radius)
    let randomY = Math.random() * (canvasHeight - radius)
    context.beginPath()
    context.arc(randomX, randomY, radius, 0, 2 * Math.PI)
    context.fillStyle = randomnColor()
    // context.stroke()
    context.fill()
}


for (let i = 0; i < 50; i++) {
    randomnBall()
}
