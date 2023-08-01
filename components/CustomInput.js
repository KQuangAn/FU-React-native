import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";

export default function CustomInput({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}) {
  return (
    <View className="my-2 w-full">
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <Text className="text-black-400 w-full my-2">{placeholder}</Text>
            <View
              className={`
            w-full
            bg-white
            border
            border-gray-300/50
            rounded
            p-5
            mb-1
           ${error ? "border-red-600" : "border-gray-500"}`}
            >
              <TextInput
                className="h-5 w-full b-1 rounded-2xl"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={secureTextEntry}
              />
            </View>
            {error && (
              <Text className="text-red-300 align-stretch ">
                {error.message}{" "}
              </Text>
            )}
          </>
        )}
      />
    </View>
  );
}
