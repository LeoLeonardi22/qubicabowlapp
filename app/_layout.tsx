import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { Provider } from "components/Provider";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }

  // UN SOLO Provider che contiene tutto
  return (
    <Provider>
      <StatusBar />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{
            title: "Settings",
            presentation: "modal",
            animation: "slide_from_right",
            gestureEnabled: true,
            gestureDirection: "horizontal",
          }}
        />
      </Stack>
    </Provider>
  );
}