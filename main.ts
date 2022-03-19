radio.setGroup(2)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("AB")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("B")
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendString("A")
    } else {
        radio.sendString("R")
    }
    if (input.rotation(Rotation.Roll) < -10 || input.rotation(Rotation.Roll) > 10) {
        radio.sendValue("y", input.rotation(Rotation.Roll) * 130 / 80)
    } else {
        radio.sendValue("y", 0)
    }
    if (input.rotation(Rotation.Pitch) < -10 || input.rotation(Rotation.Pitch) > 10) {
        radio.sendNumber(input.rotation(Rotation.Pitch) * 130 / 80)
    } else {
        radio.sendNumber(0)
    }
})
