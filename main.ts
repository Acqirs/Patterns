input.onButtonPressed(Button.A, function () {
    basic.showString("Hello! Here is your pattern!")
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        . # # # #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("Press A or B for a message and pattern!")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Press A or B for message and Pattern!")
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.showString("Here is a Pattern for you!")
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . . .
        . . # . .
        . . . # .
        # . . . #
        `)
    basic.showLeds(`
        # # . . #
        . # . . .
        . . # . .
        . . . # .
        # . . . #
        `)
    basic.showLeds(`
        # # # . #
        . # . . .
        . . # . .
        . . . # .
        # . . . #
        `)
    basic.showLeds(`
        # # # . #
        # # . . .
        . . # . .
        . . . # .
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # # . . .
        . . # . .
        . . . # .
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # # # . .
        . . # . .
        . . . # .
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # # # . .
        . . # . .
        . . # # .
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # # # . #
        . . # . .
        . . # # .
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . # . .
        . . # # .
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . # . .
        . . # # .
        # # . . #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . # . .
        . . # # .
        # # # . #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . # . .
        . . # # .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # . # . .
        . . # # .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # . # . .
        # . # # .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # . .
        # . # # .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # . .
        # # # # .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # .
        # # # # .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showIcon(IconNames.Diamond)
    basic.showString("Press A or B for a message and pattern!")
})
