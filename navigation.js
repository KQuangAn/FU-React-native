import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import UploadScreen from "./screens/UploadScreen";
import ChatScreen from "./screens/ChatScreen";
import RestaurantScreen from "./screens/restaurant/RestaurantScreen";
import RestaurantDishes from "./screens/restaurant/RestaurantDishes";
import DishDetail from "./screens/restaurant/DishDetail";
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Upload" component={UploadScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="RestaurantDishes" component={RestaurantDishes} />
        <Stack.Screen name="DishDetail" component={DishDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
