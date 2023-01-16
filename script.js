myCanvas = document.getElementById("my-canvas")
let context = myCanvas.getContext("2d")
    yCod = window.innerHeight,
    xCod = window.innerWidth,
    myCanvas.width = xCod
    myCanvas.height = yCod
let mouseOnX = 0,
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
    let randomX = Math.random() * (xCod - radius * 2)
    let randomY = Math.random() * (yCod - radius)
    context.beginPath()
    context.arc(randomX, randomY, radius, 0, 2 * Math.PI)
    context.fillStyle = randomnColor()
    // context.stroke()
    context.fill()
}

let ball = []
for (let i = 0; i < 50; i++) {
    ball.push(randomnBall())
}

function animation() {
    if (xCod !== window.innerWidth || yCod !== window.innerHeight) {
        xCod = window.innerWidth
        yCod = window.innerHeight
        myCanvas.width = xCod
        myCanvas.height = yCod
    }
    requestAnimationFrame(animation)
    context.clearRect(0,0,tx,ty)

}
const timeDifference = new Date()

