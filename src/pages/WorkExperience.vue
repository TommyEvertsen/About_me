<template>
  <main>
    <v-container class="px-10 mt-10 mb-10">
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

      <v-row
        class="job"
        v-for="jobExperience in jobExperiences"
        :key="jobExperience.company"
      >
        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="mt-10">
          <h2>{{ jobExperience.company }}</h2>
          <p class="jobRole">{{ jobExperience.role }}</p>
          <p>{{ jobExperience.date }}</p>

          <div class="technologySection mt-4">
            <p class="sectionHeadline">Technologies used:</p>
            <div class="technologyChipSection mt-2">
              <v-chip
                v-for="technology in jobExperience.technologies"
                :key="technology.name"
                class=""
                :color="technology.color"
                variant="elevated"
                >{{ technology.name }}</v-chip
              >
            </div>
          </div>

          <div class="summarySection mt-4">
            <p class="sectionHeadline">Summary:</p>
            <p class="mt-2">{{ jobExperience.jobDescription }}</p>
          </div>
        </v-col>

        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="mt-10">
          <div class="secondColumn">
            <div class="projectsSection mt-4">
              <p class="sectionHeadline">Notable projects:</p>
              <div
                class="projects mt-2"
                v-for="project in jobExperience.projects"
              >
                <p class="projectHeadline">{{ project.title }}</p>
                <p>{{ project.description }}</p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
const jobExperiences = [
  {
    company: "Norges geologiske undersøkelse (NGU)",
    about: "Surveying the geology of Norway",
    role: "Senior software engineer",
    jobDescription:
      "Through my work at NGU i have worked mainly on modernisation of the databases and creating apps for researchers. My work enables them to efficiently collect and store data while conducting fieldwork in nature, and to manage, edit, and analyze their findings once back in the office. I have collaborated with researchers in diffrent fields on making apps that suits their needs. I have also together with the design department found a common design for the new apps according to the company profile. ",
    date: "2024 - Current",
    technologies: [
      {
        name: "Java",
        color: "yellow",
      },
      {
        name: "Typescript",
        color: "blue-darken-1",
      },
      {
        name: "PL/SQL",
      },
      {
        name: "Oracle Apex",
        color: "deep-orange-darken-2",
      },
      {
        name: "Javascript",
        color: "yellow-accent-3",
      },
      {
        name: "CSS",
        color: "light-blue-darken-4",
      },
    ],
    projects: [
      {
        title: "Modernaisation of the existing databases",
        description:
          "I have been working on a modernisation project of the databases. Creating new schemas, splitting big tables into smaller tables, removed unused tables and columns and connect the child tables in the new structure",
      },
      {
        title: "Gravel and crushed stone applications",
        description:
          "I made two applications for researchers about gravel and crushed stone desposits. It enables them to store locations, view them on a map and save various data related to their findings during field work",
      },
      {
        title: "Natural heritage application",
        description:
          "An application i made for researchers who study ancient geology that have value either for tourism or research. The application stores the location and enables them to store data related to the location",
      },
      {
        title: "Litterature application",
        description:
          "Before the days of databases the researchers wrote down their findings on paper and stored it in the library. This application enables them to upload the text and store them to a databse where they can add related data to the documents",
      },
    ],
  },
];
</script>

<style>
.jobRole {
  font-size: 1.2rem;
  font-weight: bold;
}

.technologyChipSection {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: flex-start;
}

.technologySection .v-chip {
  margin: 4px 0;
  flex-shrink: 0;
}

.sectionHeadline {
  font-weight: bold;
  font-size: 1.1rem;
}

.projectHeadline {
  font-weight: bold;
  font-size: 1rem;
}

.job {
  padding-bottom: 1rem;
}

.job:hover {
  border-bottom: 1px dotted;
}

@media (max-width: 600px) {
  .technologySection {
    gap: 4px;
  }

  .technologySection .v-chip {
    font-size: 0.75rem;
    height: 28px;
  }
}
</style>
