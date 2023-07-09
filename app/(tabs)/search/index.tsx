import React from "react";
import { View } from "react-native";
import Head from "expo-router/head";
import Text from "@/src/components/Text";

const Search = () => {
  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <View className="flex-1 justify-center items-center">
        <Text>Search</Text>
      </View>
    </>
  );
};
export default Search;
