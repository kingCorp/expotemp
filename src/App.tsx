import { ThemeProvider } from "./theme";
import { RootNavigation } from "./navigation";
import { ErrorBoundary } from "./components/error-boundary";
import { ToastRoot } from "./components/toast";
import { ApiProvider } from "./services/api/api-provider";
import { GestureRoot, StatusBar } from "./components/base";
import { SheetProvider } from "./components/sheet/sheet-provider";

export default function App() {
  return (
    <ErrorBoundary>
    <GestureRoot>
      <ApiProvider>
        <ThemeProvider>
          <SheetProvider>
            <RootNavigation />
            <ToastRoot />
            <StatusBar />
          </SheetProvider>
        </ThemeProvider>
      </ApiProvider>
    </GestureRoot>
  </ErrorBoundary>
  );
}
