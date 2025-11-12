<template>
  <main>
    <v-container class="px-10 mt-10 mb-10">
      <v-row>
        <v-col class="pa-2" cols="12" xl="6" lg="5" md="12" sm="12" xs="12">
          <div
            max-width="800"
            width="100%"
            rounded
            class="textContainer"
            :class="{ spacemode: spacemode }"
          >
            <div>
              <h1
                class="headlineMe"
                :style="{
                  color: $vuetify.theme.current.colors.secondaryText,
                }"
                :class="{ spacemode: spacemode }"
                data-text="About me"
              >
                About me
              </h1>

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
                  You found my secret hobby, good job!
                </v-alert>
              </div>

              <div
                class="mt-8 paragraphText aboutmeText"
                :class="{ spacemode: spacemode }"
              >
                <p>My name is Tommy Evertsen.</p>

                <p class="pt-5">
                  I am happily married and reside in Trondheim, where I enjoy a
                  vibrant and fulfilling life.
                </p>

                <p class="pt-5">
                  Outside of work, I have several hobbies that I am passionate
                  about. I love traveling and exploring new places, as I believe
                  that nothing broadens the mind like experiencing different
                  cultures, cuisines, and landscapes. Traveling is a significant
                  part of my life, offering me a sense of wonder and adventure.
                  <br />
                  <br />
                  I also find great joy in nature, whether it's hiking, cabin
                  trips, or camping under the stars to the soothing sounds of
                  birds and water. These experiences make me feel profoundly
                  grateful and connected to the world around me.<br />
                  <br />
                  In addition to my love for nature, I am deeply interested in
                  continuous learning. I have a particular fascination with the
                  universe, prehistoric Earth, and history, especially the
                  Middle Ages and Viking era. Learning about these periods and
                  their way of life is incredibly intriguing to me.
                </p>
                <br />

                <p>
                  Lastly, I have a profound passion for programming and
                  continuously seek to expand my knowledge in this field. The
                  vast array of topics and technologies available for
                  exploration is something I find immensely appealing. I
                  particularly enjoy web development and video game development,
                  both of which provide me with a great deal of satisfaction and
                  enjoyment.
                </p>

                <p class="pt-5">
                  Other hobbies include: fishing, video games, boardgames,
                  creating videogames in Unity, skiing, and
                  <span>
                    <v-tooltip
                      activator="parent"
                      location="bottom"
                      @update:modelValue="
                        (val) => {
                          if (val) unlockHobby();
                        }
                      "
                    >
                      Drinking beer
                    </v-tooltip>
                    more.
                  </span>
                </p>
                <br />

                <p class="mt-10">
                  I hope you have a wonderful
                  <span class="day">{{ day }}!</span>
                </p>
              </div>
            </div>
          </div>
        </v-col>
        <v-col class="pa-2" cols="12" xl="6" lg="7" md="12" sm="12" xs="12">
          <v-carousel
            v-if="smAndUp"
            height="700"
            cycle
            interval="4000"
            continuous
            touch
            show-arrows="hover"
          >
            <v-carousel-item
              src="@/assets/onthehand.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/cabin.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/castle.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/buffalo.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/cactisforest.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/camping.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/tree.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/tekken.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/reefs.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>

          <v-carousel
            v-if="smAndDown"
            height="auto"
            cycle
            continuous
            touch
            :show-arrows="false"
          >
            <v-carousel-item
              src="@/assets/images/cabin.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/castle.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/buffalo.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/cactisforest.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/camping.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/tree.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/tekken.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="@/assets/images/reefs.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useDisplay } from "vuetify";
import { hobbyUnlocked } from "@/stores/achievements";
import { spacemode } from "@/stores/spacemode";

const alert = ref(false);

function unlockHobby() {
  if (
    !hobbyUnlocked.value &&
    sessionStorage.getItem("hobbyUnlocked") !== "true"
  ) {
    hobbyUnlocked.value = true;
    alert.value = true;
    sessionStorage.setItem("hobbyUnlocked", "true");
  }
}

const { smAndUp } = useDisplay();
const { smAndDown } = useDisplay();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const date = new Date();
let day = days[date.getDay()];

onMounted(() => {
  if (sessionStorage.getItem("hobbyUnlocked") === "true") {
    hobbyUnlocked.value = true;
    alert.value = false;
  }
});
</script>

<style>
.aboutmeText {
  padding-right: 2rem;
}

@media screen and (max-width: 768px) {
  .aboutmeText {
    padding-right: unset !important;
  }
}
</style>
