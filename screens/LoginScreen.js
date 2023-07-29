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
import { useNavigation } from "@react-navigation/native";
import BackgroundComponent from "../components/BackgroudComponent";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isInputFocus, setIsInputFocus] = useState(null);
  const [isPasswordVisable, setIsPasswordVisable] = useState(true);

  const navigation = useNavigation();

  const handleSubmitForm = () => {
    if (email === "" || password === "") {
      Toast.show({
        type: "error",
        text1: "All fields must be filled. Please fill in the empty field!",
      });
    }

    const user = {
      email,
      password,
    };
    console.log(user);
    setEmail("");
    setPassword("");
    return user;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <BackgroundComponent>
        <View
          style={{
            ...styles.wrapper,
            paddingBottom: isKeyboardOpen ? 32 : 144,
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <ScrollView>
              <Text style={styles.title}>Увійти</Text>
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
                  setIsInputFocus("");
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
                    setIsInputFocus("");
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
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={handleSubmitForm}>
                  Увійти
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  ...styles.textContainer,
                  display: isKeyboardOpen ? "none" : "flex",
                }}
              >
                <Text style={styles.text}>Немає акаунту?</Text>
                <Text
                  style={{
                    ...styles.text,
                    textDecorationLine: "underline",
                  }}
                  onPress={() => navigation.navigate("RegistrationScreen")}
                >
                  Зареєструватися
                </Text>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </BackgroundComponent>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

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
    paddingTop: 32,
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
