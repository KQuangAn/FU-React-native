import {
  ActivityIndicator,
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { AntDesign } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import CustomInput from "../components/CustomInput";
import { useNavigation } from "@react-navigation/native";
const EMAIL_REGEX = "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i";

export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onSignUpPressed = () => {
    console.log("change screen");
    navigation.navigate("SignUp");
  };

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("sign in failed at" + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FlatList className="flex-1 flex-col w-full h-full bg-white">
      <View className="m-5 my-12 w-full">
        <Text className="text-green-700 text-4xl">Welcome</Text>
        <Text className="text-2xl text-black-400 ">Sign in to continue!</Text>
      </View>

      <KeyboardAvoidingView
        behavior="padding"
        className="flex flex-col items-start mx-5 "
      >
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: EMAIL_REGEX,
          }}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters",
            },
            maxLength: {
              value: 24,
              message: "Password should be no more than 24 characters",
            },
          }}
        />
        {loading ? (
          <ActivityIndicator size="large" color="fffff" />
        ) : (
          <>
            <View className="flex flex-col w-full text-center items-center justify-between mt-6">
              <View className="space-y-4 w-full">
                <TouchableOpacity
                  className="w-full p-4 items-center rounded-xl bg-green-600 "
                  onPress={handleSubmit(signIn)}
                >
                  <Text className="text-white text-md">LOG IN</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-full text-center items-center ">
                  <Text className="text-green-800 text-md">
                    Forgot Password
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-full items-center rounded bg-white">
                  <Text className="text-green-800 text-md">
                    Login with google
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="flex-row w-full self-center items-center">
                <Text>I am a new user,</Text>
                <TouchableOpacity onPress={() => onSignUpPressed()}>
                  <Text className="text-green-800 text-md ">sign me up!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </KeyboardAvoidingView>
      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <Text className="text-green-800 text-md ">Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Restaurant")}>
        <Text className="text-green-800 text-md ">Restaurant</Text>
      </TouchableOpacity>
    </FlatList>
  );
}
