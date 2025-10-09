<template>
  <main>
    <v-container>
      <v-row>
        <v-col cols="12" xl="6" lg="6" md="6" sm="12">
          <div class="div1"></div>
          <h1>Tommy Evertsen</h1>
        </v-col>
        <v-col cols="12" xl="6" lg="6" md="6" sm="12">
          <div class="div2"></div>
          <v-img :src="tommy"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import paper from "@/assets/paper.jpg";
import tommy from "@/assets/images/tommyAvatar.jpg";
</script>

<style>
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
</style>
