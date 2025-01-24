import { StyleSheet } from 'react-native';
import colors from './colors';

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.obsidian,
    padding: 24,
  },
  titleText: {
    fontSize: 28,
    color: colors.pureWhite,
    fontWeight: '800',
    marginBottom: 24,
    letterSpacing: 0.8,
  },
  inputLabel: {
    fontSize: 16,
    color: colors.pureWhite,
    marginVertical: 8,
    opacity: 0.9,
  },
  card: {
    backgroundColor: colors.obsidian,
    borderRadius: 24,
    padding: 24,
    borderWidth: 2,
    borderColor: colors.steelBlue,
    shadowColor: colors.turquoise,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 10,
  },
  errorText: {
    color: colors.errorRed,
    fontSize: 14,
    marginTop: 8,
    fontWeight: '500',
  },
  colorDisplay: {
    height: 120,
    borderRadius: 16,
    marginVertical: 24,
    borderWidth: 2,
    borderColor: colors.lightGreen,
    transform: [{ perspective: 1000 }],
  },
  successText: {
    color: colors.successGreen,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  suggestionPill: {
    backgroundColor: colors.steelBlue,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    margin: 4,
  },
  collaborationBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: colors.lightGreen,
    padding: 8,
    borderRadius: 12,
  },
});

export default defaultStyles;