input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P2, pins.map(
    1023 - pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    180
    ))
})
