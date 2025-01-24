import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, Animated } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
  isLoading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  scale?: number;
}

const Button: React.FC<ButtonProps> = ({ 
  title, 
  onPress, 
  color = colors.turquoise, 
  isLoading = false,
  disabled = false,
  icon,
  scale = 1
}) => {
  const animatedValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: animatedValue }] }}>
      <TouchableOpacity
        style={[
          styles.button, 
          { 
            backgroundColor: disabled ? colors.lightGreen : color,
            opacity: disabled ? 0.6 : 1,
            transform: [{ scale }]
          },
        ]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        disabled={disabled || isLoading}
        activeOpacity={0.8}
      >
        {isLoading ? (
          <ActivityIndicator color={colors.lapisLazuli} size="small" />
        ) : (
          <>
            {icon && <>{icon}</>}
            <Text style={styles.buttonText}>{title}</Text>
          </>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginVertical: 12,
    minWidth: 140,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    color: colors.lapisLazuli,
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
});

export default Button;