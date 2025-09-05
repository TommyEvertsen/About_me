<template>
  <main>
    <v-container class="px-10 mt-10 mb-10">
      <v-row>
        <v-col class="pa-2" cols="12" lg="6" md="12" sm="12" xs="12">
          <v-sheet
            max-width="800"
            width="100%"
            rounded
            :style="{
              backgroundColor: $vuetify.theme.current.colors.mainBackground,
            }"
          >
            <div>
              <h1
                class="headlineMe"
                :style="{
                  color: $vuetify.theme.current.colors.secondaryText,
                }"
              >
                About me
              </h1>

              <div class="text-body-2 mt-8 about-me-text">
                <p style="font-size: large">My name is Tommy Evertsen.</p>

                <p class="pt-5" style="font-size: large">
                  I am happily married and reside in Trondheim, where I enjoy a
                  vibrant and fulfilling life.
                </p>

                <p class="pt-5" style="font-size: large">
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

                <p class="pt-5" style="font-size: large">
                  Lastly, I have a profound passion for programming and
                  continuously seek to expand my knowledge in this field. The
                  vast array of topics and technologies available for
                  exploration is something I find immensely appealing. I
                  particularly enjoy web development and video game development,
                  both of which provide me with a great deal of satisfaction and
                  enjoyment.
                </p>

                <p class="pt-5" style="font-size: large">
                  Other hobbies include: fishing, video games, boardgames,
                  creating videogames in Unity, skiing, and
                  <span>
                    <v-tooltip activator="parent" location="bottom"
                      >(Drinking beer)</v-tooltip
                    >
                    more.
                  </span>
                </p>
                <br />

                <p class="mt-10" style="font-size: large">
                  I hope you have a wonderful
                  <span class="day">{{ day }}!</span>
                </p>
              </div>
            </div>
          </v-sheet>
        </v-col>
        <v-col class="pa-2" cols="12" lg="6" md="12" sm="12" xs="12">
          <v-carousel v-if="smAndUp" height="600" cycle continuous touch>
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
            height="300"
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
import { useDisplay } from "vuetify";

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
</script>

<style>
@media screen and (max-width: 768px) {
  .coding_journey {
    margin-top: 0 !important;
  }

  .headlineMe {
    text-align: center;
  }
}

.about-me-text {
  line-height: 2em;
}

/* .headlineMe {
  color: #5b8fb9;
} */
</style>
