import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "./CreatePostsScreen";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";

const Home = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <>
      <Text>Home</Text>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Posts") {
              return (
                <View
                  style={
                    focused ? styles.focusedIconWrapper : styles.iconWrapper
                  }
                >
                </View>
              );
            } else if (route.name === "CreatePosts") {
              return (
                <View
                  style={
                    focused ? styles.focusedIconWrapper : styles.iconWrapper
                  }
                >
                </View>
              );
            } else if (route.name === "Profile") {
              return (
                <View
                  style={
                    focused ? styles.focusedIconWrapper : styles.iconWrapper
                  }
                >
                </View>
              );
            }
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 83,
            paddingTop: 9,
            paddingLeft: 82,
            paddingRight: 82,
            justifyContent: "center",
            alignItems: "center",
          },
          headerShown: true,
          headerStyle: {
            borderBottomWidth: 1,
          },
        })}
      >
        <Tabs.Screen
          name={"Posts"}
          component={PostsScreen}
          options={{
            title: "Публікації",
            headerStyle: {
              borderBottomWidth: 1,
            },
          }}
        />
        <Tabs.Screen
          name={"CreatePosts"}
          component={CreatePostsScreen}
          options={{
            title: "Створити публікацію",
            tabBarStyle: { display: "none" },
            headerStyle: {
              borderBottomWidth: 1,
            },
          }}
        />
        <Tabs.Screen
          name={"Profile"}
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </Tabs.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  focusedIconWrapper: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
