import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import colors from '../styles/colors';
import defaultStyles from '../styles/defaultStyles';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={defaultStyles.button} onPress={onPress}>
      <Text style={defaultStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}