import {
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
  View,
  Text,
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
    <View className="flex-1 flex-col w-full h-full bg-white">
      <View className="m-5 my-16">
        <Text className="text-green-700 text-4xl w-full">Welcome</Text>
        <Text className="text-2xl text-black-400 w-full ">
          Sign in to continue!
        </Text>
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
            <Button
              className="w-3/4 m-5 text-green-500 "
              onPress={handleSubmit(signIn)}
              title="Sign in"
            />

            <Button
              className="m-5 text-green-500"
              onPress={onSignUpPressed()}
              title="Sign up"
              color="#ff5c5c"
            />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
}
