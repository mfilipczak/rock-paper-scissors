input.onButtonPressed(Button.A, function () {
    count = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    count = 0
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    count += 1
    if (count == 3) {
        count = 0
        hand = randint(1, 3)
        if (hand == 1) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        }
        if (hand == 2) {
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                . # # # .
                `)
        }
        if (hand == 3) {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        }
    }
})
let hand = 0
let count = 0
count = 0
basic.forever(function () {
	
})
