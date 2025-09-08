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
            class="mx-auto"
            :title="achivement.title"
            style="text-align: center"
            height="200"
            :elevation="achivement.unlocked.value ? 12 : 6"
            :style="{
              backgroundColor: $vuetify.theme.current.colors.cardBackground,
              color: $vuetify.theme.current.colors.mainText,
            }"
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
            class="mx-auto flex justify-center"
            title="Unlock all achivements for a price"
            style="text-align: center"
            height="200"
            :elevation="allAchievementsUnlocked ? 12 : 6"
            max-width="600"
            :style="{
              backgroundColor: $vuetify.theme.current.colors.cardBackground,
              color: $vuetify.theme.current.colors.mainText,
            }"
          >
            <div class="iconDiv">
              <v-icon
                icon="mdi-treasure-chest"
                class="icon"
                :color="allAchievementsUnlocked ? '#FFD700' : '#989898'"
                size="40"
              ></v-icon>
            </div>

            <v-card-text style="text-align: center">
              {{
                allAchievementsUnlocked
                  ? "Congratulations!"
                  : "Can you find them all?"
              }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import {
  hobbyUnlocked,
  animalUnlocked,
  allAchievementsUnlocked,
} from "@/stores/achievements";
import { checkAllAchievements } from "@/stores/achievements";

checkAllAchievements();

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
    icon: "mdi-trophy",
    description: "The little duck got found",
    hint: "Hint: Duck",
    unlocked: animalUnlocked,
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
</style>
