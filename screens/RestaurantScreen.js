import { Card } from "@rneui/base";
import { View, Image } from "react-native";
import React from "react";
import { SearchBar } from "@rneui/base";

export default function RestaurantScreen() {
  const [value, setValue] = React.useState("");

  return (
    <View className="w-full">
      <SearchBar
        platform="android"
        containerStyle={{ width: "100%" }}
        placeholder="Start searching..."
        placeholderTextColor="#888"
        round
        showCancel
        cancelButtonTitle="Cancel"
        value={value}
      />
      <SafeAreaView>
        <ScrollView className="flex-1 flex-col w-full h-full bg-white">
          <Card containerStyle={{}} wrapperStyle={{}}>
            <View
              style={{
                position: "relative",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: "100%", height: 100 }}
                resizeMode="contain"
                source={{
                  uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4",
                }}
              />
              <View className="flex flex-row">
                <Text className="text-xl ">Pranshu Chittora</Text>
                <Text>Pranshu Chittora</Text>
              </View>
            </View>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
