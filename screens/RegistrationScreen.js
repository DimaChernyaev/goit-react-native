import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";
import Toast from "react-native-toast-message";
import BackgroundComponent from "../components/BackgroudComponent";
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisable, setIsPasswordVisable] = useState(true);
  const [isInputFocus, setIsInputFocus] = useState(null);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const navigation = useNavigation();

  const handleSubmitForm = () => {
    if (login === "" || email === "" || password === "") {
      Toast.show({
        type: "error",
        text1: "All fields must be filled. Please fill in the empty field!",
      });
      return;
    }

    const user = {
      login,
      email,
      password,
    };
    console.log(user);
    setEmail("");
    setLogin("");
    setPassword("");

    navigation.navigate("Home");
    return;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <BackgroundComponent>
        <View
          style={{
            ...styles.wrapper,
            paddingBottom: isKeyboardOpen ? 32 : 72,
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <View style={styles.photoWrapper}>
              <TouchableOpacity style={styles.addPhotoButton}>
                <Image />
                <Text style={{ color: "#FF6C00" }}>+</Text>
              </TouchableOpacity>
            </View>
            <ScrollView>
              <Text style={styles.title}>Реєстрація</Text>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: isInputFocus === "login" ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder="Логін"
                value={login}
                onChangeText={setLogin}
                onFocus={() => {
                  setIsInputFocus("login");
                  setIsKeyboardOpen(true);
                }}
                onBlur={() => {
                  setIsInputFocus(null);
                  setIsKeyboardOpen(false);
                }}
              />
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: isInputFocus === "email" ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder="Адреса електроної пошти"
                value={email}
                onChangeText={setEmail}
                onFocus={() => {
                  setIsInputFocus("email");
                  setIsKeyboardOpen(true);
                }}
                onBlur={() => {
                  setIsInputFocus(null);
                  setIsKeyboardOpen(false);
                }}
              />
              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor:
                      isInputFocus === "password" ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Пароль"
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => {
                    setIsInputFocus("password");
                    setIsKeyboardOpen(true);
                  }}
                  onBlur={() => {
                    setIsInputFocus(null);
                    setIsKeyboardOpen(false);
                  }}
                  secureTextEntry={isPasswordVisable}
                />
                <TouchableOpacity
                  style={{ position: "absolute", top: 16, right: 16 }}
                  onPress={() => setIsPasswordVisable(!isPasswordVisable)}
                >
                  <Text>{isPasswordVisable ? "Показати" : "Приховати"}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmitForm}
              >
                <Text style={styles.buttonText}>Зареєстуватися</Text>
              </TouchableOpacity>
              <View
                style={{
                  ...styles.textContainer,
                  display: isKeyboardOpen ? "none" : "flex",
                }}
              >
                <Text style={styles.text}>Вже є акаунт?</Text>
                <Text
                  style={{
                    ...styles.text,
                    textDecorationLine: "underline",
                  }}
                  onPress={() => navigation.navigate("LoginScreen")}
                >
                  Увійти
                </Text>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </BackgroundComponent>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35.16,
    textAlign: "center",
    marginBottom: 33,
  },
  wrapper: {
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",
    width: "100%",
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    width: "100%",
    height: 50,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderStyle: "solid",
    borderRadius: 10,
    paddingLeft: 16,
    paddingRight: 16,
  },
  button: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 27,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  photoWrapper: {
    width: 120,
    height: 120,
    position: "absolute",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: "-35%",
    left: "50%",
    transform: [{ translateX: -50 }],
    zIndex: 100,
  },
  addPhotoButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    borderColor: "#FF6C00",
    borderRadius: 12.5,
    borderWidth: 1,
    position: "absolute",
    zIndex: 1100,
    top: 80,
    right: -12,
  },
  text: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    marginTop: 16,
  },
  textContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
