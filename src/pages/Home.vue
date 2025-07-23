<template>
  <main>
    <v-container class="px-10 mb-10">
      <v-row>
        <v-col cols="12" xl="5" lg="5" md="12" sm="12" xs="12" class="mt-10">
          <v-sheet class="centerHome">
            <h3 class="fade-in">Hi there i'm</h3>
            <h1 class="mt-2 fade-in-slow" style="color: #5b8fb9">
              Tommy Evertsen
            </h1>
            <v-divider class="fade-in-snail" length="300" thickness="2">
            </v-divider>
            <h2 class="fade-in-snail">Senior software engineer</h2>
            <p
              class="mt-10"
              style="font-size: large; line-height: 1, 2rem; text-align: left"
            >
              I am a web and game developer with a passion for both fields.
              <br />
              <br />
              Professionally, I work as a full-stack developer, where I have
              developed websites and applications for a diverse range of
              clients. In my spare time, I create video games using C# and
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
                style="color: #ffff; background-color: #5b8fb9"
                variant="outlined"
              >
                {{ technology.title }}
              </v-chip>
            </v-chip-group>

            <v-btn
              class="button mt-10"
              variant="outlined"
              prepend-icon="mdi-web"
              color="#5B8FB9"
              @click="$router.push({ name: 'contact' })"
            >
              Contact me</v-btn
            >
          </v-sheet>
        </v-col>

        <v-col cols="12" xl="7" lg="7" md="12" sm="12" xs="12">
          <v-img :src="tommy" max-height="800" rounded="circle"> </v-img>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";

import { ref } from "vue";
const loaded = ref(false);

import tommy from "@/assets/images/tommyMosq.jpg";

const router = useRouter();

const technologies = [
  {
    title: "Javascript",
    color: "#F9E79F",
  },
  {
    title: "PHP",
    color: "#7377ad",
  },
  {
    title: "C#",
    color: "#BB8FCE",
  },
  {
    title: "Laravel",
    color: "#E74C3C ",
  },
  {
    title: "Vue.js",
    color: "#52BE80 ",
  },
  {
    title: "Unity",
    color: "#BFC9CA",
  },
  {
    title: "Tailwind",
    color: "#5DADE2",
  },
  {
    title: "HTML",
    color: "#E74C3C",
  },
  {
    title: "CSS",
    color: "#73C6B6",
  },
  {
    title: "Azure",
    color: "#85C1E9 ",
  },
  {
    title: "SQL",
    color: "#85C1E9 ",
  },
  {
    title: "Oracle apex",
    color: "#85C1E9 ",
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
@media screen and (max-width: 768px) {
  .centerHome {
    text-align: center;
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
</style>
