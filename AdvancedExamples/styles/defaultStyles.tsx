import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.steelBlue,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: colors.pureWhite,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.turquoise,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: colors.lapisLazuli,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: colors.pureWhite,
    borderColor: colors.lightGreen,
    borderWidth: 2,
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
  },
  colorBox: {
    height: 100,
    borderRadius: 12,
    marginVertical: 20,
  },
  result: {
    color: colors.pureWhite,
    fontSize: 18,
    textAlign: 'center',
  },
});