def on_button_pressed_a():
    global count
    count = 0
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global count
    count = 0
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global count, hand
    count += 1
    if count == 3:
        count = 0
        hand = randint(1, 3)
        if hand == 1:
            basic.show_leds("""
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                """)
        if hand == 2:
            basic.show_leds("""
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                . # # # .
                """)
        if hand == 3:
            basic.show_leds("""
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                """)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

hand = 0
count = 0
count = 0

def on_forever():
    pass
basic.forever(on_forever)
