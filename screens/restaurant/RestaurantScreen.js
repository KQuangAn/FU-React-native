import {
  View,
  Image,
  SafeAreaView,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SearchBar } from "@rneui/base";
import CustomViewContainer from "../../components/CustomViewContainer";
import { featured } from "../../constants";
import RestaurantCard from "../../components/restaurantCard";
export default function RestaurantScreen() {
  const [searchtitle, setSearchTitle] = React.useState("");

  return (
    <CustomViewContainer mode="dark">
      <SearchBar
        platform="android"
        containerStyle={{ width: "100%" }}
        placeholder="Start searching..."
        placeholderTextColor="#888"
        round
        showCancel
        cancelButtonTitle="Cancel"
        value={searchtitle}
        onChange={(text) => setSearchTitle(text)}
      />

      <FlatList
        removeClippedSubviews
        data={featured.restaurants}
        renderItem={({ item }) => (
          <RestaurantCard
            key={item.id}
            id={item.id}
            title={item.title}
            imgUrl={item.imgUrl}
            rating={item.rating}
            type={item.type}
            address={item.address}
            description={item.description}
            dishes={item.dishes}
            reviews={item.reviews}
            location={item.lat}
          />
        )}
        keyExtractor={(item) => item.id} // Provide a keyExtractor for each item
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="w-full h-64 flex"
      />
    </CustomViewContainer>
  );
}
