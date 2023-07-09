import React from "react";
import { View } from "react-native";
import Head from "expo-router/head";
import Text from "@/src/components/Text";

const Modal = () => {
  return (
    <>
      <Head>
        <title>Modal</title>
      </Head>
      <View className="flex-1 justify-center items-center">
        <Text>Modal</Text>
      </View>
    </>
  );
};
export default Modal;
