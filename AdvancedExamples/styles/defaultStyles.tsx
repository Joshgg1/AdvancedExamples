import { StyleSheet } from "react-native";
import colors from "./colors";

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    color: colors.primary,
  },
  button: {
    padding: 16,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  colorBox: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  result: {
    fontSize: 18,
    marginTop: 10,
    color: colors.primary,
  },
});

export default defaultStyles;
