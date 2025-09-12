<template>
  <main>
    <v-container class="mt-10 mb-10">
      <h1
        style="text-align: center"
        :style="{
          color: $vuetify.theme.current.colors.secondaryText,
        }"
      >
        Achievements
      </h1>

      <v-row class="mt-5 flex" justify="center">
        <v-col
          v-for="achivement in achievements"
          :key="achivement.title"
          cols="12"
          md="6"
          xl="4"
          lg="4"
          class="flex"
        >
          <v-card
            class="mx-auto achievementCard"
            :title="achivement.title"
            style="text-align: center"
            height="200"
            :elevation="achivement.unlocked.value ? 12 : 6"
            :style="{
              backgroundColor: $vuetify.theme.current.colors.cardBackground,
              color: $vuetify.theme.current.colors.mainText,
            }"
            :class="{ spacemode: spacemode }"
          >
            <div class="iconDiv">
              <v-icon
                :icon="achivement.icon"
                class="icon"
                :color="achivement.unlocked.value ? '#FFD700' : '#989898'"
                size="40"
              ></v-icon>
            </div>
            <v-card-text style="text-align: center">
              {{
                achivement.unlocked.value
                  ? achivement.description
                  : achivement.hint
              }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-16">
        <v-col cols="12" xl="12" lg="12" md="12" sm="12">
          <v-card
            class="mx-auto flex justify-center allAchievementsCard"
            title="Unlock all achivements for a price"
            style="text-align: center"
            height="200"
            :elevation="allAchievementsUnlocked ? 12 : 6"
            max-width="600"
            :style="{
              backgroundColor: $vuetify.theme.current.colors.cardBackground,
              color: $vuetify.theme.current.colors.mainText,
            }"
            :class="{ spacemode: spacemode }"
          >
            <div class="iconDiv">
              <v-icon
                icon="mdi-treasure-chest"
                class="icon"
                :color="allAchievementsUnlocked ? '#FFD700' : '#989898'"
                :disabled="!allAchievementsUnlocked"
                :style="{
                  cursor: allAchievementsUnlocked ? 'pointer' : 'not-allowed',
                }"
                @click="allAchievementsUnlocked && handleTreasureChestClick()"
                size="40"
              ></v-icon>
            </div>

            <v-card-text style="text-align: center">
              {{
                allAchievementsUnlocked
                  ? "Congratulations! Click to open your reward"
                  : "Can you find them all?"
              }}
            </v-card-text>
          </v-card>
        </v-col>
        <div v-if="unlockSpacemode && alert" class="centered-alert">
          <v-alert
            class="alert"
            v-model="alert"
            close-label="Lukk"
            color="success"
            icon="mdi-trophy"
            title="Spacemode unlocked "
            variant="elevated"
            closable
            >Press the switch in the upper right corner to see magic
          </v-alert>
        </div>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import {
  hobbyUnlocked,
  animalUnlocked,
  secretButtonUnlocked,
  allAchievementsUnlocked,
  checkUnlockSpacemode,
  unlockSpacemode,
} from "@/stores/achievements";
import { ref } from "vue";
import { checkAllAchievements } from "@/stores/achievements";
import { spacemode } from "@/stores/spacemode";

checkAllAchievements();

const alert = ref(false);

function handleTreasureChestClick() {
  checkUnlockSpacemode();
  if (unlockSpacemode.value) {
    alert.value = true;
  }
}

const achievements = [
  {
    title: "Find my secret hobby",
    icon: "mdi-trophy",
    description: "You found it! I enjoy drinking beer",
    hint: "Hint: Tooltip",
    unlocked: hobbyUnlocked,
  },
  {
    title: "A little animal is hiding in plain sight",
    icon: "mdi-trophy-award",
    description: "The little duck got found",
    hint: "Hint: Duck",
    unlocked: animalUnlocked,
  },
  {
    title: "Find the secret button",
    icon: "mdi-trophy-variant",
    description: "Congratulations on finding the secret button!",
    hint: "Hint: Hover in thin air",
    unlocked: secretButtonUnlocked,
  },
];
</script>

<style>
.achievementsHeadline {
  text-align: center;
}
.iconDiv {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.allAchievementsCard {
  position: relative;
}

.allAchievementsCard.spacemode {
  color: white !important;
}

.allAchievementsCard.spacemode::before,
.allAchievementsCard.spacemode::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: conic-gradient(
    from var(--deg) at center,
    #ffd700,
    #a2682a,
    #a2682a,
    #ffd700
  );
  z-index: -2;
  filter: blur(15px);
  animation: autoRotate 5s linear infinite;
  pointer-events: none;
}

.achievementCard.spacemode {
  color: white !important;
}

.achievementCard.spacemode::before,
.achievementCard.spacemode::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: conic-gradient(
    from var(--deg) at center,
    #00c3ff,
    #4d0199,
    #6300c6,
    #00c3ff
  );
  z-index: -2;
  filter: blur(15px);
  animation: autoRotate 5s linear infinite;
  pointer-events: none;
}

@property --deg {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0deg;
}

@keyframes autoRotate {
  to {
    --deg: 360deg;
  }
}
</style>
