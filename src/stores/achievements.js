import { ref } from "vue";
export const hobbyUnlocked = ref(false);
export const animalUnlocked = ref(false);
export const allAchievementsUnlocked = ref(false);

export function checkAllAchievements() {
  if (hobbyUnlocked.value === true && animalUnlocked.value === true) {
    allAchievementsUnlocked.value = true;
  }
}
