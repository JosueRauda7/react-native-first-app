import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState(
    "Bienvenido. No presiones el botón. D:"
  );

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        style={styles.button}
        title='Change Text'
        onPress={() => setOutputText("Lo presionastes :c")}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 2,
    marginTop: 10,
  },
});
