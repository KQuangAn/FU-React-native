import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DishCard = ({ dish, navigation }) => {
  console.log("dishcard");
  console.log(dish);
  return (
    <Pressable
      className="m-4 w-full"
      onPress={() => {
        navigation.navigate("DishDetail", {
          dish,
        });
      }}
    >
      <View className="mt-6 bg-white rounded-3xl shadow-lg w-2/5 ">
        <Image style={{ width: "100%", height: "50%" }} source={dish.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-sm font-bold pt-2">{dish.title}</Text>
          <View className="flex-row items-center space-x-1">
            <Feather name="star" size={24} color="black" className="h-4 w-4" />
            <View className="flex-row items-center space-x-1">
              <Text>{dish.price}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default DishCard;
