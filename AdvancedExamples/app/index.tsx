import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';
import TextField from '../components/TextField';
import defaultStyles from '../styles/defaultStyles';
import colors from '../styles/colors';

const isValidColor = (color: string) => {
  const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
  return hexRegex.test(color) || Object.keys(colors).includes(color.toLowerCase());
};

export default function App() {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.title}>ColorSnap</Text>
      <TextField
        placeholder="Try 'blue' or #45F0DF"
        value={input}
        onChangeText={setInput}
      />
      <Button
        title="Preview"
        onPress={() => setSubmitted(true)}
      />
      {submitted && (
        <>
          <View style={[defaultStyles.colorBox, { backgroundColor: input }]} />
          <Text style={defaultStyles.result}>
            {isValidColor(input) ? input : 'Invalid color!'}
          </Text>
        </>
      )}
    </View>
  );
}