input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    count = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    count = 0
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
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
basic.forever(function on_forever() {
    
})
