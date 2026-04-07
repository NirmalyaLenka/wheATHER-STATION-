/*
 * BMP180 Sensor with ESP32
 * Reads Temperature, Pressure, and Altitude
 * 
 * Wiring:
 *   BMP180 VCC  -> ESP32 3.3V
 *   BMP180 GND  -> ESP32 GND
 *   BMP180 SDA  -> ESP32 GPIO 21
 *   BMP180 SCL  -> ESP32 GPIO 22
 * 
 * Required Library: Adafruit BMP085 Library (supports BMP180)
 */

#include <Wire.h>
#include <Adafruit_BMP085.h>

// Create BMP180 object
Adafruit_BMP085 bmp;

// Sea level pressure in hPa (adjust for your location for accurate altitude)
#define SEA_LEVEL_PRESSURE_HPA 1013.25

void setup() {
  Serial.begin(115200);
  delay(1000);

  Serial.println("=================================");
  Serial.println("  ESP32 + BMP180 Sensor Demo     ");
  Serial.println("=================================");

  // Initialize I2C with ESP32 default pins (SDA=21, SCL=22)
  Wire.begin(21, 22);

  // Initialize BMP180
  if (!bmp.begin()) {
    Serial.println("ERROR: BMP180 sensor not found!");
    Serial.println("Check wiring:");
    Serial.println("  VCC -> 3.3V");
    Serial.println("  GND -> GND");
    Serial.println("  SDA -> GPIO 21");
    Serial.println("  SCL -> GPIO 22");
    while (1) {
      delay(1000); // Halt and wait
    }
  }

  Serial.println("BMP180 initialized successfully!");
  Serial.println("---------------------------------");
}

void loop() {
  // Read sensor values
  float temperature = bmp.readTemperature();           // in Celsius
  int32_t pressure  = bmp.readPressure();              // in Pascals
  float altitude    = bmp.readAltitude(SEA_LEVEL_PRESSURE_HPA); // in meters

  // Print readings
  Serial.println("--- Sensor Readings ---");

  Serial.print("Temperature : ");
  Serial.print(temperature, 2);
  Serial.print(" °C  |  ");
  Serial.print((temperature * 9.0 / 5.0) + 32.0, 2);
  Serial.println(" °F");

  Serial.print("Pressure    : ");
  Serial.print(pressure);
  Serial.print(" Pa  |  ");
  Serial.print(pressure / 100.0, 2);
  Serial.println(" hPa");

  Serial.print("Altitude    : ");
  Serial.print(altitude, 2);
  Serial.println(" m");

  Serial.println("-----------------------");
  Serial.println();

  delay(2000); // Wait 2 seconds before next reading
}
