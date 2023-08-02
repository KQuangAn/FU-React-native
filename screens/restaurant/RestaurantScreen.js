import { View, Image, SafeAreaView, Text } from "react-native";
import React from "react";
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
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="w-full flex"
      >
        {featured.restaurants.map((data) => (
          <RestaurantCard
            id={data.id}
            title={data.title}
            imgUrl={data.imgUrl}
            rating={data.rating}
            type={data.type}
            address={data.address}
            description={data.description}
            dishes={data.dishes}
            reviews={data.reviews}
            location={data.lat}
          ></RestaurantCard>
        ))}
      </FlatList>
    </CustomViewContainer>
  );
}
