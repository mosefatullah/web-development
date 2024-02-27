import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Interface() {
  const navigation = useNavigation();
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);
 return (
  <View style={styles.container}>
   <StatusBar style="auto" />
   <Image
    style={{
     borderRadius: 100,
    }}
    source={{
     width: 100,
     height: 100,
     uri: "https://picsum.photos/200/300",
    }}
   ></Image>
   <Text
    style={{
     fontSize: 25,
     color: "blue",
     marginTop: 20,
    }}
   >
    Simple0
   </Text>
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
