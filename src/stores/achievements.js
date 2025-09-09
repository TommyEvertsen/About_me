import { ref } from "vue";
export const hobbyUnlocked = ref(false);
export const animalUnlocked = ref(false);
export const secretButtonUnlocked = ref(false);
export const allAchievementsUnlocked = ref(false);
export const unlockSpacemode = ref(false);

export function checkAllAchievements() {
  if (
    hobbyUnlocked.value &&
    animalUnlocked.value &&
    secretButtonUnlocked.value
  ) {
    allAchievementsUnlocked.value = true;
  }
}

export function checkUnlockSpacemode() {
  if (allAchievementsUnlocked.value) {
    unlockSpacemode.value = true;
  }
}
