import React from "react";
import { View } from "react-native";
import Head from "expo-router/head";
import Text from "@/src/components/Text";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <View className="flex-1 justify-center items-center">
        <Text>Profile</Text>
      </View>
    </>
  );
};
export default Profile;
