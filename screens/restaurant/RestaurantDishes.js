import { FlatList, View } from "react-native";
import DishCard from "../../components/DishCard";
export default function RestaurantDishes({ route, navigation }) {
  const { dishes } = route.params;
  console.log("restau");
  console.log(dishes.dishes);
  return (
    <View className="flex-1">
      <FlatList
        data={dishes.dishes}
        renderItem={({ item }) => (
          <DishCard dish={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
}
