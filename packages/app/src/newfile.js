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
// import DropDownPicker from 'react-native-dropdown-picker';
// import RNPickerSelect from 'react-native-picker-select';
import ModalDropdown from 'react-native-modal-dropdown';

// const uri = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={'hourly, minutely, daily, alerts'}&appid=${openWeatherKey}`;

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
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationChange = (value) => {
    const location = locations[value];
    if (location) {
      setSelectedLocation(location);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.heading}>Weather @ Mantel</Text>
      <Image style={styles.logo} source={LogoSrc} />
      <ModalDropdown
        options={Object.values(locations).map((location) => location.label)}
        defaultValue="Select a location"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownDropdown}
        onSelect={(index) => handleLocationChange(Object.keys(locations)[index])}
        dropdownTextStyle={styles.dropdownItemText}
        dropdownTextHighlightStyle={styles.dropdownItemTextHighlighted}
        dropdownTextHighlightColor="#1E90FF"
        dropdownTextHighlightBgColor="#F0F8FF"
      />
      {/* <Text>Location: {locations[selectedLocation.coordinates]}</Text> */}
      <View style={styles.weather}>
        {selectedLocation && (
          <Weather location={selectedLocation?.coordinates} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  logo: {
    resizeMode: "contain",
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: "600",
  },
  platformRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  platformValue: {
    fontSize: 28,
    fontWeight: "500",
  },
  platformBackground: {
    backgroundColor: "#ececec",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#d4d4d4",
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: "center",
  },
  weather: {
    marginTop: 12,
  },
  dropdown: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333333',
  },
  dropdownDropdown: {
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 8,
    width: '100%',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333333',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  dropdownItemTextHighlighted: {
    color: '#1E90FF',
  },
});

export default App;