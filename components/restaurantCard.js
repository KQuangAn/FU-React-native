import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";

export default function RestaurantCard({
  id,
  title,
  imgUrl,
  rating,
  type,
  address,
  description,
  dishes,
  reviews,
  location,
}) {
  // console.log(urlFor(imgUrl).url());

  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("RestaurantDishes", {
          dishes: { dishes },
        });
      }}
    >
      <View className="ml-1 mr-6 bg-white shadow-inherit rounded-3xl shadow-lg">
        <Image
          style={{ width: "100%", height: "50%" }}
          source={{
            uri: "https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg",
          }}
        />
        <View className="px-3 pb-4 space-y-2 ">
          <Text className="text-sm font-bold pt-2">{title}</Text>
          <View className="flex-row items-center space-x-1">
            <Feather name="star" size={24} color="black" className="h-4 w-4" />
            <Text className="text-xs">
              <Text className="text-green-700">{rating}</Text>
              <Text className="text-gray-700"> ({reviews} review)</Text> ·{" "}
              <Text className="font-semibold text-gray-700">{type}</Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Feather
              name="map-pin"
              size={24}
              color="black"
              className="w-4 h-4"
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="text-gray-700 text-xs"
            >
              Nearby · {address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
