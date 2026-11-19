/**
 * Adding this extension makes A0_SCL/A0_SDA (P19/P20) normal push-pull outputs,
 * so "digital write pin A0_SCL to 1" drives the pin high.
 * This breaks I2C on those pins: don't add it if you use I2C devices on A0.
 */
namespace pinsExtra {
    //% shim=pinsExtra::pushPullP19P20
    function pushPullP19P20(): void {
        // simulator: nothing to do
        return
    }

    // Runs automatically at program start, before the user's code.
    pushPullP19P20()
}
