import { ThemeProvider } from "./theme";
import { RootNavigation } from "./navigation";

export default function App() {
  return (
    <ThemeProvider>
    <RootNavigation />
    </ThemeProvider>
  );
}
