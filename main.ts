let current_temperature = 0
// Created By: Mariam Abugamga
// Created on: sept 28, 2020
// This program uses a temperature
basic.forever(function () {
    current_temperature = input.temperature()
    basic.showNumber(current_temperature)
    basic.pause(1000)
    basic.clearScreen()
})
