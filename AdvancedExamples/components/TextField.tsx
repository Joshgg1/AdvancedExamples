// components/TextField.tsx
import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import colors from '../styles/colors';

interface TextFieldProps extends TextInputProps {
  placeholder: string;
}

const TextField: React.FC<TextFieldProps> = ({ placeholder, ...otherProps }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={colors.secondary}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
});

export default TextField;
