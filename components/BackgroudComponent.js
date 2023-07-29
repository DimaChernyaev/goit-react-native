import { ImageBackground, View } from "react-native";
import { StyleSheet } from "react-native";

const BackgroundComponent = ({ children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/photobg.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default BackgroundComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
