import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "./CreatePostsScreen";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";

const Home = () => {

  const Tabs = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <Tabs.Navigator>
        <Tabs.Screen name="PostsScreen" component={PostsScreen} />
        <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
        <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tabs.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
