<template>
  <main>
    <v-container>
      <div
        class="div1"
        :style="{
          /*  backgroundColor: $vuetify.theme.current.colors.mainBackground, */
        }"
      ></div>

      <div
        class="div2"
        :style="{
          backgroundColor: $vuetify.theme.current.colors.secondaryText,
        }"
      ></div>
    </v-container>
  </main>
</template>

<script setup>
import paper from "@/assets/paper.jpg";
import tommy from "@/assets/images/tommyAvatar.jpg";
</script>

<style scoped>
.background {
  background-color: #fdfdfd;
  opacity: 0.6;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #fdfdfd 22px
    ),
    repeating-linear-gradient(#d1d2d855, #d1d2d8);
}

.div1 {
  height: 40vh;
  width: auto;
  min-height: 50vh;
  min-width: auto;
  margin: 0;
  padding: 0;
  background-color: red;
}

.div2 {
  height: 40vh;
  width: auto;
  min-height: 50vh;
  min-width: auto;
  margin: 0;
  padding: 0;

  clip-path: polygon(0% 100%, 100% 100%, 50% 0%);
}

.v-container {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
