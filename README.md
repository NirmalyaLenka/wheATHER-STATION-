# BMP180 Weather Sensor Examples

Arduino examples for reading temperature, barometric pressure, and estimated altitude from a BMP180 sensor over I2C. The repository contains separate sketches for several boards plus a React/TSX reference interface.

> These are learning examples, not a calibrated weather station. Pressure-based altitude is an estimate, not a GPS measurement.

## Electrical safety

The BMP180 sensor itself is a 3.3 V device. Use a breakout only according to its documented voltage and logic-level specifications.

- Prefer **3.3 V VCC** unless the exact breakout explicitly supports regulated 5 V input.
- Connect GND to GND, SDA to SDA, and SCL to SCL.
- For 5 V logic boards such as classic Uno, Leonardo, and Mega 2560, use a bidirectional I2C level shifter unless the breakout explicitly includes suitable level shifting.
- Do not assume a breakout is 5 V tolerant based on appearance alone.

## Bill of materials

| Item | Qty. | Notes |
| --- | ---: | --- |
| BMP180 sensor/breakout | 1 | Check supply and logic-level specifications |
| Supported development board | 1 | Select one firmware target below |
| Jumper wires | 4+ | VCC, GND, SDA, SCL |
| Breadboard | 1, optional | For prototyping |
| USB cable / board power | 1 | Upload and serial monitoring |
| Bidirectional I2C level shifter | As required | Needed for 5 V logic if the breakout lacks level shifting |

This is a basic single-sensor prototype BOM. It excludes enclosure, display, logging, calibration equipment, and weatherproofing.

## Firmware examples

Install the **Adafruit BMP085 Library** from Arduino Library Manager. It supports BMP085/BMP180 devices; Wire is supplied by the board core.

| File | Target | I2C mapping |
| --- | --- | --- |
| `bmp180_esp32.ino` | ESP32 | SDA GPIO 21, SCL GPIO 22 |
| `BMP180_ESP32_C3.ino` | ESP32-C3 | SDA GPIO 5, SCL GPIO 6 |
| `BMP180_ESP8266_NodeMCU.ino` | ESP8266 NodeMCU | SDA D2/GPIO 4, SCL D1/GPIO 5 |
| `BMP180_Arduino_Uno.ino` | Arduino Uno | SDA A4, SCL A5 |
| `BMP180_Arduino_Leonardo.ino` | Arduino Leonardo | Board hardware I2C pins |
| `BMP180_Arduino_Mega2560.ino` | Arduino Mega 2560 | SDA pin 20, SCL pin 21 |
| `BMP180_Raspberry_Pi_Pico.ino` | Raspberry Pi Pico with Arduino-compatible core | SDA GP4, SCL GP5 |
| `BMP180_STM32_BluePill.ino` | STM32 Blue Pill | Default I2C pins for the selected core |
| `BMP180_Seeeduino_XIAO.ino` | Seeeduino XIAO | Board default SDA/SCL |
| `BMP180_Teensy_40.ino` | Teensy 4.0 | SDA pin 18, SCL pin 19 |

These are separate alternatives, not one combined sketch. Install the correct board package, open the matching file, select the board and port, then compile and upload. Board-core APIs and pin defaults can vary by version, so confirm them against the target board documentation.

## Setup

1. Install the [Arduino IDE](https://www.arduino.cc/en/software).
2. Install the board support package for your target.
3. Install **Adafruit BMP085 Library** using Library Manager.
4. Wire the sensor safely and confirm the pin mapping.
5. Open the matching `.ino` file, select the board and port, then compile and upload.
6. Set Serial Monitor to the baud rate used by the sketch's `Serial.begin(...)` call (most examples use 115200).

**Known altitude-calculation issue:** The sketches currently define `SEA_LEVEL_PRESSURE_HPA` as `1013.25` and pass it directly to `bmp.readAltitude(...)`. The [Adafruit BMP085 API](https://adafruit.github.io/Adafruit-BMP085-Library/html/class_adafruit___b_m_p085.html) expects the sea-level pressure argument in pascals (for example, `101325` Pa for `1013.25` hPa). As written, the altitude output is not trustworthy until the firmware converts hPa to Pa or uses a pascal-valued constant. The firmware was not changed in this documentation-only pass. After correcting the unit mismatch, use a suitable local sea-level pressure value for a better estimate; altitude remains pressure-derived, not GPS.

## Repository structure

```text
wheATHER-STATION-/
├── bmp180_esp32.ino                 # Main ESP32 example
├── BMP180_ESP32_C3.ino              # ESP32-C3 variant
├── BMP180_ESP8266_NodeMCU.ino       # ESP8266 / NodeMCU variant
├── BMP180_Arduino_Uno.ino           # Arduino Uno variant
├── BMP180_Arduino_Leonardo.ino      # Arduino Leonardo variant
├── BMP180_Arduino_Mega2560.ino      # Arduino Mega 2560 variant
├── BMP180_Raspberry_Pi_Pico.ino     # Pico with Arduino-compatible core
├── BMP180_STM32_BluePill.ino        # STM32 Blue Pill variant
├── BMP180_Seeeduino_XIAO.ino        # Seeeduino XIAO variant
├── BMP180_Teensy_40.ino             # Teensy 4.0 variant
├── BMP180.pdf                       # BMP180 reference document
├── bmp180_boards.tsx                # React/TSX board selector and code-view component
└── README.md                        # Setup, wiring, BOM, and maintenance
```

The sketches remain at the root to preserve the existing direct-open workflow. If moved into folders later, each Arduino sketch should be placed in a directory matching its primary .ino filename.

### About `bmp180_boards.tsx`

This is a React component, not a standalone website or Arduino sketch. It requires a compatible React/TypeScript host project. Some embedded snippets are illustrative and may not exactly match the standalone firmware files; treat the board-specific `.ino` files as the source of truth.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Sensor not detected | VCC/GND, SDA/SCL, board pin mapping, I2C logic levels |
| No serial output | Correct port and matching baud rate |
| Implausible altitude | Sea-level pressure setting; altitude is approximate |
| Compile failure | Correct board core and support for the sketch's I2C API |

## Findings from the 11 November source review

This source review found and corrected two issues: malformed literal `\\n` sequences in the Pico sketch's I2C initialization, and misleading 5 V VCC comments in the Uno, Leonardo, and Mega examples. These source-level changes have **not** been compiled or tested on physical boards.

## Skills and technologies

`Embedded C++` · `Arduino IDE` · `I2C` · `BMP180` · `ESP32` · `ESP8266` · `Sensor interfacing`

## Maintenance & audit

- **Last updated:** 14 November 2026
- **Review scope:** Firmware paths, board mappings, electrical cautions, setup instructions, BOM, and repository structure.
- **Prior firmware changes (11 November 2026):** Repaired the Pico I2C initialization text and clarified 3.3 V sensor supply guidance for Uno, Leonardo, and Mega examples.
- **Current review (14 November 2026):** README-only update documenting the `readAltitude()` pressure-unit mismatch; no firmware was edited.
- **Validation boundary:** No compiler, hardware, or calibration test was run. The review does not establish that every board variant builds or works.
- **License:** No `LICENSE` file was present in the root listing; add one if a specific reuse license is intended.
