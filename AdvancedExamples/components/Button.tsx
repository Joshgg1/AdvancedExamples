import React from "react";
import { TouchableOpacity, Text } from "react-native";
import defaultStyles from "../styles/defaultStyles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function Button({ title, onPress, disabled = false }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[defaultStyles.button, disabled && { opacity: 0.6 }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={defaultStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
