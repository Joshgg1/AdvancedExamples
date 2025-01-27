import React from 'react';
import { TextInput } from 'react-native';
import defaultStyles from '../styles/defaultStyles';

interface TextFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function TextField({ placeholder, value, onChangeText }: TextFieldProps) {
  return (
    <TextInput
      style={defaultStyles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
}