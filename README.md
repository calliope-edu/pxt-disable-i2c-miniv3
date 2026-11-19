# Disable I2C on A0 (Calliope mini V3)

On a Calliope mini V3, `digital write pin A0_SCL to 1` (or A0_SDA) does not drive the pin high. An LED connected from A0_SCL to GND stays off, but reading the pin returns 1.

**Just add this extension.** It fixes A0_SCL and A0_SDA at program start; there is no block to run.

**It breaks I2C on A0.** Don't add it if you connect I2C devices to the A0 Grove connector. The onboard sensors use a separate internal bus and keep working.

## Why

At startup CODAL creates the external I2C bus on A0_SDA/A0_SCL (nRF pins P1_00/P0_26, `MicroBit.cpp`: `i2c(io.A0SDA, io.A0SCL)`). `NRF52I2C::redirect()` sets both pins to drive mode 6 ("standard 0, disconnect 1"), which is open-drain. `NRF52Pin::setDigitalValue()` switches the pin to output but never resets the drive mode. As a result:

- writing 0 drives the pin low
- writing 1 only releases the pin, so it floats or sits on a weak pull-up and can't power an LED

The extension sets both pins back to drive mode 0 (push-pull). The same bug exists on the micro:bit V2 (P19/P20).

## Example

```typescript
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.A0_SCL, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.A0_SCL, 0)
    basic.pause(500)
})
```

Has no effect in the simulator or on Calliope mini 1/2 (non-CODAL builds).

## License

MIT
