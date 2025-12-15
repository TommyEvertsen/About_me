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

          <div v-if="jobExperience.technologies" class="technologySection mt-4">
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

          <div v-if="jobExperience.softSkills" class="technologySection mt-4">
            <p class="sectionHeadline">Soft skills:</p>
            <div class="technologyChipSection mt-2">
              <v-chip
                v-for="softSkill in jobExperience.softSkills"
                :key="softSkill.name"
                class=""
                :color="softSkill.color"
                variant="elevated"
                >{{ softSkill.name }}</v-chip
              >
            </div>
          </div>

          <div class="summarySection mt-4">
            <p class="sectionHeadline">Summary:</p>
            <p>{{ jobExperience.jobDescription }}</p>
          </div>

          <div class="thoughtsSection mt-4">
            <p class="sectionHeadline">Thoughts:</p>
            <p>{{ jobExperience.thoughts }}</p>
          </div>
        </v-col>

        <v-col
          cols="12"
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
          class="mt-10 projectColumn"
        >
          <div v-if="jobExperience.projects" class="secondColumn">
            <div class="projectsSection mt-4">
              <p class="sectionHeadline">Notable projects:</p>
              <div
                class="projects mt-4"
                v-for="project in jobExperience.projects"
              >
                <p class="projectHeadline">{{ project.title }}</p>
                <p>{{ project.description }}</p>
              </div>
            </div>
          </div>
        </v-col>

        <v-divider
          :thickness="2"
          class="mt-12 divider"
          color="secondaryText"
        ></v-divider>
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
      "At NGU, my primary focus has been on modernizing our databases and developing applications tailored for researchers. These tools enable them to efficiently collect and store data during fieldwork, and later manage, edit, and analyze their findings back in the office. I’ve collaborated closely with researchers across various disciplines to create apps that meet their specific needs. Additionally, I’ve worked together with the design department to establish a unified design for the new applications, ensuring they align with NGU’s visual identity and company profile.",
    thoughts:
      "Working at NGU has truly been an incredible experience. When I first moved to Trondheim, I didn’t know anyone, but through NGU I’ve gained not only amazing colleagues but also lifelong friends. Everyone has been so welcoming, kind, and trusting. The collaboration and support I’ve experienced here are something I will never forget.",
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
          "I’ve been working on a database modernization project, which involved designing new schemas, breaking down large tables into smaller, more manageable ones, removing unused tables and columns, and establishing relationships between child tables within the new structure.",
      },
      {
        title: "Gravel and crushed stone applications",
        description:
          "I made two applications for researchers about gravel and crushed stone desposits. It enables them to store locations, view them on a map and save various data related to their findings during field work",
      },
      {
        title: "Geological heritage application",
        description:
          "An application i made for researchers who study ancient geology that have value either for tourism or research purposes. The application stores the location and enables them to store data related to the location",
      },
      {
        title: "Litterature application",
        description:
          "Before databases were introduced, researchers recorded their findings on paper and stored them in the library. This application now allows them to upload these texts into a database, where they can enrich the documents by adding related data and metadata, making the information easier to manage, search, and analyze.",
      },
    ],
  },
  {
    company: "Hjelseth",
    about: "",
    role: "Fullstack developer",
    jobDescription:
      "At Hjelseth, my role focused on developing websites for existing clients while also attracting new customers by showcasing our capabilities. I worked on both internal projects—such as creating a portal for Hjelseth employees—and external projects for clients. During my time there, I built custom systems and websites tailored to client needs, led two major projects, and collaborated on numerous ongoing initiatives. These experiences taught me a great deal and were both challenging and rewarding.",
    thoughts:
      "When I decided to change my career and pursue my dream of becoming a developer, Hjelseth placed their trust in me and offered me a position as a full-stack developer. During my time there, I had a great deal of fun, learned immensely, and built strong friendships with my colleagues. I’m truly grateful to Hjelseth for giving me the opportunity to turn my dream into reality.",
    date: "2023 - 2024",
    technologies: [
      {
        name: "Laravel",
        color: "deep-orange-darken-2",
      },
      {
        name: "Vue.Js",
        color: "green-darken-2",
      },
      {
        name: "SQL",
      },

      {
        name: "PHP",
        color: "purple",
      },
      {
        name: "Javascript",
        color: "yellow-accent-3",
      },
      {
        name: "CSS",
        color: "light-blue-darken-4",
      },
      {
        name: "Tailwind",
        color: "light-blue-accent-1",
      },
    ],
    projects: [
      {
        title: "Hjelseth portal",
        description:
          "I collaborated on the Hjelseth Portal project, which was a large and exciting initiative. The portal serves as a comprehensive system for Hjelseth employees, supporting a wide range of tasks. It includes a ticketing system, customer management tools, and functionality for tracking all the websites we host for clients. Being part of this project was a rewarding experience, and the end result is a robust, user-friendly system that truly adds value to the organization.",
      },
      {
        title: "Rogaland maskinering",
        description:
          "I led a project for Rogaland Maskinering to develop an inventory management system that gave them full control over their items. The system provided a visual overview of the storage stands, allowing users to easily locate items and perform key actions such as adding, editing, and searching. This solution streamlined their inventory processes and improved efficiency by ensuring accurate tracking and management of all assets.",
      },
      {
        title: "Styling habitats",
        description:
          "I also led a project for Styling Habitats, a company specializing in styling apartments before they go on the market. We developed a system that enables their team to quickly capture customer preferences for styling options and generate pricing in real time during consultations. This streamlined process improved customer interactions and made it easier to provide tailored styling solutions on the spot.",
      },
    ],
  },
  {
    company: "Ventistål",
    about: "",
    role: "Sales / project lead",
    jobDescription:
      "At Ventistål, I held several different positions, starting as a warehouse worker before being promoted to Warehouse Leader. In this role, I managed a team of employees, oversaw day-to-day operations, and handled international equipment procurement. Later, I transitioned into sales and project management, where I led multiple large-scale delivery projects — including the new hospital in Stavanger. These experiences gave me strong leadership skills, logistical expertise, and the ability to manage complex projects from start to finish.",
    thoughts:
      "I began my career at Ventistål as a young adult and eventually decided to pursue a new path after discovering my passion for programming. During my years at Ventistål, I built lifelong friendships and created many great memories. I am deeply grateful to the company for recognizing my potential and giving me the opportunity to grow — from warehouse worker to warehouse leader and later into sales. Ventistål has been a significant part of my life, and I will always appreciate the experiences we shared and the opportunities they provided.",
    date: "2006 - 2022",
    softSkills: [
      {
        name: "Leadership",
        color: "yellow",
      },
      {
        name: "Project management",
        color: "orange",
      },
      {
        name: "Customer service",
        color: "teal",
      },
      {
        name: "Teamwork",
        color: "lime",
      },
      {
        name: "Time managment",
        color: "pink",
      },
    ],

    projects: [
      {
        title: "New Stavanger hospital",
        description:
          "I managed the day-to-day delivery operations for a major project supplying equipment to the new hospital. My responsibilities included procuring the necessary equipment, coordinating transportation, liaising with customers, and ensuring all deliveries were completed accurately and within the designated time slots.",
      },
      {
        title: "Lervigskvartalet",
        description:
          "Managed a major delivery project, handling all aspects from equipment procurement and supplier coordination to scheduling, logistics, and final delivery. Oversaw communication between vendors and internal teams, ensured compliance with technical requirements, and provided customer support throughout the process to guarantee smooth execution.",
      },
      {
        title: "Ventistål Stavanger expansion",
        description:
          "As Ventisål Stavanger expanded during my tenure, we relocated to a larger facility. In my role as Warehouse Manager, I was responsible for planning and setting up the new warehouse layout. This included ordering and installing storage racks, organizing inventory placement for optimal accessibility, and ensuring that high-demand items were positioned for quick and efficient retrieval.",
      },
      {
        title: "Supporting warehouse organization across departments",
        description:
          "Traveled to Ventistål Ålesund to assist with reorganizing their warehouse operations for improved efficiency. Responsibilities included analyzing their existing layout, implementing a structured system for inventory placement, and introducing best practices to streamline workflows and enhance accessibility",
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

.divider {
  transition: opacity 0.8s ease;
}

.job:hover .divider {
  opacity: 1;
}

@media (max-width: 600px) {
  .technologySection {
    gap: 4px;
  }

  .technologySection .v-chip {
    height: 28px;
  }

  .projectColumn {
    margin-top: 0 !important;
  }
}
</style>
