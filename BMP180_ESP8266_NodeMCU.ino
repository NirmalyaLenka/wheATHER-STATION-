/*
 * BMP180 Sensor Firmware for ESP8266 (NodeMCU)
 * Reads Temperature, Pressure, and Altitude
 * * Wiring for ESP8266 (NodeMCU):
 * BMP180 VCC  -> 3.3V
 * BMP180 GND  -> GND
 * BMP180 SDA  -> D2 (GPIO 4)
 * BMP180 SCL  -> D1 (GPIO 5)
 * * Required Library: Adafruit BMP085 Library
 */

#include <Wire.h>
#include <Adafruit_BMP085.h>

Adafruit_BMP085 bmp;

// Sea level pressure in hPa (adjust for your location)
#define SEA_LEVEL_PRESSURE_HPA 1013.25

void setup() {
  Serial.begin(115200);
  delay(1000);

  Serial.println("=================================");
  Serial.println("  BMP180 Firmware: ESP8266 (NodeMCU)  ");
  Serial.println("=================================");

  // Initialize I2C for ESP8266 (NodeMCU)
  Wire.begin(4, 5);

  if (!bmp.begin()) {
    Serial.println("ERROR: BMP180 sensor not found!");
    while (1) { delay(1000); }
  }

  Serial.println("BMP180 initialized successfully!");
}

void loop() {
  float temperature = bmp.readTemperature();
  int32_t pressure  = bmp.readPressure();
  float altitude    = bmp.readAltitude(SEA_LEVEL_PRESSURE_HPA);

  Serial.print("Temp: "); Serial.print(temperature, 1); Serial.print(" C | ");
  Serial.print("Pres: "); Serial.print(pressure / 100.0, 2); Serial.print(" hPa | ");
  Serial.print("Alt: "); Serial.print(altitude, 1); Serial.println(" m");

  delay(2000);
}
