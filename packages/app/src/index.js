import React, { useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LogoSrc from "./logo.png";
import Weather from "./weather.js";
import { Picker } from '@react-native-picker/picker';
// import { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";

const locations = {
  Syd: { label: 'Sydney Hub', value: 'Syd', coordinates: [-33.868820, 151.209290] },
  Mag: { label: 'Magnetic Island Hub', value: 'Mag', coordinates: [-19.178419, 146.838013] },
  Per: { label: 'Perth Hub', value: 'Per', coordinates: [-31.950527, 115.860458] },
  Auk: { label: 'Auckland Hub', value: 'Auk', coordinates: [-36.848461, 174.763336] },
  Bri: { label: 'Brisbane Hub', value: 'Bri', coordinates: [-27.468439, 153.023340] },
  Mel: { label: 'Melbourne Hub', value: 'Mel', coordinates: [-37.817389, 144.967510] },
  Hob: { label: 'Hobart Hub', value: 'Hob', coordinates: [-42.881639, 147.331620] },
  Que: { label: 'Queenstown Hub', value: 'Que', coordinates: [-45.032763, 168.673239] },
};

export function App() {
  const [selectedLocation, setSelectedLocation] = useState('Syd');
  const [temperatureColor, setTemperatureColor] = useState('#f6e9dd');

  const handleTemperatureColorChange = (color) => {
    setTemperatureColor(color);
  };

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: temperatureColor }]}>
      <View style={styles.header}>
        <Text style={styles.location}>{locations[selectedLocation].label}</Text>
        <Weather
          location={locations[selectedLocation].coordinates}
          onTemperatureColorChange={handleTemperatureColorChange}
        />
      </View>
      <Picker
        style={styles.dropdown}
        selectedValue={selectedLocation}
        onValueChange={(itemValue, itemIndex) => setSelectedLocation(itemValue)}
      >
        {Object.entries(locations).map(([key, { label, value }]) => (
          <Picker.Item key={key} label={label} value={value} />
        ))}
      </Picker>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Weather @ Mantel</Text>
        <Image style={styles.footerIcon} source={LogoSrc} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    height: Platform.OS === 'web' ? '100vh' : '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
     
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  location: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 20,
  },
  dropdown: {
    width: Platform.OS === 'web' ? '30' : '80%',
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: 'white',
    color: 'black',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    position: 'absolute',
    bottom: 20,
  },
  footerText: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  footerIcon: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
  },
});

export default App;
