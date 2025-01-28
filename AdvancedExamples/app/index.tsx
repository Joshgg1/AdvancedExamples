import React, { useState } from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, StyleSheet } from "react-native";
import Button from "../components/Button";
import TextField from "../components/TextField";
import defaultStyles from "../styles/defaultStyles";
import colors from "../styles/colors";

const isValidColor = (color: string) => {
  const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;

  // Check if it's a valid hex code or a valid named color
  if (hexRegex.test(color)) return true;

  // Use StyleSheet API to validate named colors
  try {
    StyleSheet.create({ test: { color } });
    return true;
  } catch (e) {
    return false;
  }
};

export default function App() {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [validColor, setValidColor] = useState(false);

  const handlePreview = () => {
    if (isValidColor(input)) {
      setValidColor(true);
    } else {
      setValidColor(false);
    }
    setSubmitted(true);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding" // Adjusts for the keyboard
    >
      <ScrollView contentContainerStyle={defaultStyles.container}>
        <Text style={defaultStyles.title}>Color Explorer</Text>
        <TextField
          placeholder="Insert hex code here or color name"
          value={input}
          onChangeText={(text) => {
            setInput(text);
            setSubmitted(false); // Reset preview if input changes
          }}
        />
        <Button title="Preview" onPress={handlePreview} disabled={!input.trim()} />
        {submitted && (
          <>
            {validColor ? (
              <>
                <View
                  style={[
                    defaultStyles.colorBox,
                    { backgroundColor: input.toLowerCase() },
                  ]}
                />
                <Text style={defaultStyles.result}>Color: {input}</Text>
              </>
            ) : (
              <Text style={defaultStyles.result}>Invalid input</Text>
            )}
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
