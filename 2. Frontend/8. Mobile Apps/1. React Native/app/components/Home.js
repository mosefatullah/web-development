import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

function Home() {
 return (
  <View style={styles.container}>
   <StatusBar style="auto" />
   <Text>Home</Text>
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
});

export default Home;
