import { Stack } from "expo-router";
import "./globals.css";
import { SafeAreaView, StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <SafeAreaView className="flex-1 bg-primary">
        <StatusBar hidden={true} />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </>
  );
}
