#include "pxt.h"

namespace pinsExtra {

// CODAL creates the external I2C bus on P20/P19 (Calliope mini V3: A0_SDA/A0_SCL)
// at startup and sets both pins to drive mode 6 ("standard 0, disconnect 1",
// open-drain). pins.digitalWritePin() never resets that, so writing 1 only
// releases the pin. Drive mode 0 restores "standard 0, standard 1" (push-pull).
//
// Plain // comments on purpose: a /** */ doc comment makes pxt add this function
// to shims.d.ts, which clashes with the declaration in main.ts.
//%
void pushPullP19P20() {
#if MICROBIT_CODAL
    uBit.io.P19.setDriveMode(0);
    uBit.io.P20.setDriveMode(0);
#endif
}

} // namespace pinsExtra
