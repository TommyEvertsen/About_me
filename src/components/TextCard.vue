<template>
  <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
    elevation="4"
    height="250"
    max-width="800"
    width="100%"
    rounded
  >
    <div>
      <h2 class="text-h4 font-weight-black text-orange">Tommy Evertsen</h2>

      <div class="text-h5 font-weight-medium mb-2">Fullstack developer</div>

      <p class="text-body-2 mb-4">
        <v-chip-group>
          <v-chip
            v-for="skill in skills"
            :style="{ backgroundColor: skill.color }"
            color="white"
            >{{ skill.title }}
          </v-chip>
        </v-chip-group>
      </p>

      <v-btn color="orange" variant="text">Go to Login</v-btn>
    </div>
  </v-sheet>
</template>

<script setup>
const skills = [
  {
    title: "HTML",
    color: "#f1672b",
  },
  {
    title: "CSS",
    color: "#214ce5",
  },
  {
    title: "JavaScript",
    color: "#f7df1e",
  },
  {
    title: "React.Js",
    color: "#61dafb",
  },
  {
    title: "C#",
    color: "#9f73d9",
  },
  {
    title: "Azure",
    color: "#008ad7",
  },
  {
    title: "Vue.Js",
    color: "green",
  },
  {
    title: "Laravel",
    color: "red",
  },
];
</script>
