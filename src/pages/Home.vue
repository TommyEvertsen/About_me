<template>
  <main>
    <v-container class="px-10 mb-10">
      <v-row>
        <v-col cols="12" xl="5" lg="5" md="12" sm="12" xs="12" class="mt-10">
          <v-sheet
            :style="{
              backgroundColor: $vuetify.theme.current.colors.mainBackground,
            }"
          >
            <h3 class="fade-in center-home">Hi there i'm</h3>
            <h1
              class="mt-2 fade-in-slow"
              :style="{
                color: $vuetify.theme.current.colors.secondaryText,
              }"
            >
              Tommy Evertsen
            </h1>
            <v-divider class="fade-in-snail" length="300" thickness="2">
            </v-divider>
            <h2 class="fade-in-snail">Senior software engineer</h2>
            <p class="mt-10 paragraphText">
              I am a web and game developer with a passion for both fields.
              <br />
              <br />
              Professionally, I work as a full-stack developer, creating
              tailored solutions for researchers. My work enables them to
              efficiently collect and store data while conducting fieldwork in
              nature, and to manage, edit, and analyze their findings once back
              in the office. In my spare time, I create video games using C# and
              Unity. Additionally, I have studied Microsoft Azure extensively
              and hold two certifications: Azure Fundamentals and Azure
              Developer Associate, as I firmly believe that the future of
              technology lies in cloud computing.
              <br />
              <br />
              I am committed to continuous learning and take pleasure in
              exploring new technologies and concepts. I find the process of
              learning both enjoyable and fulfilling.

              <br />
              <br />
              Please feel free to contact me if you have any questions.
            </p>
            <p class="mt-10" style="font-weight: bold; font-size: larger">
              My technologies:
            </p>

            <v-chip-group column class="mt-5">
              <v-chip
                v-for="technology in technologies"
                :key="technology.title"
                variant="text"
                :style="{
                  color: $vuetify.theme.current.colors.offText,
                  backgroundColor: $vuetify.theme.current.colors.secondaryText,
                }"
              >
                {{ technology.title }}
              </v-chip>
            </v-chip-group>

            <v-btn
              class="button mt-10"
              variant="outlined"
              prepend-icon="mdi-web"
              color="secondaryText"
              @click="$router.push({ name: 'contact' })"
              :class="{ spacemode: spacemode }"
            >
              Contact me</v-btn
            >
          </v-sheet>
        </v-col>

        <v-col cols="12" xl="7" lg="7" md="12" sm="12" xs="12" class="mt-10">
          <div class="imageContainer">
            <v-img
              :src="tommyCut"
              max-height="600"
              max-width="600"
              class="profileImage"
              :class="{ spacemode: spacemode }"
            >
            </v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import { spacemode } from "@/stores/spacemode";
import tommyCut from "@/assets/images/Designer.png";

const technologies = [
  {
    title: "Javascript",
  },
  {
    title: "PHP",
  },
  {
    title: "C#",
  },
  {
    title: "Laravel",
  },
  {
    title: "Vue.js",
  },
  {
    title: "Unity",
  },
  {
    title: "Tailwind",
  },
  {
    title: "HTML",
  },
  {
    title: "CSS",
  },
  {
    title: "Azure",
  },
  {
    title: "SQL",
  },
  {
    title: "Oracle apex",
  },
  {
    title: "Java",
  },
  {
    title: "Typescript",
  },
];
</script>

<style>
.imageContainer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: start;
}

/* .imageContainer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #5b8fb9;
  overflow: hidden;
} */

.profileImage {
  position: relative;
  overflow: visible;
}

@media screen and (max-width: 768px) {
  .centerHome {
    text-align: center;
  }

  .imageContainer {
    justify-content: center;
  }
}

.fade-in {
  animation: fadein 2s;
}

.fade-in-slow {
  opacity: 0;
  animation: fadeinslow 1s ease-in 1s forwards;
}

.fade-in-snail {
  opacity: 0;
  animation: fadeinsnail 1s ease-in 2s forwards;
}

@property --deg {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0deg;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeinslow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeinsnail {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes autoRotate {
  to {
    --deg: 360deg;
  }
}
</style>
