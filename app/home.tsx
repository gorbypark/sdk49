import React from "react";

import { View, Text } from "react-native";

import { Link } from "expo-router";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href="/other">Other</Link>
    </View>
  );
};
export default Home;
