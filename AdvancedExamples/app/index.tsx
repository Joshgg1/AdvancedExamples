// App.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import TextField from '../components/TextField';
import defaultStyles from '../styles/defaultStyles';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.text}>Enter your favorite color:</Text>
      <TextField
        placeholder="Type here..."
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button
        title="Submit"
        onPress={() => setSubmitted(true)}
        color="#28A745"
      />
      {submitted && (
        <Text style={[defaultStyles.text, styles.result]}>
          Your favorite color is: {inputValue}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  result: {
    fontWeight: 'bold',
    marginTop: 20,
  },
});
