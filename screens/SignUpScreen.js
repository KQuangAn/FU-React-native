import {
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
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

export default function SignUpScreen() {
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const { control, handleSubmit, watch } = useForm();
  const password = watch("password ");
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate("Login");
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
        .then((userCredential) => {
          // Registered
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
            photoURL: avatar
              ? avatar
              : "https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x",
          })
            .then(() => {
              alert("Registered, please login.");
            })
            .catch((error) => {
              alert(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("sign up failed at" + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 flex-col w-full h-full bg-white">
      <View className="m-5 my-12">
        <Text className="text-green-700 text-4xl w-full">Welcome</Text>
        <Text className="text-2xl text-black-400 w-full ">
          Sign up to continue!
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior="padding"
        className="flex flex-col items-start mx-5 "
      >
        <CustomInput
          name="username"
          placeholder="Username"
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
        <CustomInput
          name="password-repeat"
          placeholder="Repeat Password"
          secureTextEntry
          control={control}
          rules={{
            required: "Password repeat is required",
            validate: (value) => value === password || "Password do not match",
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
                  onPress={handleSubmit(signUp)}
                >
                  <Text className="text-white text-md">Sign Up</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                className="w-full mt-48 text-center items-center "
                onPress={() => onSignInPressed()}
              >
                <Text className="text-green-800 text-md ">
                  Already sign in ?
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
