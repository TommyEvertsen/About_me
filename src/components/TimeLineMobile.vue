<template>
  <div class="d-flex justify-space-around">
    <v-timeline truncate-line="start">
      <v-timeline-item v-for="item in years" dot-color="secondaryText">
        <template v-slot:opposite>
          {{ item.year }}
        </template>
        <span class="gradient-text" :class="{ spacemode: spacemode }">
          {{ item.title }}
        </span>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup>
import { spacemode } from "@/stores/spacemode";
const years = [
  {
    year: "2021",
    title: "Wrote my first code",
  },
  {
    year: "2021",
    title: "Took my first programming course at Coursera",
  },
  {
    year: "2022",
    title: "Completed a coding bootcamp",
  },
  {
    year: "2022",
    title: "Did some freelance web development",
  },
  {
    year: "2022",
    title: "Started to study at University of California San-Diego",
  },
  {
    year: "2023",
    title: "Finished my study at University of California San-Diego",
  },
  {
    year: "2023",
    title: "Got a job as Fullstack developer at Hjelseth Computers",
  },
  {
    year: "2024",
    title:
      "Got a job as Senior software engineer at Geological survey of Norway",
  },
];
</script>

<style></style>
