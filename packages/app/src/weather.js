import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';


const openWeatherKey = "091a91b53068e473901ddbf8ecbb844e";

const Weather = ({ location, onTemperatureColorChange }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=${openWeatherKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, [location]);

  useEffect(() => {
    if (weatherData) {
      const temperature = weatherData.main.temp;
      const color = getTemperatureColor(temperature);
      onTemperatureColorChange(color);
    }
  }, [weatherData]);

  const getTemperatureColor = (temperature) => {
    // Define your color mapping logic based on temperature values
    if (temperature >= 20) {
      return '#e9c8af'; // Hot temperature color
    } else if (temperature <= 12) {
      return '#c2c4c1'; // Cold temperature color
    } else {
      return '#f6e9dd'; // Default temperature color
    }
  };

  if (!weatherData) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const { name, main, weather } = weatherData;
  const roundedTemperature = Number(main.temp).toFixed(0);
  const weatherCondition = weather[0].main;


  return (
    <View style={styles.weather}>
      {/* <Image style={styles.weatherIcon} source={{ uri: `${weatherIconBaseURL}${weatherIcon}${weatherIconExtension}` }} /> */}
      <View style={styles.temperatureContainer}>
        <Text style={styles.temperature}>{roundedTemperature}</Text>
        <Text style={styles.degreeSymbol}>°</Text>
      </View>
      <Text style={styles.condition}>{weatherCondition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weather: {
    alignItems: "center",
  },
  temperature: {
    fontSize: 70,
    fontWeight: "500",
  },
  temperatureContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  degreeSymbol: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 4,
  },
  condition: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
  },
});

export default Weather;
