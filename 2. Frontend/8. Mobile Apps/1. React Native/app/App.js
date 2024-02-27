import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Interface from "./components/Interface";
import Home from "./components/Home";

const Stack = createNativeStackNavigator();

export default function App() {
 return (
  <NavigationContainer>
   <Stack.Navigator
    screenOptions={{
     headerShown: false,
    }}
   >
    <Stack.Screen name="Initial" component={Interface} />
    <Stack.Screen name="Home" component={Home} />
   </Stack.Navigator>
  </NavigationContainer>
 );
}
