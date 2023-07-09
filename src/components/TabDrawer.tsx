import { Tabs, useNavigation } from "expo-router";
import { Drawer } from "expo-router/drawer";
import Icon from "@expo/vector-icons/Ionicons";
import { View, Text, Pressable, useWindowDimensions } from "react-native";
import { useNavigationState } from "@react-navigation/native";
import { useEffect } from "react";

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: "rgb(245, 246, 247)",
        marginTop: -4,
      }}
      contentContainerStyle={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Pressable onPress={() => props.navigation.toggleDrawer()}>
                <Icon name="ios-apps-outline" size={22} />
              </Pressable>
            </View>
            <View style={{ flex: 1 }}>
              <Text>edit</Text>
            </View>
          </View>
          <DrawerItemList {...props} />
        </View>
        <View>
          <Text>User</Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

interface ITabDrawer {
  breakpoint?: number;
}

const TabDrawer = ({ breakpoint = 1024 }: ITabDrawer) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const state = useNavigationState((state) => state);

  useEffect(() => {
    width >= breakpoint &&
      state.type !== "drawer" &&
      navigation.reset({
        ...state,
        type: "drawer",
        routes: state.routes as never,
        routeNames: state.routeNames as never[],
      });

    width < breakpoint &&
      state.type !== "tab" &&
      navigation.reset({
        ...state,
        type: "tab",
        routes: state.routes as never,
        routeNames: state.routeNames as never[],
      });
  }, [width]);

  if (width >= breakpoint) {
    return (
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{ overlayColor: "transparent" }}
      />
    );
  } else {
    return <Tabs />;
  }
};

export default TabDrawer;
