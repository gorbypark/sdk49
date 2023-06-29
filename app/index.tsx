import React from "react";

import { View, Text } from "react-native";

import { Link } from "expo-router";

import styles from "./index.module.css";

const App = () => {
  return (
    <>
      <View className={styles.test}>
        <Text className="test">HelloWorld</Text>
        <Link href="/other">Other</Link>
      </View>
    </>
  );
};
export default App;
