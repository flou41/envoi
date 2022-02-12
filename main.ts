radio.setGroup(2)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        radio.sendString("A")
    }
    while (input.buttonIsPressed(Button.B)) {
        radio.sendString("B")
    }
    while (input.buttonIsPressed(Button.AB)) {
        radio.sendString("AB")
    }
    if (input.rotation(Rotation.Roll) < -10 || input.rotation(Rotation.Roll) > 10) {
        radio.sendValue("y", input.rotation(Rotation.Roll) * 100 / 80)
    } else {
        radio.sendValue("y", 0)
    }
    if (input.rotation(Rotation.Pitch) < -10 || input.rotation(Rotation.Pitch) > 10) {
        radio.sendNumber(input.rotation(Rotation.Pitch) * 255 / 80)
    } else {
        radio.sendNumber(0)
    }
})
