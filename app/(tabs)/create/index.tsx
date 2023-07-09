import React from "react";
import { View } from "react-native";
import Head from "expo-router/head";
import Text from "@/src/components/Text";

const Create = () => {
  return (
    <>
      <Head>
        <title>Create</title>
      </Head>
      <View className="flex-1 justify-center items-center">
        <Text>Create</Text>
      </View>
    </>
  );
};
export default Create;
