<template>
  <main>
    <v-container class="mt-10 mb-10">
      <h1
        style="text-align: center"
        :style="{
          color: $vuetify.theme.current.colors.secondaryText,
        }"
      >
        Hobby projects
      </h1>
      <v-row class="mt-3">
        <v-col
          v-for="project in hobbyProjects"
          :key="project.title"
          cols="12"
          xl="4"
          lg="4"
          md="6"
          sm="12"
          xs="12"
        >
          <v-card
            hover
            color="#f5f5f5"
            class="mx-auto"
            max-width="550"
            rounded="lg"
          >
            <v-card-title
              style="background-color: #301e67; color: white"
              :class="{ spacemode: spacemode }"
              :data-text="project.title"
            >
              {{ project.title }}
              <div class="rain" :class="{ spacemode: spacemode }"></div>
            </v-card-title>
            <v-img
              class="align-end text-white"
              height="350"
              :src="project.image"
              cover
            >
            </v-img>

            <v-divider> </v-divider>

            <v-card-subtitle
              class="pt-4"
              :style="{
                backgroundColor: $vuetify.theme.current.colors.cardBackground,
                color: $vuetify.theme.current.colors.mainText,
              }"
            >
              {{ project.tech }}
            </v-card-subtitle>

            <v-card-text
              :style="{
                backgroundColor: $vuetify.theme.current.colors.cardBackground,
                color: $vuetify.theme.current.colors.mainText,
              }"
            >
              <div>{{ project.description }}</div>
            </v-card-text>

            <v-card-actions
              :style="{
                backgroundColor: $vuetify.theme.current.colors.cardBackground,
                color: $vuetify.theme.current.colors.mainText,
              }"
            >
              <v-btn
                class="button"
                variant="outlined"
                prepend-icon="mdi-web"
                color="secondaryText"
                elevated
                v-if="project.published"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                :class="{ spacemode: spacemode }"
              >
                Visit
              </v-btn>

              <v-btn
                class="button"
                variant="outlined"
                prepend-icon="mdi-github"
                color="secondaryText"
                v-if="project.code"
                :href="project.code"
                target="_blank"
                rel="noopener noreferrer"
                :class="{ spacemode: spacemode }"
              >
                Code
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import tinyImage from "@/assets/tiny.jpg";
import portoImage from "@/assets/portofolio.jpg";
import universe from "@/assets/universe.jpg";
import fireAndFlesh from "@/assets/images/fire2.jpg";
import dragon from "@/assets/images/Dragon.jpg";
import warehouse from "@/assets/warehouse.jpg";
import { spacemode } from "@/stores/spacemode";
import portopru from "@/assets/pruport2.jpg";
import pruSmall from "@/assets/images/pruSmall.jpg";

const hobbyProjects = [
  {
    title: "Dragon hero",
    description:
      "I recently began working on a Unity game as a hobby project. It involves using C# and the Unity engine.",
    tech: "C# and Unity",
    published: true,
    image: dragon,
    link: "https://play.unity.com/en/games/fe0fbeae-9381-4518-83c0-377a728f5a2a/build",
    code: "",
  },
  {
    title: "Tommy's lagersytem",
    description:
      "Warehouse management system. Insert items to stands and search for their locations. Made using Laravel and filament.",
    tech: "Laravel, Filament",
    published: false,
    image: warehouse,
    link: "",
    code: "https://github.com/TommyEvertsen/Warehouse_system",
  },
  {
    title: "Fire and flesh",
    description:
      "I created a recipe-sharing website, now offline due to costs. It was a fun CRUD project where I learned a lot.",
    tech: "Laravel and Vue",
    published: false,
    image: fireAndFlesh,
    link: "",
    code: "https://github.com/TommyEvertsen/FireandFlesh-sharing-recipes-",
  },
  {
    title: "Portofolio Pru",
    description:
      "Portofoilo for my wife created with similar technology as this portofolio. Code my me and design by my wife.",
    tech: "Vue.js, Vuetify",
    published: true,
    image: pruSmall,
    link: "https://tommyevertsen.github.io/Portofolio-Pru",
    code: "https://github.com/TommyEvertsen/Portofolio-Pru",
  },

  {
    title: "Tiny productions photography",
    description:
      "Made a web page for a friend. A webpage dedicated to art and portraits. Now being updated by the recipent",
    tech: "HTML and CSS",
    published: true,
    image: tinyImage,
    link: "https://tinyproductions.no/home.html",
    code: "https://github.com/TommyEvertsen/Tiny-Productions-Photographer",
  },
  {
    title: "Portofolio",
    description:
      "I'm creating a personal portfolio using Vuetify 3. It's been a fun hobby project where I've learned to work with Vuetify.",
    tech: "Vue.js",
    published: false,
    image: portoImage,
    link: "",
    code: "https://github.com/TommyEvertsen/About_me",
  },
  {
    title: "Astronomy picture of the day",
    description:
      "Made with API from NASA to show new pictures everyday of the universe. I would also like to add the mars rover api in the future",
    tech: "React.Js",
    published: false,
    image: universe,
    link: "",
    code: "https://github.com/TommyEvertsen/Astronomy-picture-of-the-day-React.js",
  },
];
</script>

<style scoped>
.v-card-subtitle {
  opacity: 100;
  font-weight: bolder;
}
</style>
