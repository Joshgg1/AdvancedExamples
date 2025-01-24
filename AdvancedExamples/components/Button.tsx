// components/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  color?: string; // Optional prop for button color
}

const Button: React.FC<ButtonProps> = ({ title, onPress, color = colors.primary }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Button;
