import { View, Text } from "react-native";

interface IBlah {
  text: string;
}

const Blah = ({ text }: IBlah) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default Blah;
