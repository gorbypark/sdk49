import React from "react";
import { Image as ExpoImage } from "expo-image";
import { Link } from "expo-router";
import { View, useWindowDimensions, Image as RNImage } from "react-native";
import Head from "expo-router/head";
import Text from "@/src/components/Text";
import Animated from "react-native-reanimated";

const ImageCard = () => {
  const { width } = useWindowDimensions();
  return (
    <Animated.View
      sharedTransitionTag="image"
      style={{ width: width, height: 200, backgroundColor: "red" }}
    >
      <ExpoImage
        style={{ flex: 1 }}
        source="https://picsum.photos/seed/696/3000/2000"
        contentFit="fill"
      />
    </Animated.View>
  );
};

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <View className="flex-1 justify-center items-center">
        <Link href="/(tabs)/home/image">
          <Text>Home</Text>
        </Link>
        <ImageCard />
      </View>
    </>
  );
};
export default Home;
