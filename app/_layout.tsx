import { usePreloadImages } from "@/utils/preloadImages";
import { Stack } from "expo-router";

export default function RootLayout() {
  const imagesReady = usePreloadImages();

  if (!imagesReady) return null;

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}