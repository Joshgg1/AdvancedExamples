import React, { useEffect, useRef } from 'react';
import { TextInput, StyleSheet, TextInputProps, Animated } from 'react-native';
import colors from '../styles/colors';

interface TextFieldProps extends TextInputProps {
  placeholder: string;
  error?: boolean;
  label?: string;
  glow?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({ 
  placeholder, 
  error = false,
  label,
  glow = false,
  ...otherProps 
}) => {
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (glow) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(glowAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }),
          Animated.timing(glowAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
          }),
        ])
      ).start();
    }
  }, [glow]);

  const glowInterpolation = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(69,240,223,0)', 'rgba(69,240,223,0.4)'],
  });

  return (
    <>
    import { Text } from 'react-native';
      <Animated.View style={glow && { shadowColor: glowInterpolation, shadowRadius: 20, shadowOpacity: 1 }}>
        <TextInput
          style={[
            styles.input, 
            error && styles.errorInput,
            glow && { borderColor: colors.turquoise }
          ]}
          placeholder={placeholder}
          placeholderTextColor={colors.yaleBlue}
          selectionColor={colors.turquoise}
          cursorColor={colors.turquoise}
          {...otherProps}
        />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: colors.lightGreen,
    borderRadius: 14,
    padding: 16,
    fontSize: 16,
    color: colors.pureWhite,
    backgroundColor: colors.obsidian,
    includeFontPadding: false,
  },
  errorInput: {
    borderColor: colors.errorRed,
  },
});

export default TextField;