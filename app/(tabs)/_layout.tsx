import { Tabs, Link } from "expo-router";
import { Pressable } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

const Layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "ios-home" : "ios-home-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "ios-search" : "ios-search-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "ios-pencil" : "ios-pencil-outline"}
              color={color}
              size={size}
            />
          ),
          tabBarButton: (props) => (
            <Link href="/modal" asChild style={{ flex: 1 }}>
              <Pressable {...props} onPress={null}></Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "ios-heart" : "ios-heart-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "ios-person" : "ios-person-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
