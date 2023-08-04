import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  Pressable,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import ImageViewer from "react-native-image-zoom-viewer";
import { Ionicons } from "@expo/vector-icons";

export default function DishDetail({ route, navigation }) {
  const { dish } = route.params;
  const [note, setNote] = React.useState("");
  const [showImage, setShowImage] = React.useState(false); // State to toggle the image viewer
  const [showFullDescription, setShowFullDescription] = React.useState(false); // State to toggle the full description
  const [quantity, setQuantity] = React.useState(0);

  const optionalAddon = dish?.optional;
  console.log(optionalAddon);
  const images = [{ url: dish.image }];

  // Function to toggle the image viewer
  const toggleImageViewer = () => {
    console.log("press");
    setShowImage(!showImage);
  };

  // Function to toggle the full description
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    quantity != 0 ? setQuantity(quantity - 1) : null;
  };

  return (
    <View className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Pressable className="bg-white ">
          <TouchableOpacity onPress={toggleImageViewer}>
            <Image className="w-full" source={dish.image} />
          </TouchableOpacity>
          <View className="shadow-lg w-full ">
            <View className="flex flex-row p-4 justify-between flex-wrap">
              <View className="flex flex-col w-3/4 flex-wrap whitespace-normal">
                <Text className="w-full text-lg font-bold">{dish.title}</Text>
                <Text className="text-md font-bold pt-2 ">
                  <Ionicons name="pricetag-outline" size={12} color="black" />
                  {dish?.promotion} 100 off
                </Text>
              </View>
              <View className="flex w-1/4 ">
                <Text className="text-base font-bold whitespace-nowrap">
                  {dish.price}
                </Text>
                <Text className="text-xs font-light">Base Price</Text>
              </View>
              <View className="w-full">
                {showFullDescription ? (
                  <TouchableOpacity onPress={toggleDescription}>
                    <Text className="text-md font-extralight pt-2 w-full bg-white">
                      {dish.description}
                    </Text>
                    <Text style={{ color: "blue" }}>See Less</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={toggleDescription}>
                    <Text
                      numberOfLines={2} // Display only 2 lines when truncated
                      ellipsizeMode="tail" // Show "..." at the end of truncated text
                      className="text-md font-extralight pt-2 w-full bg-white"
                    >
                      {dish.description}
                    </Text>
                    <Text
                      className="text-sm font-extralight pt-2 w-full bg-white"
                      style={{ color: "blue" }}
                    >
                      See More
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </Pressable>

        {/*//////////////// Note area ////////////////////*/}
        <View className="flex flex-row flex-wrap w-full items-center mt-2 p-4 bg-white">
          <Text className="text-xl font-bold ">Note to restaurant</Text>
          <Text className="text-sm font-light "> Optional </Text>
          <View className="w-full p-2 mt-5 border border-gray-400 border-y-gray-400 justify-center">
            <TextInput
              onChangeText={(text) => setNote(text)}
              placeholder="Add your request (subject to restaurant's discretion)"
            />
          </View>
          <View className="flex w-full flex-row text-center justify-center items-center p-5 mt-10">
            <TouchableWithoutFeedback onPress={decrementQuantity}>
              <View className="w-10 h-10 justify-center items-center text-green-400 border rounded">
                <Text>-</Text>
              </View>
            </TouchableWithoutFeedback>
            <View className="w-10 h-10 justify-center items-center mx-2">
              <Text className="text-xl">{quantity}</Text>
            </View>

            <TouchableWithoutFeedback onPress={incrementQuantity}>
              <View className="w-10 h-10 justify-center items-center text-green-400 border rounded">
                <Text>+</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>

        {/*//////////////// Optional addon area ////////////////////*/}
        <View className="flex flex-row flex-wrap w-full items-center mt-2 p-4 bg-white">
          <Text className="text-xl font-bold ">Optional</Text>
          <View className="w-full p-2 mt-5 border border-gray-400 border-y-gray-400 justify-center">
            {optionalAddon.map((item) => console.log(item))}
            {/* todo */}

            <TextInput
              onChangeText={(text) => setNote(text)}
              placeholder="Add your request (subject to restaurant's discretion)"
            />
          </View>
        </View>
        {/*//////////////// Add to cart absolute button ////////////////////*/}
        <View className="absolute bottom-0 w-full justify-center items-center p-5 bg-white">
          <Text>you will save after discount</Text>
          {quantity == 0 ? (
            <TouchableOpacity
              className="flex flex-row p-1 justify-center w-full rounded bg-green-500 text-center items-center"
              onPress={() => console.log("go to menu")}
            >
              <Text className="text-white text-xl ">Back to menu</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="flex flex-row  p-1 justify-center w-full bg-green-500 rounded text-center items-center"
              onPress={() => console.log("add to baseket!")}
            >
              <Text className="text-white text-xl ">Add to basket -</Text>
              <Text className="ml-2 text-white text-xl ">
                {dish.price * quantity}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
      {showImage && (
        <ImageViewer
          imageUrls={images}
          onClick={toggleImageViewer} // Close the image viewer when clicked
          enableSwipeDown // Enable swipe down to close
          onSwipeDown={toggleImageViewer} // Close the image viewer when swiped down
        />
      )}
    </View>
  );
}
