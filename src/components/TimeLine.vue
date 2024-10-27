<template>
  <v-divider> </v-divider>
  <v-timeline align="start">
    <v-timeline-item v-for="(year, i) in years" :key="i" :dot-color="year.color" size="small">
      <template v-slot:opposite>
        <div :class="`pt-1 headlineDate font-weight-bold `" v-text="year.year"></div>
      </template>
      <div>
        <h2 :class="`mt-n1 headlineText font-weight-light mb-4  `">
          {{ year.title }}
        </h2>
        <div>
          {{ year.text }}
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
<script setup>
const years = [
  {
    color: "#5B8FB9",
    year: "2021",
    title: "Wrote my first code",
    text: "Me and my friends decided to try programming. We made three in a row without any prior knowledge of programming",
  },
  {
    color: "#5B8FB9",
    year: "2021",
    title: "Took my first programming course at Coursera",
    text: "Took my first course on coding with HTML, CSS and JavaScript at Coursera. This is where i got hooked on programming.",
  },
  {
    color: "#5B8FB9",
    year: "2022",
    title: "Completed a coding bootcamp",
    text: "Completed a web development bootcamp. Here i learned a lot about programming and really enjoyed the experience.",
  },
  {
    color: "#5B8FB9",
    year: "2022",
    title: "Did some freelance web development",
    text: "Made a web page for a photograper and for a restaurant for a small amount of money and a big amount of work and learning experience",
  },
  {
    color: "#5B8FB9",
    year: "2022",
    title: "Started to study at University of California San-Diego",
    text: "Studied Front-end development with JavaScript and React. The teachers were really good and interactive and made a great learning experience",
  },
  {
    color: "#5B8FB9",
    year: "2023",
    title: "Finished my study at University of California San-Diego",
    text: "Finished my program at the University. Now i felt ready to start working as a developer. ",
  },
  {
    color: "#5B8FB9",
    year: "2023",
    title: "Got a job as Fullstack developer at Hjelseth Computers",
    text: "My dream came true, to work as a devloper. I feel very happy to be part of this great ever evolving thing",
  },
  {
    color: "#5B8FB9",
    year: "2024",
    title: "Got a job as Senior software engineer at Geological study of Norway",
    text: "Moved to a new city and got an exiting job at a wonderful company",
  },
];
</script>

<style>
.v-timeline--vertical.v-timeline .v-timeline-item:nth-child(2n) .v-timeline-item__body {
  text-align: end;
}

.headlineText {
  font-weight: 500;
}

.headlineDate {
  color: #1A237E;
}
</style>
