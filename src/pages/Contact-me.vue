<template>
  <main>
    <v-container class="px-10 mt-10 mb-10">
      <v-row>
        <v-col class="pa-2" cols="12" xl="5" lg="6" md="6" sm="12" xs="12">
          <h1
            class=""
            :style="{
              color: $vuetify.theme.current.colors.secondaryText,
            }"
            :class="{ spacemode: spacemode }"
          >
            Contact me
          </h1>
          <div class="mt-10">
            <div class="paragraphText">
              Good {{ time }} Welcome to my contact page. Please feel free to
              reach out to me using the email address provided below. If you are
              interested in exploring my coding projects, you can visit my
              GitHub profile through the link provided. Additionally, a link to
              my LinkedIn profile is available if you wish to learn more about
              my professional background. <br />
              <br />

              <p>
                Right now it's {{ time }}{{ add }} so i am probably
                {{ activity }} but i will answer as soon as i can.
              </p>
              <br />

              <p>Have a good {{ time }}</p>
            </div>

            <h2 class="mt-10" :class="{ spacemode: spacemode }">
              Contact information
            </h2>

            <p class="mt-10 paragraphText">Tommy Evertsen</p>

            <p class="paragraphText">Email: tommyevertsen85@gmail.com</p>

            <h3 class="mt-10" :class="{ spacemode: spacemode }">
              Stay in touch!
            </h3>

            <div class="mt-5">
              <v-btn
                href="https://www.linkedin.com/in/tommy-evertsen/"
                color="secondaryText"
                density="comfortable"
                class="button mr-2"
                icon="mdi-linkedin"
                hover
              ></v-btn>
              <v-btn
                href="https://github.com/TommyEvertsen"
                color="secondaryText"
                density="comfortable"
                class="button mx-2"
                icon="mdi-github"
              ></v-btn>
            </div>
          </div>
        </v-col>
        <v-col class="pa-2">
          <v-img
            :src="contactPhoto"
            class="rounded-lg mx-auto floating-img"
            :class="{ spacemode: spacemode }"
            max-height="600"
            max-width="900"
          >
          </v-img>

          <div class="secretButtonDiv mt-5">
            <v-btn
              v-if="secretButtonVisible"
              class="secretButton"
              @click="handleSecretButton"
            >
              <span class="secretMark">?</span>
            </v-btn>
          </div>

          <div v-if="alert" class="centered-alert">
            <v-alert
              class="alert"
              v-model="alert"
              close-label="Lukk"
              color="success"
              icon="mdi-trophy"
              title="Achievement unlocked"
              variant="elevated"
              closable
            >
              You found the secret button, good job!
            </v-alert>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { secretButtonUnlocked } from "@/stores/achievements";
import { spacemode } from "@/stores/spacemode";
import contactPhoto from "@/assets/images/profile/Tommy111.png";

const currentTime = ref("");
const currentActivity = ref("");
const addTime = ref("");
const secretButtonVisible = ref(true);

const showContactMe = ref(false);
const showContactInfo = ref(false);
const showStayInTouch = ref(false);

const now = new Date();
const hour = now.getHours();

if (hour >= 22 || hour < 5) {
  currentTime.value = "night";
  currentActivity.value = " sleeping";
} else if (hour >= 6 && hour < 10) {
  currentTime.value = " morning";
  currentActivity.value = "at work";
} else if (hour >= 11 && hour < 18) {
  currentTime.value = " day";
  currentActivity.value = "at work";
  addTime.value = "time";
} else {
  currentTime.value = " evening";
  currentActivity.value = "enjoying a hobby activity";
}

const time = currentTime;
const activity = currentActivity;
const add = addTime;
const alert = ref(false);

function handleSecretButton() {
  if (
    !secretButtonUnlocked.value &&
    sessionStorage.getItem("secretButtonUnlocked") !== "true"
  ) {
    secretButtonVisible.value = false;
    secretButtonUnlocked.value = true;
    alert.value = true;
    sessionStorage.setItem("secretButtonUnlocked", "true");
  }
}

onMounted(() => {
  if (sessionStorage.getItem("secretButtonUnlocked") === "true") {
    secretButtonUnlocked.value = true;
    secretButtonVisible.value = false;
    alert.value = false;
  }
});
</script>

<style>
.contact-text {
  font-size: large;
  line-height: 2em;
}

.button:hover {
  opacity: 80%;
}

@media screen and (max-width: 768px) {
  .floating-img {
    margin-top: 20px;
  }
}

.secretButton {
  box-shadow: none;
  border: none;
}

.secretMark {
  opacity: 0;
  transition: opacity 0.2s;
}

.secretButton:hover .secretMark {
  opacity: 1;
}

.floating-img.spacemode {
  animation: floating 3s ease-in-out infinite;
}
@keyframes floating {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
}
</style>
