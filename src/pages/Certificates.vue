<template>
  <main>
    <v-container class="mt-10 mb-10">
      <h1
        style="text-align: center"
        :style="{
          color: $vuetify.theme.current.colors.secondaryText,
        }"
      >
        Certificates
      </h1>
      <v-row class="">
        <v-col
          v-for="(certificate, index) in certificates"
          :key="certificate.title"
          cols="12"
          xl="4"
          lg="4"
          md="6"
          sm="12"
          xs="12"
        >
          <v-card
            rounded="lg"
            hover
            color="#f5f5f5"
            class="mx-auto mt-5"
            max-width="550"
            :subtitle="certificate.title"
            :title="certificate.provider"
            ><v-img
              class="align-end text-white"
              width="100%"
              height="350"
              :src="certificate.image"
              contain
            >
            </v-img>

            <template v-slot:prepend>
              <v-icon :icon="certificate.icon" color="white"></v-icon>
            </template>
            <template v-slot:append>
              <v-tooltip activator="parent" location="end"
                >View certificate</v-tooltip
              >
              <v-icon
                v-if="certificate.link"
                @click="openCertificateLink(certificate.link)"
                color="success"
                icon="mdi-certificate-outline"
              >
              </v-icon>
            </template>

            <v-card-text
              :style="{
                backgroundColor: $vuetify.theme.current.colors.cardBackground,
                color: $vuetify.theme.current.colors.mainText,
              }"
            >
              {{ certificate.subtitle }}
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
                prepend-icon="mdi-lightbulb-on-outline"
                color="secondaryText"
                @click="toggleReveal(index)"
              >
                Show skills
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                hover
                color="#f5f5f5"
                v-if="reveal[index]"
                class="reveal"
                style="height: 100%"
                :title="certificate.provider"
                subtitle="Skills learned"
              >
                <template v-slot:prepend>
                  <v-icon
                    color="#1a237e"
                    icon="mdi-lightbulb-on-outline"
                  ></v-icon>
                </template>
                <v-img
                  class="align-end text-white"
                  width="100%"
                  height="350"
                  :src="certificate.image"
                  contain
                >
                </v-img>

                <template v-slot:append>
                  <v-tooltip activator="parent" location="end"
                    >View certificate</v-tooltip
                  >
                  <v-icon
                    v-if="certificate.link"
                    @click="openCertificateLink(certificate.link)"
                    color="success"
                    icon="mdi-certificate-outline"
                  >
                  </v-icon>
                </template>

                <v-card-text
                  class="pb-0 d-flex justify-start ga-2"
                  :style="{
                    backgroundColor:
                      $vuetify.theme.current.colors.cardBackground,
                    color: $vuetify.theme.current.colors.mainText,
                  }"
                >
                  <v-chip
                    v-for="skill in certificate.skills"
                    :style="{
                      backgroundColor: skill.color,
                      color: $vuetify.theme.current.colors.offText,
                    }"
                    >{{ skill.title }}
                  </v-chip>
                </v-card-text>
                <v-card-actions
                  class="pt-0"
                  :style="{
                    backgroundColor:
                      $vuetify.theme.current.colors.cardBackground,
                    color: $vuetify.theme.current.colors.mainText,
                  }"
                >
                  <v-btn
                    class="button mt-3"
                    prepend-icon="mdi-close-circle-outline"
                    variant="outlined"
                    color="secondaryText"
                    @click="toggleReveal(index)"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import { ref } from "vue";
import fundamentals from "@/assets/fundamentals.jpg";
import developerAccociate from "@/assets/developerAssociate.jpg";
import mosh from "@/assets/mosh.jpg";
import c from "@/assets/c.jpg";
import udemy from "@/assets/udemy.jpg";
import duke from "@/assets/images/duke.jpg";
import ucdavis from "@/assets/images/ucdavis.jpg";
import apexcertif from "@/assets/apex.jpg";

const certificates = [
  {
    title: "Azure associate developer",
    provider: "Microsoft",
    icon: "mdi-microsoft",
    icon2: "mdi-check",
    subtitle: " Developing solutions for Azure",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/TommyEvertsen-1328/BB3A2F4F19B155FB?sharingId=99D48DE3DEFDE0E2",
    skills: [
      {
        title: "Azure",
        color: "#008ad7",
        text: "#ffffff",
      },
      {
        title: "C#",
        color: "#9f73d9",
        text: "#ffffff",
      },
    ],
    image: developerAccociate,
  },
  {
    title: "Azure fundamentals",
    provider: "Microsoft",
    icon: "mdi-microsoft",
    icon2: "mdi-check",
    subtitle: "Fundamental knowledge of Azure ",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/TommyEvertsen-1328/F2C8E89DB98AE800?sharingId=99D48DE3DEFDE0E2",
    skills: [
      {
        title: "Azure",
        color: "#008ad7",
        text: "#ffffff",
      },
    ],
    image: fundamentals,
  },
  {
    title: "Oracle Application Express Workshop",
    provider: "Glasspaper",
    icon: "mdi-alpha-g-box-outline",
    icon2: "mdi-check",
    subtitle: "Oracle apex",

    skills: [
      {
        title: "Oracle apex",
        color: "#68845f",
        text: "#ffffff",
      },
    ],
    image: apexcertif,
  },
  {
    title: "Foundational C# with Microsoft",
    provider: "Microsoft",
    icon: "mdi-microsoft",
    icon2: "mdi-check",
    subtitle: "Programming in C#",
    link: "https://www.freecodecamp.org/certification/fcc437d45cb-1f04-4475-980b-4c8b14728c1a/foundational-c-sharp-with-microsoft",
    skills: [
      {
        title: "C#",
        color: "#9f73d9",
        text: "#ffffff",
      },
    ],
    image: c,
  },
  {
    title: "Web development bootcamp",
    provider: "Udemy",
    icon: "mdi-alpha-u-circle-outline",
    icon2: "mdi-check",
    subtitle: "Bootcamp with Javascript and React",
    link: "https://www.udemy.com/certificate/UC-001a5901-bd56-4f6c-b456-2d5bbd07d298/",
    skills: [
      {
        title: "Javascript",
        color: "#FFA500",
      },
      {
        title: "Node.Js",
        color: "#80bd00",
      },
      {
        title: "React.Js",
        color: "#61dafb",
      },
    ],
    image: udemy,
  },
  {
    title: "Ultimate JavaScript mastery series",
    provider: "Code with Mosh",
    icon: "mdi-alpha-m-box-outline",
    icon2: "mdi-check",
    subtitle: "Programming in JavaScript",

    skills: [
      {
        title: "JavaScript",
        color: "#FFA500",
      },
      {
        title: "HTML",
        color: "#f1672b",
      },
      {
        title: "CSS",
        color: "#214ce5",
        text: "#ffffff",
      },
    ],
    image: mosh,
  },
  {
    title: "JavaScript basics",
    provider: "University of California",
    icon: "mdi-school-outline",
    icon2: "mdi-check",
    subtitle: "Programming in JavaScript",
    link: "https://www.coursera.org/account/accomplishments/certificate/WZ5J9X7BDR76",
    skills: [
      {
        title: "JavaScript",
        color: "#FFA500",
      },
      {
        title: "HTML",
        color: "#f1672b",
      },
      {
        title: "CSS",
        color: "#214ce5",
        text: "#ffffff",
      },
    ],
    image: duke,
  },
  {
    title: "Programming foundations",
    provider: "Duke University",
    icon: "mdi-school-outline",
    icon2: "mdi-check",
    subtitle: "Programming in JavaScript",
    link: "https://www.coursera.org/account/accomplishments/certificate/X222N6PTW345",
    skills: [
      {
        title: "JavaScript",
        color: "#FFA500",
      },
      {
        title: "HTML",
        color: "#f1672b",
      },
      {
        title: "CSS",
        color: "#214ce5",
        text: "#ffffff",
      },
    ],
    image: ucdavis,
  },
];

const reveal = ref(Array(certificates.length).fill(false));

const toggleReveal = (index) => {
  reveal.value[index] = !reveal.value[index];
};

const openCertificateLink = (link) => {
  window.open(link, "_blank");
};
</script>

<style>
.reveal {
  bottom: 0 !important;
  opacity: 1 !important;
  position: absolute !important;
  width: 100% !important;
}

.v-card-item {
  background-color: #1a237e;
}

.v-card-title {
  color: white;
}

.v-card-subtitle {
  color: white;
}

/* .button:hover {
  background-color: #5b8fb9;
  color: aliceblue !important;
} */

.v-img {
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: cover;
}

@media (max-width: 600px) {
  .v-img {
    max-height: 180px;
  }
}
</style>
