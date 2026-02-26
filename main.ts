/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matthew Carnaffan
 * Created on: Feb 2026
 * This program turns on a LED on command,then off on command.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

pins.digitalWritePin(DigitalPin.P0, 0)

input.onButtonPressed(Button.A, function() {
    pins.digitalWritePin(DigitalPin.P0, 1)
})

input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})