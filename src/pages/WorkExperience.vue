<template>
  <main>
    <v-container class="mt-10 mb-10">
      <v-row>
        <v-col>
          <h1
            :style="{
              color: $vuetify.theme.current.colors.secondaryText,
            }"
          >
            Work experience
          </h1>
        </v-col>
      </v-row>

      <v-row v-for="jobExperience in jobExperiences">
        <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12" class="mt-10">
          <h2>{{ jobExperience.company }}</h2>
          <p class="text-lg">{{ jobExperience.role }}</p>
          <p>{{ jobExperience.date }}</p>
          <div class="mt-4">
            <p>{{ jobExperience.jobDescription }}</p>
          </div>
        </v-col>
        <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12"></v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
const jobExperiences = [
  {
    company: "Norges geologiske undersøkelse",
    about: "Surveying the geology of Norway",
    role: "Senior sofware engineer",
    jobDescription:
      "work as a full-stack developer, creating tailored solutions for researchers. My work enables them to efficiently collect and store data while conducting fieldwork in nature, and to manage, edit, and analyze their findings once back in the office.",
    date: "2024 - Current",
    technologies: [
      "Java",
      "Typescript",
      "PL/SQL",
      "Oracle Apex",
      "Javascript",
      "CSS",
    ],
  },
];
</script>

<style></style>
