import "react-native-gesture-handler";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import Home from "./screens/Home";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Routes = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  return (
    <NavigationContainer>
      <Routes.Navigator initialRouteName="LoginScreen">
        <Routes.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <Routes.Screen name="LoginScreen" component={LoginScreen} />
        <Routes.Screen name="Home" component={Home} />
      </Routes.Navigator>
      <Toast />
    </NavigationContainer>
  );
};

export default App;
