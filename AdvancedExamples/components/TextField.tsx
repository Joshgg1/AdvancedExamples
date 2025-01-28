import React from "react";
import { TextInput, KeyboardAvoidingView, StyleSheet } from "react-native";
import defaultStyles from "../styles/defaultStyles";
import colors from "../styles/colors";

interface TextFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function TextField({ placeholder, value, onChangeText }: TextFieldProps) {
  return (
    <KeyboardAvoidingView style={styles.keyboardContainer}>
      <TextInput
        style={defaultStyles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.secondary}
        value={value}
        onChangeText={onChangeText}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    width: "100%",
    alignItems: "center",
  },
});
