import { useState } from "react";

const boards = [
  {
    id: "esp32",
    name: "ESP32",
    color: "#1D9E75",
    light: "#E1F5EE",
    sda: "GPIO 21",
    scl: "GPIO 22",
    vcc: "3.3V",
    lib: "Adafruit BMP085",
    i2cInit: "Wire.begin(21, 22);",
    platform: "Arduino (ESP32)",
    pins: { vcc: "3V3", gnd: "GND", sda: "21", scl: "22" },
    code: `#include <Wire.h>
#include <Adafruit_BMP085.h>

Adafruit_BMP085 bmp;
#define SEA_LEVEL_HPA 1013.25

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22);  // SDA=21, SCL=22

  if (!bmp.begin()) {
    Serial.println("BMP180 not found! Check wiring.");
    while (1) delay(1000);
  }
  Serial.println("BMP180 ready on ESP32");
}

void loop() {
  float temp = bmp.readTemperature();
  int32_t pressure = bmp.readPressure();
  float altitude = bmp.readAltitude(SEA_LEVEL_HPA);

  Serial.print("Temp: "); Serial.print(temp, 2); Serial.println(" °C");
  Serial.print("Pressure: "); Serial.print(pressure / 100.0, 2); Serial.println(" hPa");
  Serial.print("Altitude: "); Serial.print(altitude, 2); Serial.println(" m");
  Serial.println("---");
  delay(2000);
}`
  },
  {
    id: "uno",
    name: "Arduino Uno",
    color: "#185FA5",
    light: "#E6F1FB",
    sda: "A4",
    scl: "A5",
    vcc: "3.3V",
    lib: "Adafruit BMP085",
    i2cInit: "Wire.begin();  // A4=SDA, A5=SCL (hardware)",
    platform: "Arduino IDE",
    pins: { vcc: "3.3V", gnd: "GND", sda: "A4", scl: "A5" },
    code: `#include <Wire.h>
#include <Adafruit_BMP085.h>

Adafruit_BMP085 bmp;
#define SEA_LEVEL_HPA 1013.25

void setup() {
  Serial.begin(9600);
  Wire.begin();  // A4=SDA, A5=SCL

  if (!bmp.begin()) {
    Serial.println("BMP180 not found! Check wiring.");
    while (1) delay(1000);
  }
  Serial.println("BMP180 ready on Arduino Uno");
}

void loop() {
  float temp = bmp.readTemperature();
  int32_t pressure = bmp.readPressure();
  float altitude = bmp.readAltitude(SEA_LEVEL_HPA);

  Serial.print("Temp: "); Serial.print(temp, 2); Serial.println(" °C");
  Serial.print("Pressure: "); Serial.print(pressure / 100.0, 2); Serial.println(" hPa");
  Serial.print("Altitude: "); Serial.print(altitude, 2); Serial.println(" m");
  Serial.println("---");
  delay(2000);
}`
  },
  {
    id: "nano",
    name: "Arduino Nano",
    color: "#185FA5",
    light: "#E6F1FB",
    sda: "A4",
    scl: "A5",
    vcc: "3.3V",
    lib: "Adafruit BMP085",
    i2cInit: "Wire.begin();  // A4=SDA, A5=SCL (hardware)",
    platform: "Arduino IDE",
    pins: { vcc: "3.3V", gnd: "GND", sda: "A4", scl: "A5" },
    code: `#include <Wire.h>
#include <Adafruit_BMP085.h>

Adafruit_BMP085 bmp;
#define SEA_LEVEL_HPA 1013.25

void setup() {
  Serial.begin(9600);
  Wire.begin();  // A4=SDA, A5=SCL

  if (!bmp.begin()) {
    Serial.println("BMP180 not found! Check wiring.");
    while (1) delay(1000);
  }
  Serial.println("BMP180 ready on Arduino Nano");
}

void loop() {
  float temp = bmp.readTemperature();
  int32_t pressure = bmp.readPressure();
  float altitude = bmp.readAltitude(SEA_LEVEL_HPA);

  Serial.print("Temp: "); Serial.print(temp, 2); Serial.println(" °C");
  Serial.print("Pressure: "); Serial.print(pressure / 100.0, 2); Serial.println(" hPa");
  Serial.print("Altitude: "); Serial.print(altitude, 2); Serial.println(" m");
  Serial.println("---");
  delay(2000);
}`
  },
  {
    id: "mega",
    name: "Arduino Mega",
    color: "#185FA5",
    light: "#E6F1FB",
    sda: "Pin 20",
    scl: "Pin 21",
    vcc: "3.3V",
    lib: "Adafruit BMP085",
    i2cInit: "Wire.begin();  // Pin 20=SDA, Pin 21=SCL",
    platform: "Arduino IDE",
    pins: { vcc: "3.3V", gnd: "GND", sda: "20", scl: "21" },
    code: `#include <Wire.h>
#include <Adafruit_BMP085.h>

Adafruit_BMP085 bmp;
#define SEA_LEVEL_HPA 1013.25

void setup() {
  Serial.begin(9600);
  Wire.begin();  // Pin 20=SDA, Pin 21=SCL (hardware I2C)

  if (!bmp.begin()) {
    Serial.println("BMP180 not found! Check wiring.");
    while (1) delay(1000);
  }
  Serial.println("BMP180 ready on Arduino Mega");
}

void loop() {
  float temp = bmp.readTemperature();
  int32_t pressure = bmp.readPressure();
  float altitude = bmp.readAltitude(SEA_LEVEL_HPA);

  Serial.print("Temp: "); Serial.print(temp, 2); Serial.println(" °C");
  Serial.print("Pressure: "); Serial.print(pressure / 100.0, 2); Serial.println(" hPa");
  Serial.print("Altitude: "); Serial.print(altitude, 2); Serial.println(" m");
  Serial.println("---");
  delay(2000);
}`
  },
  {
    id: "nodemcu",
    name: "NodeMCU ESP8266",
    color: "#634AB7",
    light: "#EEEDFE",
    sda: "D2 (GPIO4)",
    scl: "D1 (GPIO5)",
    vcc: "3.3V",
    lib: "Adafruit BMP085",
    i2cInit: "Wire.begin(4, 5);  // D2=SDA(GPIO4), D1=SCL(GPIO5)",
    platform: "Arduino (ESP8266)",
    pins: { vcc: "3V3", gnd: "GND", sda: "D2", scl: "D1" },
    code: `#include <Wire.h>
#include <Adafruit_BMP085.h>

Adafruit_BMP085 bmp;
#define SEA_LEVEL_HPA 1013.25

void setup() {
  Serial.begin(115200);
  Wire.begin(4, 5);  // SDA=D2(GPIO4), SCL=D1(GPIO5)

  if (!bmp.begin()) {
    Serial.println("BMP180 not found! Check wiring.");
    while (1) delay(1000);
  }
  Serial.println("BMP180 ready on NodeMCU ESP8266");
}

void loop() {
  float temp = bmp.readTemperature();
  int32_t pressure = bmp.readPressure();
  float altitude = bmp.readAltitude(SEA_LEVEL_HPA);

  Serial.print("Temp: "); Serial.print(temp, 2); Serial.println(" °C");
  Serial.print("Pressure: "); Serial.print(pressure / 100.0, 2); Serial.println(" hPa");
  Serial.print("Altitude: "); Serial.print(altitude, 2); Serial.println(" m");
  Serial.println("---");
  delay(2000);
}`
  },
  {
    id: "rpi_pico",
    name: "Raspberry Pi Pico",
    color: "#3B6D11",
    light: "#EAF3DE",
    sda: "GP4",
    scl: "GP5",
    vcc: "3.3V",
    lib: "micropython-bmp180",
    i2cInit: "i2c = I2C(0, sda=Pin(4), scl=Pin(5), freq=400000)",
    platform: "MicroPython",
    pins: { vcc: "3V3", gnd: "GND", sda: "GP4", scl: "GP5" },
    code: `# MicroPython — Raspberry Pi Pico
# Install: mpremote mip install github:octaprog7/BMP180

from machine import I2C, Pin
import time
from bmp180 import BMP180

i2c = I2C(0, sda=Pin(4), scl=Pin(5), freq=400000)
sensor = BMP180(i2c)

# Sea level pressure in Pa
SEA_LEVEL_PA = 101325

while True:
    temp = sensor.temperature      # °C
    pressure = sensor.pressure     # Pa
    altitude = 44330 * (1.0 - (pressure / SEA_LEVEL_PA) ** (1 / 5.255))

    print(f"Temp:     {temp:.2f} °C")
    print(f"Pressure: {pressure / 100:.2f} hPa")
    print(f"Altitude: {altitude:.2f} m")
    print("---")
    time.sleep(2)`
  },
  {
    id: "stm32",
    name: "STM32 (Blue Pill)",
    color: "#0F6E56",
    light: "#E1F5EE",
    sda: "PB7",
    scl: "PB6",
    vcc: "3.3V",
    lib: "Adafruit BMP085",
    i2cInit: "Wire.begin();  // PB7=SDA, PB6=SCL (I2C1)",
    platform: "Arduino (STM32)",
    pins: { vcc: "3.3V", gnd: "GND", sda: "PB7", scl: "PB6" },
    code: `#include <Wire.h>
#include <Adafruit_BMP085.h>

Adafruit_BMP085 bmp;
#define SEA_LEVEL_HPA 1013.25

void setup() {
  Serial.begin(9600);
  Wire.begin();  // PB7=SDA, PB6=SCL (I2C1 default)

  if (!bmp.begin()) {
    Serial.println("BMP180 not found! Check wiring.");
    while (1) delay(1000);
  }
  Serial.println("BMP180 ready on STM32 Blue Pill");
}

void loop() {
  float temp = bmp.readTemperature();
  int32_t pressure = bmp.readPressure();
  float altitude = bmp.readAltitude(SEA_LEVEL_HPA);

  Serial.print("Temp: "); Serial.print(temp, 2); Serial.println(" °C");
  Serial.print("Pressure: "); Serial.print(pressure / 100.0, 2); Serial.println(" hPa");
  Serial.print("Altitude: "); Serial.print(altitude, 2); Serial.println(" m");
  Serial.println("---");
  delay(2000);
}`
  },
  {
    id: "teensy",
    name: "Teensy 4.0",
    color: "#854F0B",
    light: "#FAEEDA",
    sda: "Pin 18",
    scl: "Pin 19",
    vcc: "3.3V",
    lib: "Adafruit BMP085",
    i2cInit: "Wire.begin();  // Pin 18=SDA, Pin 19=SCL",
    platform: "Arduino (Teensyduino)",
    pins: { vcc: "3.3V", gnd: "GND", sda: "18", scl: "19" },
    code: `#include <Wire.h>
#include <Adafruit_BMP085.h>

Adafruit_BMP085 bmp;
#define SEA_LEVEL_HPA 1013.25

void setup() {
  Serial.begin(115200);
  Wire.begin();  // Pin 18=SDA, Pin 19=SCL

  if (!bmp.begin()) {
    Serial.println("BMP180 not found! Check wiring.");
    while (1) delay(1000);
  }
  Serial.println("BMP180 ready on Teensy 4.0");
}

void loop() {
  float temp = bmp.readTemperature();
  int32_t pressure = bmp.readPressure();
  float altitude = bmp.readAltitude(SEA_LEVEL_HPA);

  Serial.print("Temp: "); Serial.print(temp, 2); Serial.println(" °C");
  Serial.print("Pressure: "); Serial.print(pressure / 100.0, 2); Serial.println(" hPa");
  Serial.print("Altitude: "); Serial.print(altitude, 2); Serial.println(" m");
  Serial.println("---");
  delay(2000);
}`
  },
  {
    id: "attiny",
    name: "ATtiny85",
    color: "#993C1D",
    light: "#FAECE7",
    sda: "PB0 (Pin 5)",
    scl: "PB2 (Pin 7)",
    vcc: "3.3V",
    lib: "TinyWireM + BMP085_Tiny",
    i2cInit: "TinyWireM.begin();",
    platform: "Arduino (ATtinyCore)",
    pins: { vcc: "VCC", gnd: "GND", sda: "PB0", scl: "PB2" },
    code: `// Requires: ATtinyCore board package
// Libraries: TinyWireM, BMP085_Tiny
// Note: No hardware Serial — use SoftwareSerial or LED

#include <TinyWireM.h>
#include <BMP085_Tiny.h>

BMP085_Tiny bmp;
#define SEA_LEVEL_PA 101325L

void setup() {
  TinyWireM.begin();  // PB0=SDA, PB2=SCL (USI)

  if (!bmp.begin()) {
    // Flash LED on PB4 to indicate error
    pinMode(4, OUTPUT);
    while (1) { digitalWrite(4, !digitalRead(4)); delay(200); }
  }
}

void loop() {
  bmp.update();

  float temp = bmp.getTemperature();
  long pressure = bmp.getPressure();
  // Altitude formula (no floating point division)
  float alt = 44330.0 * (1.0 - pow((float)pressure / SEA_LEVEL_PA, 1.0/5.255));

  // Use LED blink count or connect external display
  // e.g. 1602 LCD via software I2C
  delay(2000);
}`
  },
  {
    id: "due",
    name: "Arduino Due",
    color: "#0C447C",
    light: "#E6F1FB",
    sda: "Pin 20 (SDA1)",
    scl: "Pin 21 (SCL1)",
    vcc: "3.3V ✓ (native)",
    lib: "Adafruit BMP085",
    i2cInit: "Wire.begin();  // Pin 20=SDA, Pin 21=SCL",
    platform: "Arduino IDE (SAM core)",
    pins: { vcc: "3.3V", gnd: "GND", sda: "20", scl: "21" },
    code: `// Arduino Due is 3.3V native — safe for BMP180 directly
#include <Wire.h>
#include <Adafruit_BMP085.h>

Adafruit_BMP085 bmp;
#define SEA_LEVEL_HPA 1013.25

void setup() {
  Serial.begin(115200);
  Wire.begin();  // Pin 20=SDA, Pin 21=SCL (I2C1)
  // Wire1 uses SDA1/SCL1 near AREF if needed

  if (!bmp.begin()) {
    Serial.println("BMP180 not found! Check wiring.");
    while (1) delay(1000);
  }
  Serial.println("BMP180 ready on Arduino Due");
}

void loop() {
  float temp = bmp.readTemperature();
  int32_t pressure = bmp.readPressure();
  float altitude = bmp.readAltitude(SEA_LEVEL_HPA);

  Serial.print("Temp: "); Serial.print(temp, 2); Serial.println(" °C");
  Serial.print("Pressure: "); Serial.print(pressure / 100.0, 2); Serial.println(" hPa");
  Serial.print("Altitude: "); Serial.print(altitude, 2); Serial.println(" m");
  Serial.println("---");
  delay(2000);
}`
  }
];

const WiringDiagram = ({ board }) => {
  const c = board.color;
  const pinRows = [
    { label: "VCC", wire: "#e74c3c", to: board.pins.vcc, desc: "Power" },
    { label: "GND", wire: "#555", to: board.pins.gnd, desc: "Ground" },
    { label: "SDA", wire: "#2980b9", to: board.pins.sda, desc: "Data" },
    { label: "SCL", wire: "#27ae60", to: board.pins.scl, desc: "Clock" },
  ];

  return (
    <svg viewBox="0 0 560 180" width="100%" style={{ display: "block", maxWidth: 560 }}>
      {/* BMP180 module */}
      <rect x="20" y="30" width="110" height="120" rx="8" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
      <rect x="28" y="38" width="94" height="14" rx="3" fill="#0f3460" />
      <text x="75" y="49" textAnchor="middle" fontSize="9" fill="#8be" fontFamily="monospace" fontWeight="bold">BMP180</text>

      {/* BMP180 pins */}
      {[{ y: 70, lbl: "VCC", col: "#e74c3c" }, { y: 90, lbl: "GND", col: "#888" }, { y: 110, lbl: "SDA", col: "#3498db" }, { y: 130, lbl: "SCL", col: "#2ecc71" }].map((p, i) => (
        <g key={i}>
          <rect x="118" y={p.y - 6} width="8" height="12" rx="1" fill={p.col} />
          <text x="112" y={p.y + 4} textAnchor="end" fontSize="9" fill="#ccc" fontFamily="monospace">{p.lbl}</text>
        </g>
      ))}

      {/* Wires */}
      {[{ y: 70, col: "#e74c3c" }, { y: 90, col: "#555" }, { y: 110, col: "#3498db" }, { y: 130, col: "#2ecc71" }].map((w, i) => (
        <line key={i} x1="126" y1={w.y} x2="310" y2={w.y} stroke={w.col} strokeWidth="2.5" strokeLinecap="round" />
      ))}

      {/* Board */}
      <rect x="310" y="20" width="220" height="140" rx="10" fill={board.light} stroke={c} strokeWidth="1.2" />
      <rect x="310" y="20" width="220" height="24" rx="10" fill={c} />
      <rect x="310" y="32" width="220" height="12" fill={c} />
      <text x="420" y="37" textAnchor="middle" fontSize="11" fill="white" fontFamily="monospace" fontWeight="bold">{board.name}</text>

      {/* Board pins */}
      {[
        { y: 70, lbl: board.pins.vcc, col: "#e74c3c", desc: "VCC" },
        { y: 90, lbl: board.pins.gnd, col: "#555", desc: "GND" },
        { y: 110, lbl: board.pins.sda, col: "#3498db", desc: "SDA" },
        { y: 130, lbl: board.pins.scl, col: "#2ecc71", desc: "SCL" },
      ].map((p, i) => (
        <g key={i}>
          <rect x="306" y={p.y - 6} width="8" height="12" rx="1" fill={p.col} />
          <text x="322" y={p.y + 4} fontSize="9" fill="#333" fontFamily="monospace" fontWeight="bold">{p.lbl}</text>
          <text x="380" y={p.y + 4} fontSize="8" fill="#666" fontFamily="monospace">← {p.desc}</text>
        </g>
      ))}

      {/* Legend */}
      {[
        { x: 30, col: "#e74c3c", lbl: "Power (3.3V)" },
        { x: 135, col: "#555", lbl: "Ground" },
        { x: 215, col: "#3498db", lbl: "SDA" },
        { x: 265, col: "#2ecc71", lbl: "SCL" },
      ].map((l, i) => (
        <g key={i}>
          <rect x={l.x} y="168" width="10" height="5" rx="1" fill={l.col} />
          <text x={l.x + 13} y="174" fontSize="7.5" fill="#555" fontFamily="monospace">{l.lbl}</text>
        </g>
      ))}
    </svg>
  );
};

export default function App() {
  const [active, setActive] = useState("esp32");
  const [tab, setTab] = useState("code");
  const [copied, setCopied] = useState(false);

  const board = boards.find(b => b.id === active);

  const copy = () => {
    navigator.clipboard.writeText(board.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0", maxWidth: 800 }}>
      <h2 style={{ fontSize: 18, fontWeight: 500, margin: "0 0 4px", color: "var(--color-text-primary)" }}>
        BMP180 — 10 board code &amp; wiring guide
      </h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 16px" }}>
        Select a board to view wiring diagram, pin mapping, and ready-to-upload code.
      </p>

      {/* Board selector */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
        {boards.map(b => (
          <button
            key={b.id}
            onClick={() => { setActive(b.id); setTab("code"); }}
            style={{
              padding: "6px 12px",
              borderRadius: 20,
              border: active === b.id ? `2px solid ${b.color}` : "1px solid var(--color-border-tertiary)",
              background: active === b.id ? b.light : "var(--color-background-primary)",
              color: active === b.id ? b.color : "var(--color-text-secondary)",
              fontWeight: active === b.id ? 500 : 400,
              fontSize: 13,
              cursor: "pointer",
              transition: "all .15s"
            }}
          >{b.name}</button>
        ))}
      </div>

      {/* Card */}
      <div style={{ border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, overflow: "hidden", background: "var(--color-background-primary)" }}>
        {/* Card header */}
        <div style={{ background: board.color, padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 500, color: "#fff" }}>{board.name}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 2 }}>{board.platform} · Library: {board.lib}</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {["wiring","code"].map(t => (
              <button key={t} onClick={() => setTab(t)} style={{
                padding: "5px 14px", borderRadius: 6, fontSize: 12, fontWeight: 500, cursor: "pointer", border: "none",
                background: tab === t ? "rgba(255,255,255,0.25)" : "transparent",
                color: tab === t ? "#fff" : "rgba(255,255,255,0.65)",
                transition: "background .15s"
              }}>{t === "wiring" ? "Wiring" : "Code"}</button>
            ))}
          </div>
        </div>

        {/* Pin summary bar */}
        <div style={{ display: "flex", gap: 0, borderBottom: "0.5px solid var(--color-border-tertiary)", background: "var(--color-background-secondary)" }}>
          {[
            { label: "VCC", val: board.vcc, col: "#e74c3c" },
            { label: "GND", val: "GND", col: "#555" },
            { label: "SDA", val: board.sda, col: "#2980b9" },
            { label: "SCL", val: board.scl, col: "#27ae60" },
          ].map((p, i) => (
            <div key={i} style={{ flex: 1, padding: "8px 12px", borderRight: i < 3 ? "0.5px solid var(--color-border-tertiary)" : "none" }}>
              <div style={{ fontSize: 10, color: p.col, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>{p.label}</div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)", marginTop: 2 }}>{p.val}</div>
            </div>
          ))}
        </div>

        {/* Wiring tab */}
        {tab === "wiring" && (
          <div style={{ padding: "20px 20px 12px" }}>
            <WiringDiagram board={board} />
            <div style={{ marginTop: 12, padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
              <strong style={{ color: "var(--color-text-primary)" }}>Note:</strong>{" "}
              BMP180 operates at <strong>3.3V only</strong>. On 5V boards (Uno, Nano, Mega) use the onboard 3.3V pin for VCC. For SCL/SDA, add a logic level shifter (or 4.7kΩ pull-ups to 3.3V) to avoid damaging the sensor.
              {board.id === "attiny" && " ATtiny85 has limited RAM — avoid large libraries."}
              {board.id === "due" && " Arduino Due is natively 3.3V — direct connection is safe."}
              {board.id === "rpi_pico" && " Pico runs at 3.3V — direct connection is safe."}
            </div>
          </div>
        )}

        {/* Code tab */}
        {tab === "code" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 16px", borderBottom: "0.5px solid var(--color-border-tertiary)", background: "var(--color-background-secondary)" }}>
              <span style={{ fontSize: 12, color: "var(--color-text-secondary)", fontFamily: "var(--font-mono)" }}>
                {board.id === "rpi_pico" ? "main.py" : "bmp180_sensor.ino"}
              </span>
              <button onClick={copy} style={{
                fontSize: 12, padding: "4px 12px", borderRadius: 6, border: "0.5px solid var(--color-border-secondary)",
                background: copied ? "#EAF3DE" : "var(--color-background-primary)",
                color: copied ? "#3B6D11" : "var(--color-text-secondary)",
                cursor: "pointer"
              }}>
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre style={{
              margin: 0, padding: "16px 20px", overflowX: "auto",
              fontFamily: "var(--font-mono)", fontSize: 12, lineHeight: 1.65,
              color: "var(--color-text-primary)", background: "transparent",
              whiteSpace: "pre"
            }}>{board.code}</pre>
          </div>
        )}
      </div>

      {/* Bottom info */}
      <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div style={{ padding: "10px 14px", borderRadius: 8, border: "0.5px solid var(--color-border-tertiary)", background: "var(--color-background-secondary)" }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 4 }}>LIBRARY INSTALL</div>
          <div style={{ fontSize: 12, color: "var(--color-text-primary)", fontFamily: "var(--font-mono)" }}>
            {board.id === "rpi_pico"
              ? "mpremote mip install github:octaprog7/BMP180"
              : board.id === "attiny"
              ? "TinyWireM + BMP085_Tiny (manual install)"
              : "Arduino IDE → Library Manager\n→ Search: Adafruit BMP085"}
          </div>
        </div>
        <div style={{ padding: "10px 14px", borderRadius: 8, border: "0.5px solid var(--color-border-tertiary)", background: "var(--color-background-secondary)" }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 4 }}>I²C INIT</div>
          <div style={{ fontSize: 12, color: "var(--color-text-primary)", fontFamily: "var(--font-mono)" }}>{board.i2cInit}</div>
        </div>
      </div>
    </div>
  );
}
