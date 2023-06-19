import {
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import LogoSrc from "./logo.png";
  
  // const uri = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={'hourly, minutely, daily, alerts'}&appid=${openWeatherKey}`;
  
  const locations = {
    Syd:[-33.868820, 151.209290],
    Mag: [-19.178419, 146.838013],
    Per: [-31.950527, 115.860458],
    Auk: [-36.848461, 174.763336],
    Bri: [-27.468439, 153.023340],
    Mel: [-37.817389, 144.967510],
    Hob: [-42.881639, 147.331620],
    Que: [-45.032763, 168.673239]
  }
  
  export function App() {
    return (
      <SafeAreaView style={styles.root}>
        <Image style={styles.logo} source={LogoSrc} />
        <Text style={styles.text}>Hello Mantel Group!</Text>
        <View style={styles.platformRow}>
          <Text style={styles.text}>Platform: </Text>
          <View style={styles.platformBackground}>
            <Text style={styles.platformValue}>{Platform.OS}</Text>
          </View>
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
  });
  
  export default App;