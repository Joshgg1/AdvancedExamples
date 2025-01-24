import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import TextField from '../components/TextField';
import defaultStyles from '../styles/defaultStyles';
import colors from '../styles/colors';



const colorSuggestions: { [key: string]: string[] } = {
  red: ['#FF0000', '#FF6B6B', '#FF3B3B'],
  blue: ['#0000FF', '#3A84C5', '#45F0DF'],
  green: ['#00FF00', '#9EE493', '#4CAF50'],
};

const isValidColor = (color: string) => {
  const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
  const rgbRegex = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i;
  return hexRegex.test(color) || rgbRegex.test(color) || Object.keys(colorSuggestions).includes(color.toLowerCase());
};

const getSuggestions = (baseColor: string) => {
  const normalizedColor = baseColor.toLowerCase();
  return colorSuggestions[normalizedColor] || [];
};

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [collaborators, setCollaborators] = useState(1);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 15000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const handleSubmit = () => {
    if (!isValidColor(inputValue)) {
      setError('Invalid color - Enter hex, RGB, or basic color name');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
      setSuggestions(getSuggestions(inputValue));
      setCollaborators(c => c + 1);
    }, 1200);
  };

  const rotateInterpolation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={defaultStyles.container}>
      <Animated.View 
        style={[
          defaultStyles.card,
          { transform: [{ rotate: rotateInterpolation }] }
        ]}
      >
        <View style={defaultStyles.collaborationBadge}>
          <Text style={{ color: colors.obsidian, fontWeight: '700' }}>
            👥 {collaborators}
          </Text>
        </View>

        <Text style={defaultStyles.titleText}>Cosmic Color Lab</Text>

        <TextField
          label="Enter Color (hex/rgb/name):"
          placeholder="#FFFFFF, rgb(255,255,255), or 'blue'"
          value={inputValue}
          onChangeText={(text) => {
            setInputValue(text);
            setError('');
          }}
          error={!!error}
          glow={!!inputValue}
        />

        {error ? (
          <Text style={defaultStyles.errorText}>{error}</Text>
        ) : (
          <Text style={[defaultStyles.inputLabel, { marginTop: 8 }]}>
            {suggestions.length ? 'Suggested palette:' : ' '}
          </Text>
        )}

        

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 12 }}>
          {suggestions.map((color) => (
            <TouchableOpacity
              key={color}
              style={[defaultStyles.suggestionPill, { backgroundColor: color }]}
              onPress={() => setInputValue(color)}
            >
              <Text style={{ color: colors.pureWhite, fontWeight: '600' }}>
                {color}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Button
          title={isLoading ? 'Analyzing...' : 'Preview Cosmic Color'}
          onPress={handleSubmit}
          isLoading={isLoading}
          disabled={!inputValue.trim()}
          color={colors.lightGreen}
          scale={0.95}
          icon={<>🎨</>}
        />

        {submitted && (
          <>
            <Animated.View 
              style={[
                defaultStyles.colorDisplay,
                { 
                  backgroundColor: inputValue.toLowerCase(),
                  shadowColor: inputValue,
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.4,
                  shadowRadius: 16,
                }
              ]}
            />
            <Text style={defaultStyles.successText}>
              🌟 Color Synced Across {collaborators} Devices
            </Text>
          </>
        )}
      </Animated.View>
    </View>
  );
}