<template>
  <main>
    <v-container class="px-10 mt-10 mb-10">
      <v-row>
        <v-col class="pa-2" cols="12" xl="5" lg="6" md="6" sm="12" xs="12">
          <h1
            class="center"
            :style="{
              color: $vuetify.theme.current.colors.secondaryText,
            }"
          >
            Contact me
          </h1>
          <div class="mt-10">
            <div style="font-size: large; line-height: 2em">
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

            <h2 class="mt-10">Contact information</h2>

            <p class="mt-10" style="font-size: large; line-height: 2em">
              Tommy Evertsen
            </p>

            <p style="font-size: large; line-height: 2em">
              Email: tommyevertsen85@gmail.com
            </p>

            <h3 class="mt-10">Stay in touch!</h3>

            <div class="mt-10">
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
            src="@/assets/images/tommyAvatar.jpg"
            class="rounded-lg mx-auto"
            max-height="500"
            max-width="900"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";

const currentTime = ref("");
const currentActivity = ref("");
const addTime = ref("");

onMounted(() => {
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
});

const time = currentTime;
const activity = currentActivity;
const add = addTime;
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
  .center {
    text-align: center;
  }
}
</style>
