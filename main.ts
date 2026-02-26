/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matthew Carnaffan
 * Created on: Feb 2026
 * This program turns on a LED on command,then off on command.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

pins.digitalWritePin(DigitalPin.P16, 0)

input.onButtonPressed(Button.A, function() {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(3000)
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(3000)
    basic.showIcon(IconNames.Happy)
})
