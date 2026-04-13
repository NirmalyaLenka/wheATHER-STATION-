# wheATHER-STATION-
A beginner-friendly Arduino project for the ESP32 that interfaces with the BMP180 barometric pressure sensor via I2C. Outputs live temperature (°C/°F), atmospheric pressure (Pa/hPa), and altitude (meters) to the Serial Monitor every 2 seconds. Includes full wiring guide, library setup, and troubleshooting tipS.

# ESP32 + BMP180 Sensor 

Read **Temperature**, **Pressure**, and **Altitude** using a BMP180 barometric sensor with an ESP32 microcontroller.

---

##  Components Required

| Component | Quantity |
|-----------|----------|
| ESP32 Dev Board | 1 |
| BMP180 Sensor Module | 1 |
| Jumper Wires | 4 |
| Breadboard (optional) | 1 |

---

##  Wiring Diagram
<img width="415" height="289" alt="image" src="https://github.com/user-attachments/assets/61369da9-a946-417a-bdaf-d1a35f013e7a" />

```
BMP180          ESP32
------          -----
VCC    ──────►  3.3V
GND    ──────►  GND
SDA    ──────►  GPIO 21
SCL    ──────►  GPIO 22
```

>  **Important:** Use **3.3V** only! The BMP180 is NOT 5V swittable.

---

##  Setup & Installation

### 1. Install Arduino IDE
Download from [arduino.cc](https://www.arduino.cc/en/software)

### 2. Add ESP32 Board Support
1. Open **Arduino IDE** → **File** → **Preferences**
2. Add this URL to *Additional Boards Manager URLs*:
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools** → **Board** → **Boards Manager**
4. Search for `esp32` and click **Install**

### 3. Install Required Library
1. Go to **Sketch** → **Include Library** → **Manage Libraries**
2. Search for `Adafruit BMP085`
3. Install **"Adafruit BMP085 Library"** by Adafruit

### 4. Upload the Sketch
1. Open `bmp180_esp32.ino` in Arduino IDE
2. Select your board: **Tools** → **Board** → **ESP32 Dev Module**
3. Select the correct **Port** under **Tools** → **Port**
4. Click **Upload** ⬆️

---

##  Serial Monitor Output

Open Serial Monitor at **115200 baud** to see live readings:

```
=================================
  ESP32 + BMP180 Sensor Demo     
=================================
BMP180 initialized successfully!
---------------------------------
--- Sensor Readings ---
Temperature : 28.40 °C  |  83.12 °F
Pressure    : 101325 Pa  |  1013.25 hPa
Altitude    : 0.00 m
-----------------------
```

---

##  Configuration

You can adjust the sea level pressure in the code for more accurate altitude readings based on your location:

```cpp
#define SEA_LEVEL_PRESSURE_HPA 1013.25  // Change this for your location
```

You can find your local sea level pressure from a weather website.

---

##  Troubleshooting

| Problem | Solution |
|--------|----------|
| `BMP180 sensor not found!` | Check wiring — make sure SDA is on GPIO 21 and SCL on GPIO 22 |
| Garbage in Serial Monitor | Set baud rate to **115200** |
| Wrong altitude reading | Adjust `SEA_LEVEL_PRESSURE_HPA` to your local value |
| Board not detected | Install CP210x or CH340 USB driver for your ESP32 board |

---

##  Project Structure

```
esp32-bmp180/
│
├── bmp180_esp32.ino   # Main Arduino sketch
└── README.md          # This file
```

---

##  Libraries Used

- [Adafruit BMP085 Library](https://github.com/adafruit/Adafruit-BMP085-Library) — supports BMP085 and BMP180
- [Wire](https://www.arduino.cc/reference/en/language/functions/communication/wire/) — built-in I2C library

---

##  License

This project is open source and available under the [MIT License](LICENSE).

---

##  Contributing

Pull requests are welcome! Feel free to open an issue for bugs or feature requests.
