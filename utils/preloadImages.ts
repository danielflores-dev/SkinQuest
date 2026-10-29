import { Asset } from "expo-asset";
import { useEffect, useState } from "react";


const images = [
  // title screen
  require("@/assets/background.png"),
  require("@/assets/background2.png"),
  require("@/assets/background3.png"),
  require("@/assets/title2.png"),
  require("@/assets/SQ2.png"),
  require("@/assets/SQ3.png"),
  require("@/assets/begin2.png"),
  require("@/assets/begin3.png"),
  require("@/assets/begin4.png"),
  require("@/assets/green.png"),
  require("@/assets/green2.png"),
  require("@/assets/green3.png"),
  // face model
  require("@/assets/face.png"),
  require("@/assets/happyface.png"),
  require("@/assets/conf1.png"),
  require("@/assets/conf2.png"),
  require("@/assets/conf3.png"),
];

export function usePreloadImages() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    Asset.loadAsync(images)
      .catch((e) => console.log("preload error:", e))
      .finally(() => setReady(true));
  }, []);

  return ready;
}