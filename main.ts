let start = 0
let elapsed = 0
let score = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    basic.showIcon(IconNames.No)
    score = Math.abs(elapsed - 7000)
    basic.showNumber(score)
})
