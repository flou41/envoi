input.calibrateCompass()
basic.forever(function () {
    radio.setGroup(2)
    while (input.buttonIsPressed(Button.A)) {
        radio.sendString("A")
    }
    while (input.buttonIsPressed(Button.B)) {
        radio.sendString("B")
    }
    while (input.buttonIsPressed(Button.AB)) {
        radio.sendString("AB")
    }
    radio.sendValue("rotation x", input.rotation(Rotation.Pitch))
    radio.sendValue("rotation y", input.rotation(Rotation.Roll))
})
