radio.onReceivedNumber(function (receivedNumber) {
    if (!(transmit)) {
        led.plotBarGraph(
        radio.receivedPacket(RadioPacketProperty.SignalStrength) + 100,
        50
        )
        music.playTone((radio.receivedPacket(RadioPacketProperty.SignalStrength) + 100) * 5, music.beat(BeatFraction.Sixteenth))
    }
})
input.onButtonPressed(Button.A, function () {
    if (power > 0) {
        power += -1
        radio.setTransmitPower(power)
    }
    basic.showNumber(power)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    transmit = true
})
input.onButtonPressed(Button.B, function () {
    if (power < 7) {
        power += 1
        radio.setTransmitPower(power)
    }
    basic.showNumber(power)
    basic.clearScreen()
})
let transmit = false
let power = 0
radio.setTransmitPower(7)
radio.setFrequencyBand(62)
radio.setGroup(165)
power = 7
transmit = false
basic.forever(function () {
    if (transmit) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            . . # . .
            . # . # .
            `)
        radio.sendNumber(control.deviceSerialNumber())
        basic.clearScreen()
    }
})
