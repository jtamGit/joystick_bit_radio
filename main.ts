function button () {
    buttonVal = pins.analogReadPin(AnalogPin.P2)
    if (buttonVal < 256) {
        buttonVal = 1
    } else if (buttonVal < 597) {
        buttonVal = 2
    } else if (buttonVal < 725) {
        buttonVal = 3
    } else if (buttonVal < 793) {
        buttonVal = 4
    } else if (buttonVal < 836) {
        buttonVal = 5
    } else if (buttonVal < 938) {
        buttonVal = 6
    } else {
        buttonVal = 0
    }
}
let buttonVal = 0
buttonVal = 0
radio.setGroup(1)
/**
 * LED表示を追加すると重くなるので注意
 */
basic.forever(function () {
    button()
    if (buttonVal) {
    	
    } else if (pins.analogReadPin(AnalogPin.P0) < 400) {
        buttonVal = 7
    } else if (pins.analogReadPin(AnalogPin.P0) > 600) {
        buttonVal = 8
    } else if (pins.analogReadPin(AnalogPin.P1) < 400) {
        buttonVal = 9
    } else if (pins.analogReadPin(AnalogPin.P1) > 600) {
        buttonVal = 10
    } else {
    	
    }
    radio.sendNumber(buttonVal)
})
