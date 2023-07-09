import { Image as ExpoImage } from "expo-image";
import Animated from "react-native-reanimated";
import { useWindowDimensions } from "react-native";

const ImageCard = () => {
  const { width } = useWindowDimensions();
  return (
    <Animated.View
      sharedTransitionTag="image"
      style={{ width: width, height: 400, backgroundColor: "red" }}
    >
      <ExpoImage
        style={{ flex: 1 }}
        source="https://picsum.photos/seed/696/3000/2000"
        contentFit="fill"
      />
    </Animated.View>
  );
};

const Image = () => {
  return <ImageCard />;
};

export default Image;
