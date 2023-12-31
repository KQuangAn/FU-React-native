import React, { Children } from "react";
import { View } from "react-native";

export default function CustomViewContainer({ children, mode }) {
  return (
    <View
      className={`w-full mt-4 
                      ${mode == "light" ? "bg-white" : "bg-slate-900"} `}
    >
      {children}
    </View>
  );
}
