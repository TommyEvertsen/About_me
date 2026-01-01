<template>
  <main>
    <v-container>
      <v-row>
        <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
          <h1
            class="mt-10"
            :style="{
              color: $vuetify.theme.current.colors.secondaryText,
            }"
          >
            Game development
          </h1>
          <div
            class="introText mt-10"
            cols="12"
            xl="5"
            lg="5"
            md="12"
            sm="12"
            xs="12"
          >
            <p class="pt-5">
              Game devlopment is a field i really love but dont have enough free
              time to pursue. I wish i could have more time to learn more about
              this and create the games of my imagination.
            </p>

            <p class="pt-5">
              When i was younger i created 2 videogames wich each took around 2
              years to complete. It was a very enjoyable experience for me, i
              could use endless creativity in creating what i wanted. Making
              games is very time consuming
            </p>
          </div>
        </v-col>
        <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
          <!--  <v-img
            src="@/assets/images/dragon.jpg"
            class="rounded-lg mt-10"
            max-height="500"
            max-width="800"
          >
          </v-img> -->
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import "@/styles/styles.css";
</script>
