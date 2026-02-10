import { Audio } from "expo-av";

let sound: Audio.Sound | null = null;

export async function playClickSound() {
  try {
    if (!sound) {
      const result = await Audio.Sound.createAsync(
        require("../assets/sounds/Click7.wav"),
      );
      sound = result.sound;
    }

    await sound.replayAsync();
  } catch {
    const result = await Audio.Sound.createAsync(
      require("../assets/sounds/Click7.wav"),
    );
    sound = result.sound;
    await sound.playAsync();
  }
}
