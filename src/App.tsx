import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "./theme";
import { Box } from "./components/base/box";
import { Text } from "./components/base/text";

export default function App() {
  return (
    <ThemeProvider>
    <Box style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </Box>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
