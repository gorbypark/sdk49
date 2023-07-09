import React from "react";
import { View } from "react-native";
import Head from "expo-router/head";
import Text from "@/src/components/Text";

const Activity = () => {
  return (
    <>
      <Head>
        <title>Activity</title>
      </Head>
      <View className="flex-1 justify-center items-center">
        <Text>Activity</Text>
      </View>
    </>
  );
};
export default Activity;
