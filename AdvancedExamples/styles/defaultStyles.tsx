// styles/defaultStyles.tsx
import { StyleSheet } from 'react-native';
import colors from './colors';

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  text: {
    fontSize: 16,
    color: colors.text,
    marginVertical: 8,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
});

export default defaultStyles;
