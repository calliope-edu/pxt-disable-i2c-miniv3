// LED with resistor from A0_SCL to GND (and A1_TX for comparison): both should blink.
// No block needed: adding the extension applies the fix.
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.A0_SCL, 1)
    pins.digitalWritePin(DigitalPin.A1_TX, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.A0_SCL, 0)
    pins.digitalWritePin(DigitalPin.A1_TX, 0)
    basic.pause(500)
})
