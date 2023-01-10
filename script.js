myCanvas = document.getElementById("my-canvas")
let context = myCanvas.getContext("2d")
let viewWidth = window.innerHeight
let viewHeight = window.innerHeight
let viewCanvasX = myCanvas.width
let viewCanvasY = myCanvas.height

let mouseOnX = 0
let mouseOnY = 0

let random100 = Math.round(Math.random() * 30)

addEventListener("mousemove", function (e) {
    mouseOnX = e.clientX
    mouseOnY = e.clientY
})

function randomnColor() {
    return (
        "rgba(" +
        Math.round(Math.random() * 250) +
        "," +
        Math.round(Math.random() * 250) +
        "," +
        Math.round(Math.random() * 250) +
        "," +
        Math.ceil(Math.random() * 10) / 10 +
        ")"

    )
}

function randomnBall() {
    context.beginPath()
    context.arc(random100, random100, random100, 0, 2 * Math.PI)
    context.fillstyle = randomnColor()
    // context.lineWidh = 5
    // context.strokeWidth = 5
    context.strokeStyle = "#ffffff"
    context.stroke()
}


let balls = []
for (let i = 0; i < 100; i++) {
    balls.push(new randomnBall())
}

